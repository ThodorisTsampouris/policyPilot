const policyBuilder = require('../transforms/policyBuilder')

function policy(subject, action, resource, target, policiesConfig) {
    console.log('RESOURCE', resource)
    var policyDecisions = []
    var bindingAlgorithm = policiesConfig.bindingAlgorithm;
    var result = policyBuilder.policyBuilder(policiesConfig, action)
    
    // Default decision
    if (result.length == 0) {
        policyDecisions.push(policiesConfig.defaultPolicyDecision)
    } else {
        // Decision(s) for policy/policies configured for the current case
        for (var iterator in result) {
            console.log("ITERATOR", result[iterator])
            for (var subIterator = 0; subIterator < result[iterator].length / 2; subIterator++) {
                var conditionPrefix = subIterator * 2;
                var decisionPrefix = subIterator * 2 + 1;
                console.log('CASE', action)
                console.log("CONDITION",result[iterator][conditionPrefix])
                console.log("EVALUATION", eval(result[iterator][conditionPrefix]))
                console.log("DECISION", result[iterator][decisionPrefix])
                if (eval(result[iterator][conditionPrefix])) {
                    policyDecisions.push(result[iterator][decisionPrefix] === 'permit' ? 'permit' : 'deny')
                } else {
                    policyDecisions.push(result[iterator][decisionPrefix] === 'permit' ? 'deny' : 'permit')
                }
            }
        }
    }

    console.log('POLICY DECISIONS', policyDecisions)

    // BINDING ALGORITHM
    switch (bindingAlgorithm) {
        case ('PERMIT_UNLESS_DENY'):
            for (var policy in policyDecisions) {
                if (policyDecisions[policy] === 'deny') {
                    console.log('FINAL DECISION: deny')
                    return 'deny'
                }
            }
            console.log('FINAL DECISION: permit')
            return 'permit'

        case ('DENY_UNLESS_PERMIT'):
            for (var policy in policyDecisions) {
                if (policyDecisions[policy] === 'permit') {
                    console.log('FINAL DECISION: permit')
                    return 'permit'
                }
            }
            console.log('FINAL DECISION: deny')
            return 'deny'
    }
}

module.exports = { policy };