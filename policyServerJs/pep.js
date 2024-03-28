const PDP = require('./pdp');

function enforcePolicy(req, res) {
  const response = PDP.evaluateRequest(req, res);

  console.log('PEP RESPONSE', response);

  if (response === 'permit') {
    res.status(200).json({ message: 'Access granted' });
  } else {
    res.status(403).json({ message: 'Access denied.' });
  }
}

module.exports = { enforcePolicy };
