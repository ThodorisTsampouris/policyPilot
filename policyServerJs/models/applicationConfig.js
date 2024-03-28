const mongoose = require('mongoose');

const applicationConfigSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  projectId: {
    type: String,
    required: true
  },
  projectName: {
    type: String,
    required: true
  },
  configuration: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  policiesConfiguration: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }

});

const ApplicationConfig = mongoose.model('ApplicationConfig', applicationConfigSchema);

module.exports = ApplicationConfig;
