// Function to turn the JSON that comes from the WABLI in a better format for the policy configuration project page

function jsonTransform(data) {
    const transformedJson = {}
    const jsonData = data
    // Entities
    transformedJson.entities = jsonData.annotations[0].entities

    var annotationLinks = []
    for (var count in jsonData.annotations[0].combinations) {
        if (!(annotationLinks.includes(jsonData.annotations[0].combinations[count].annotationLink))) {
            annotationLinks.push(jsonData.annotations[0].combinations[count].annotationLink)
        }
    }

    var attrObj = {}
    var methObj = {}
    for (const attribute of annotationLinks) {
        attrObj[attribute] = null
        methObj[attribute] = null
    }
    transformedJson.attributes = attrObj
    transformedJson.methods = methObj

    for (var count in annotationLinks) {
        var entAttributes = []
        var methAttributes = []
        for (var jsonCount in jsonData.annotations[0].combinations) {
            if (jsonData.annotations[0].combinations[jsonCount].annotationType === "attribute" && jsonData.annotations[0].combinations[jsonCount].annotationLink === annotationLinks[count]) {

                entAttributes.push(jsonData.annotations[0].combinations[jsonCount].annotationName)
            }
            else if (jsonData.annotations[0].combinations[jsonCount].annotationType === "method" && jsonData.annotations[0].combinations[jsonCount].annotationLink === annotationLinks[count]) {
                methAttributes.push(jsonData.annotations[0].combinations[jsonCount].method)
            }
        }
        transformedJson.attributes[annotationLinks[count]] = entAttributes
        transformedJson.methods[annotationLinks[count]] = methAttributes
    }

    // Operators
    var operators = [
        "equals",
        "does not equal",
        "contains",
        "does not contain",
        "starts with",
        "does not start with",
        "ends with",
        "does not end with",
        "greater than",
        "greater or equal than",
        "less than",
        "less or equal than"
    ]
    var subjects = ["user"]
    var subjectsAttributes = {
        "user": [
            "firstName",
            "lastName",
            "email",
            "role"
        ]
    }


    var pages = ['/', '/home', '/addEmployee', '/editEmployee', '/August']
    var pagesMethods = {
        "/": ["getHome"],
        "/home": ["getHome"],
        "/addEmployee": ["getaddEmployee"],
        "/editEmployee": ["geteditEmployee"],
        "/August": ["getAugust"]
    }
    for (var count in pages) {
        transformedJson.entities.push(pages[count])
    }

    transformedJson.methods = { ...transformedJson.methods, ...pagesMethods }

    transformedJson.operators = operators
    transformedJson.subjects = subjects
    transformedJson.subjectsAttributes = subjectsAttributes

    console.log('FINAL', transformedJson)
    // Create the final Json file
    const transformedJsonString = JSON.stringify(transformedJson)

    return (transformedJsonString)
}

module.exports = { jsonTransform };