// init-mongo.js

// Switch to the desired database
db = db.getSiblingDB('Policy_Configuration_Service');

// Create a collection
db.createCollection('applicationconfigs');

// Insert data into the collection
db.applicationconfigs.insertOne({
  "username": "",
  "projectId": "123456789",
  "projectName": "Timesheet",
  "configuration": {
    "annotations": [
      {
        "combinations": [
          {
            "annotationName": "userName",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "user",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "allUsers",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getAlluser",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "user",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "firstName",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "user",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "userSurname",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "user",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "createuser",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "createuser",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "user",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "startDate",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "schedule",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "endDate",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "schedule",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "presence",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "schedule",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "employee",
            "annotationType": "attribute",
            "attributeType": "entity",
            "customAttributeType": "user",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getEmployees",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getAlluser",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "user",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "createSchedule",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "createschedule",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "schedule",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "dates",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": true,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "schedule",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "alllschedules",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getAllschedule",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "schedule",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day1",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day2",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day3",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day4",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day5",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day6",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day7",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day8",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day9",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day10",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day11",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day12",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day13",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day14",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day15",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day16",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day17",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day18",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day19",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day20",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day21",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "day22",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "createAugust",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "createaugust",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "updateAugust",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "updateaugust",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getAugust",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getaugust",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "allAugust",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getAllaugust",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "august",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getEmployee",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getuser",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "user",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "updateuser",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "updateuser",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "user",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "deleteEmployee",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "deleteuser",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "user",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "employeeSept",
            "annotationType": "attribute",
            "attributeType": "entity",
            "customAttributeType": "user",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay1",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay2",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay3",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay4",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay5",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay6",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay7",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay8",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay9",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay10",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay11",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay12",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay13",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay14",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay15",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay16",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay17",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay18",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay19",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay20",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "septDay21",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "createSeptember",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "createseptember",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "updateSeptember",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "updateseptember",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getSeptember",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getseptember",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "allSeptember",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getAllseptember",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "september",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "employeeOct",
            "annotationType": "attribute",
            "attributeType": "entity",
            "customAttributeType": "user",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay1",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay2",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay3",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay4",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay5",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay6",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay7",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay8",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay9",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay10",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay11",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay12",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay13",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay14",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay15",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay16",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay17",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay18",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay19",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay20",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay21",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "octDay22",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "allOctober",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getAlloctober",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "createOctober",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "createoctober",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getOctober",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getoctober",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "updateOctober",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "updateoctober",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "october",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay1",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay2",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay3",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay4",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay5",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay6",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay7",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay8",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay9",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay10",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay11",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay12",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay13",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay14",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay15",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay16",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay17",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay18",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay19",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay20",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay21",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "novDay22",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "allNovember",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getAllnovember",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "employeeNov",
            "annotationType": "attribute",
            "attributeType": "entity",
            "customAttributeType": "user",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "createNovember",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "createnovember",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getNovember",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getnovember",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "updateNovember",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "updatenovember",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "november",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay1",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay2",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay3",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay4",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay5",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay6",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay7",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay8",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay9",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay10",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay11",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay12",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay13",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay14",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay15",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay16",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay17",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay18",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay19",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay20",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "decDay21",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "allDecember",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getAlldecember",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "employeeDec",
            "annotationType": "attribute",
            "attributeType": "entity",
            "customAttributeType": "user",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "createDecember",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "createdecember",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getDecember",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getdecember",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "updateDecember",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "updatedecember",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "december",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "dayId",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "day",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "dayDate",
            "annotationType": "attribute",
            "attributeType": "date",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "day",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "dayHours",
            "annotationType": "attribute",
            "attributeType": "number",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "day",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "createDay",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "createday",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "day",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getDay",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getday",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "day",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "updateDay",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "updateday",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "day",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "monthName",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "month",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "monthId",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "month",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "monthDay",
            "annotationType": "attribute",
            "attributeType": "entity",
            "customAttributeType": "day",
            "attributeTypeService": "none",
            "annotationTable": true,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "month",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getAllDays",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getAllday",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "day",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "createMonth",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "createmonth",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "month",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getMonth",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getmonth",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "month",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "updateMonth",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "updatemonth",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "month",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "workpackageId",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "workpackage",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "workpackageName",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "workpackage",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "workpackageMonth",
            "annotationType": "attribute",
            "attributeType": "entity",
            "customAttributeType": "month",
            "attributeTypeService": "none",
            "annotationTable": true,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "workpackage",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getAllMonths",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getAllmonth",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "month",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "createWorkpackage",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "createworkpackage",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "workpackage",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getWorkpackage",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getworkpackage",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "workpackage",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "updateWorkpackage",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "updateworkpackage",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "workpackage",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "projectId",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "project",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "projectName",
            "annotationType": "attribute",
            "attributeType": "text",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "project",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "projectWp",
            "annotationType": "attribute",
            "attributeType": "entity",
            "customAttributeType": "workpackage",
            "attributeTypeService": "none",
            "annotationTable": true,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "project",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getAllWorkpackages",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getAllworkpackage",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "workpackage",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "createProject",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "createproject",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "project",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getProject",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getproject",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "project",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "updateProject",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "updateproject",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "project",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "userProject",
            "annotationType": "attribute",
            "attributeType": "entity",
            "customAttributeType": "project",
            "attributeTypeService": "none",
            "annotationTable": true,
            "method": "none",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "user",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getAllProjects",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getAllproject",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "project",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          },
          {
            "annotationName": "getUser",
            "annotationType": "method",
            "attributeType": "none",
            "customAttributeType": "",
            "attributeTypeService": "none",
            "annotationTable": false,
            "method": "getuser",
            "attributeParam": "none",
            "valueParam": "none",
            "logicalOperatorParam": "none",
            "comparisonOperatorParam": "none",
            "annotationLink": "user",
            "serviceAttr": "",
            "serviceParams": {
              "headers": null,
              "queryParams": null,
              "bodyParams": null
            }
          }
        ],
        "entities": [
          "user",
          "schedule",
          "august",
          "september",
          "october",
          "november",
          "december",
          "day",
          "month",
          "workpackage",
          "project"
        ]
      }
    ]
  }
});

// Switch to the employee database and create a collection
db = db.getSiblingDB('employee');
db.createCollection('employees');
