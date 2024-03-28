require('dotenv').config();
const mongoose = require('mongoose')
const ApplicationConfigModel = require('./models/applicationConfig.js')

mongoose.connect(process.env.MONGO_CONNECTION_STRING+process.env.MONGO_POLICY_CONFIGURATION_DB)

async function getPolicyInformation(req, projectId) {
  // Get the project's policyConfiguration from db
  const application = await ApplicationConfigModel.find({ projectId: projectId })
  const policyConfig = application[0].policiesConfiguration
  const policySubject = req.body.subject;
  const policyAction = req.body.action;
  const policyResource = req.body.resource;
  const policyTarget = req.body.target;

  return [policySubject, policyAction, policyResource, policyTarget, policyConfig];

}

module.exports = { getPolicyInformation };
