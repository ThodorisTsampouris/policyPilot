const express = require('express');
const bodyParser = require('body-parser');
const PDP = require('./pdp');
const cors = require('cors')
require('dotenv').config();


const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  const allowedOrigins = process.env.ALLOWED_ORIGINS;
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.post('/evaluateRequest/:projectId', (req, res) => {
  var projectId = req.params.projectId
  PDP.evaluateRequest(req, res, projectId);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
