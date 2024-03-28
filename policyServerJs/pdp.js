const policies = require('./policies/policy');
const pip = require('./pip')

function evaluateRequest(req, res, projectId) {
  console.log('PDP PROJECTID', projectId)
  pip.getPolicyInformation(req, projectId)
    .then((result) => {
      console.log('PDP RESULT', result)
      console.log('PDP EVERYTHING', result[0]);
      console.log('PDP EVERYTHING', result[1]);
      console.log('PDP EVERYTHING', result[2]);
      console.log('PDP EVERYTHING', result[3]);
      console.log('PDP EVERYTHING', result[4]);


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
