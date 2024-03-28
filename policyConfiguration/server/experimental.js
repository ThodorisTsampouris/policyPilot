const fs = require('fs');
const path = require('path');
const operatorTransfrom = require('./operatorsTransform')
const logicalOperatorTransfrom = require('./logicalOperatorTransform')

const jsonPath = path.join(__dirname, 'policyServerJson.json')
fs.readFile(jsonPath, 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }

    try {

        var subject = { role: "Admin", firstName: 7, email: "admin@gmail.com" }
        var action = "createuser"
        var transformedJson = JSON.parse(data)

        for (var iter in transformedJson) {
            var conditionsGroup = []
            if (transformedJson[iter].method === action) {
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
                            transformedJson[iter].conditions[subIter][prefix][0].operator
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
                    console.log(subject[transformedJson[iter].conditions[subIter][prefix][0].subject.attribute])
                    console.log(conditionsGroup[subIter])
                    console.log(eval(conditionsGroup[subIter]))
                }


            }

        }
    } catch (error) {
        console.log(error)
    }
})
