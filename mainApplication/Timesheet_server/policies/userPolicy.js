const axios = require('axios');
const Controller = require('../controllers/Controller');
const service = require('../services/UserService');
const jwt = require('jsonwebtoken');
require('dotenv').config();


function userPolicy(request, response, userAction, action) {

    // Initialize request objects
    let userId
    let config = {}
    let body = {}

    // GET SUBJECT'S ID WITH TOKEN FROM REQUEST
    const SECRET_KEY = process.env.SECRET_KEY;
    const token = JSON.stringify(request.headers[0]);
    const decoded = jwt.verify(token.slice(1, -1), SECRET_KEY);
    userId = decoded.id
    // GET USER OBJECT WITH REQUEST AT LOGIN SERVICE
    axios.get(`${process.env.VITE_AUTHENTICATION_SERVER_URL}users/${userId}`)
        .then(res => {
            // Subject 
            body.subject = res.data
            let urlParts = request.url.split('/')
            console.log('UrlParts', urlParts)
            // Action
            body.action = action

            // Resource
            let resourceName = `${urlParts[2]}`

            let userId = urlParts[3]
            console.log('Resource Id', userId)

            service.getuser({ userId }).then(res => {
                // Loading the resource to the request for the policy server
                body.resource = res.payload.query
                // Loading the resource type to the request for the policy server
                body.target = resourceName
                body = JSON.stringify(body)
                // Creating the request for the policy server
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
                        console.log('POLICY RESPONSE', JSON.stringify(policyRes.data.message));
                        if (policyRes.data.message === "Access granted") {
                            Controller.handleRequest(request, response, userAction);
                        }
                    })
                    .catch((error) => {
                        if (error.response.status === 403) {
                            console.log("Access denied")
                        } else {
                            console.error('Error:', error);
                        }
                    });
            })
        })
        .catch(error => {
            console.error('Error fetching user data:', error.message);
        });
}

module.exports = { userPolicy }