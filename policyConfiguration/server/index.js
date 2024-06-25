const express = require('express')
const mongoose = require('mongoose')
const ApplicationConfigModel = require('./models/applicationConfig')
const cors = require('cors')
const transformJson = require('./policyServerJson')
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const jsonTransform = require('./jsonTransform')
require('dotenv').config();

var CLIENT_ID = process.env.GITHUB_CLIENT_ID
var CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET

mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}` + `${process.env.MONGO_POLICY_CONFIGURATION_DB}`)

const app = express()
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Endpoint for the access token of the user that was authenticated
app.get('/getGithubAccessToken', (req, res) => {
    const queryPath = `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`
    axios.post(process.env.GITHUB_AUTH_URL + queryPath)
        .then(response => {
            var responseParams = response.data.split('&')
            var access_token = responseParams[0].split('=')[1]
            console.log(access_token)
            res.send(access_token)
        })
})

// Endpoint for the user data of the github user 
app.get('/githubUserData', (req, res) => {
    console.log(req.get('Authorization'))
    axios.get(process.env.GITHUB_USER_URL, {
        headers: {
            'Authorization': 'Bearer ' + req.get('Authorization')
        }
    })
        .then((response) => {
            console.log(response.data)
            res.send(response.data)
        })
})

// Endpoint to save the applications configurations from WABLI 
app.post('/applicationConfig', (req, res) => {
    console.log(req.body)
    ApplicationConfigModel.create(req.body)
    res.sendStatus(200)
})

// Endpoint to get the applications from the DB for a specific github user
app.post('/userApplications', (req, res) => {
    ApplicationConfigModel.find({ username: req.body.username })
        .then(applications => {
            if (applications) {
                console.log(applications)
                res.status(200).json(applications)
            }
        })
})

// Endpoint to get the transformed object of a specific project from the DB
app.get('/configurationObject/:id', (req, res) => {
    ApplicationConfigModel.find({ projectId: req.params.id })
        .then(application => {
            if (application) {
                // console.log(application[0].configuration)
                var response = JSON.parse(jsonTransform.jsonTransform(application[0].configuration))
                console.log('RESPONSE', response)
                res.status(200).json(response)
            }
        })
})

app.get('/policiesConfigurationObject/:id', (req, res) => {
    ApplicationConfigModel.find({ projectId: req.params.id })
        .then(application => {
            if (application) {
                var response = application[0].policiesConfiguration
                res.status(200).send(response)
            }
        })
})

app.post('/policiesConfig/:id', (req, res) => {
    var resJson = transformJson.policyServerJson(req.body)

    var filter = { projectId: req.params.id }
    var update = { policiesConfiguration: resJson }
    ApplicationConfigModel.findOneAndUpdate(filter, update)
        .then(() => {
            res.status(200).send('OK')
        })
})

app.get('/health', (req, res) => {
    res.sendStatus(200).send('OK')
})

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is running', `${process.env.MONGO_CONNECTION_STRING}`)
})