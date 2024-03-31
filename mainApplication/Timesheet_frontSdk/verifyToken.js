const jwt = require('jsonwebtoken')
const path = require('path');
const axios = require('axios');
const { request } = require('http');
require('dotenv').config();

function validateToken(dirname, req, res) {
    try {
        const SECRET_KEY = process.env.SECRET_KEY
        const token = JSON.stringify(req.headers.cookie);
        try {
            let config = {}
            let body = {}
            const decoded = jwt.verify(token.slice(1, -1), SECRET_KEY);

            // Policy server request prep
            // Action
            var action = 'get' + dirname
            body.action = action
            // Subject
            var userId = decoded.id

            axios.get(`${process.env.VITE_AUTHENTICATION_SERVER_URL}users/${userId}`)
                .then(response => {
                    console.log('User login service data:', response.data);
                    // Subject 
                    body.subject = response.data

                    let urlParts = req.url.split('/')
                    console.log('UrlParts', urlParts)

                    // Config for the request to policy server
                    config = {
                        method: 'post',
                        maxBodyLength: Infinity,
                        url: `${process.env.VITE_POLICY_SERVER_URL}evaluateRequest/123456789`,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: body
                    }
                    console.log('Data:', body)

                }).then(() => {
                    // Request to policyServer
                    axios.request(config)
                        .then((policyRes) => {
                            console.log(JSON.stringify(policyRes.data.message));
                            if (policyRes.data.message === "Access granted") {
                                // Decision
                                res.sendFile(path.join(__dirname, 'html', dirname + '.html'))
                            }
                        })
                        .catch((error) => {
                            if (error.response.status === 403) {
                                res.redirect('back')
                            } else {
                                console.error('Error:', error);
                            }
                        });
                })

        } catch (error) {
            console.log(error)
            res.redirect(`${process.env.VITE_AUTHENTICATION_CLIENT_URL}login`)
        }

    } catch (error) {
        res.redirect(`${process.env.VITE_AUTHENTICATION_CLIENT_URL}login`)
    }
}

module.exports = { validateToken };