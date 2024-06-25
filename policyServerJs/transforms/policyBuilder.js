const fs = require('fs');
const path = require('path');
const operatorTransfrom = require('./operatorTransform')
const logicalOperatorTransfrom = require('./logicalOperatorTransform')

function policyBuilder(data, action) {

    var policies = []
    var transformedJson = data

    for (var iter in transformedJson) {
        var conditionsGroup = []
        if (transformedJson[iter].method === action) {
            console.log("METHOD",JSON.stringify(transformedJson[iter].method))
            console.log("ACTION",action)
            // For conditions
            for (var subIter in transformedJson[iter].conditions) {
                var conditions = []
                var logicalOperators = []
                var output
                // For subConditions
                for (var subSubIter = 0; subSubIter < (transformedJson[iter].conditions[subIter].length - 2) / 2 + 1; subSubIter++) {
                    var prefix = subSubIter * 2;

                    output = operatorTransfrom.operatorTransfrom(
                        JSON.stringify(transformedJson[iter].conditions[subIter][prefix][0].subject.attribute),
                        JSON.stringify(transformedJson[iter].conditions[subIter][prefix][0].comparison.value),
                        transformedJson[iter].conditions[subIter][prefix][0].operator,
                        JSON.stringify(transformedJson[iter].conditions[subIter][prefix][0].comparison.type)
                    )

                    if (prefix + 1 < transformedJson[iter].conditions[subIter].length - 1) {
                        logicalOperators.push(transformedJson[iter].conditions[subIter][prefix + 1][0].logicalOperator)
                    }
                    conditions.push(output)

                }
                var conditionString = conditions[0]
                for (var cond = 0; cond < logicalOperators.length; cond++) {
                    conditionString = logicalOperatorTransfrom.logicalOperatorTransfrom(conditionString, conditions[cond + 1], logicalOperators[cond])

                }
                conditionsGroup.push(conditionString)
                // Decision
                conditionsGroup.push(transformedJson[iter].conditions[subIter][(transformedJson[iter].conditions[subIter]).length-1].decision)
                console.log('CONDITIONS GROUP', conditionsGroup)
            }

            policies.push(conditionsGroup)
        }
        

    }
    return(policies)

}

module.exports = { policyBuilder }