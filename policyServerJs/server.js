const express = require('express');
const bodyParser = require('body-parser');
const PEP = require('./pep');
const PDP = require('./pdp');
const cors = require('cors')
require('dotenv').config();


const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  const allowedOrigins = process.env.ALLOWED_ORIGINS;
  const origin = req.headers.origin;
  console.log('ORIGIN', origin)

  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.post('/evaluateRequest/:projectId', (req, res) => {
  console.log('IDIDIDI', req.params.projectId)
  var projectId = req.params.projectId
  console.log('REQUEST', JSON.stringify(req.body))
  // PEP.enforcePolicy(req, res);
  PDP.evaluateRequest(req, res, projectId);
});

app.post('/policiesConfiguration', (req, res) => {
  const transformedJsonString = JSON.stringify(req.body)
  const transformedJsonPath = 'policiesConfig.json'

  fs.writeFile(transformedJsonPath, transformedJsonString, (err) => {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    } else {
      console.log('JSON transformed and created Successfully')
      res.sendStatus(200)
    }
  })
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
