const fs = require('fs');

function policyServerJson(object) {
    var transformedJson = {}



    var subObject = {
        resource: "",
        method: "",
        conditions: {}
    }


    var conditionObject = {
        subject: {
            entity: "",
            attribute: ""
        },
        operator: "",
        comparison: {
            type: "",
            value: ""
        }
    }

    // console.log("OBJECT", JSON.stringify(object.object))
    console.log('COUNT1', object.object.length)
    for (var count = 0; count < object.object.length - 2; count++) {
        console.log('COUNT', object.object[count])
        subObject = {
            resource: "",
            method: "",
            conditions: {}
        }
        var policyConditions = []
        var conditionGroup = []


        // Resources
        subObject.resource = object.object[count][count][0][0]
        // Methods
        subObject.method = object.object[count][count][0][1]

        const entity = object.object[count][count][1][0]
        var subCondition = []
        for (var subCount in object.object[count][count]) {
            var decision = { decision: "" }
            var subConditionGroup = []
            var element = []
            conditionObject = {
                subject: {
                    entity: "",
                    attribute: ""
                },
                operator: "",
                comparison: {
                    type: "",
                    value: ""
                }
            }

            if (subCount != 0) {
                console.log("SUBCOUNT", object.object[count][count][subCount])

                if (object.object[count][count][subCount].length === 6) {
                    conditionObject.subject.entity = entity
                    conditionObject.subject.attribute = object.object[count][count][subCount][1]
                    conditionObject.operator = object.object[count][count][subCount][2]
                    conditionObject.comparison.type = object.object[count][count][subCount][3]
                    conditionObject.comparison.value = object.object[count][count][subCount][4]
                    element.push(conditionObject)
                    subConditionGroup.push(element)
                    element = []
                } else {
                    var objectLength = (object.object[count][count][subCount].length - 6) / 5 + 1

                    for (var iter = 0; iter < objectLength; iter++) {
                        conditionObject = {
                            subject: {
                                entity: "",
                                attribute: ""
                            },
                            operator: "",
                            comparison: {
                                type: "",
                                value: ""
                            }
                        }
                        var prefix = 5 * iter;
                        if (iter != 0) {
                            var logOb = { logicalOperator: "" }
                            logOb.logicalOperator = object.object[count][count][subCount][prefix]
                            element.push(logOb)
                            subConditionGroup.push(element)
                            element = []
                        }
                        conditionObject.subject.entity = entity
                        conditionObject.subject.attribute = object.object[count][count][subCount][prefix + 1]
                        conditionObject.operator = object.object[count][count][subCount][prefix + 2]
                        conditionObject.comparison.type = object.object[count][count][subCount][prefix + 3]
                        conditionObject.comparison.value = object.object[count][count][subCount][prefix + 4]
                        element.push(conditionObject)
                        subConditionGroup.push(element)
                        element = []

                    }
                }

                decision.decision = object.object[count][count][subCount][object.object[count][count][subCount].length - 1]
                subConditionGroup.push(decision)
                subCondition.push(subConditionGroup)

            }

            policyConditions.push(subConditionGroup)


        }

        var json = {}
        json = subCondition
        subObject.conditions = subCondition
        transformedJson[count] = subObject
    }

    var defaultPolicyJson = {
        "defaultPolicyDecision": `${object.object[object.object.length-2]}`
    }
    var bindingAlgorithmJson = {
        "bindingAlgorithm": `${object.object[object.object.length-1]}`
    }

    transformedJson = {...transformedJson, ...defaultPolicyJson}
    transformedJson = {...transformedJson, ...bindingAlgorithmJson}
    console.log("FINAL", JSON.stringify(transformedJson))

    const transformedJsonString = JSON.stringify(transformedJson)
    const transformedJsonPath = 'policyServerJson.json'

    fs.writeFile(transformedJsonPath, transformedJsonString, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('JSON transformed and created Successfully')
        }
    })

    return (transformedJson)

}

module.exports = { policyServerJson }