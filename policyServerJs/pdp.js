const policies = require('./policies/policy');
const pip = require('./pip')

function evaluateRequest(req, res, projectId) {
  console.log('PDP PROJECTID', projectId)
  pip.getPolicyInformation(req, projectId)
    .then((result) => {
      const response = policies.policy(result[0], result[1], result[2], result[3], result[4]);

      // return response
      if (response === 'permit') {
        res.status(200).json({ message: 'Access granted' });
      } else {
        res.status(403).json({ message: 'Access denied.' });
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

module.exports = { evaluateRequest };
