import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/project.css'
function FirstTypeRow({ dropdowns, rowIndex, jsonData, firstTypeRowValues }) {
  const [choice, setChoice] = useState(firstTypeRowValues[0]);
  const [firstFirstDropdownValue, setFirstFirstDropdownValue] = useState(firstTypeRowValues[0])
  const [firstSecondDropdownValue, setFirstSecondDropdownValue] = useState(firstTypeRowValues[1])

  const handleSubjectChange = (event) => {
    const newChoice = event.target.value;
    setChoice(newChoice);
    setFirstFirstDropdownValue(newChoice)
  };

  const handleSecondDropdownChange = (event) => {
    const newChoice = event.target.value;
    setFirstSecondDropdownValue(newChoice)

  };

  const dropdownTitles = ["Resource", "Action", "Subject"];

  return (
    <div className="row">
      {dropdowns.map((dropdown, index) => (
        <div key={index}>
          <div className="dropdown-title">{dropdownTitles[index]}</div>
          <select label={index === 0 ? `"Resource Entity"${rowIndex}` : index === 1 ? `"Method"${rowIndex}` : index === 2 ? `"Operators"${rowIndex}` : `"Comparator"${rowIndex}`} className="select-dropdown" value={index === 0 ? firstFirstDropdownValue : index === 1 ? firstSecondDropdownValue : null} onChange={index === 0 ? handleSubjectChange : handleSecondDropdownChange}>
            <option value="" disabled>
              Select {dropdownTitles[index]}
            </option>
            {index === 0
              ? jsonData.entities.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))
              : index === 1
                ? jsonData.methods[choice].map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))
                : jsonData.entities.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
          </select>
        </div>
      ))}
    </div>
  );
}


function SecondTypeRow({ dropdowns, rowIndex, jsonData, secondTypeRowValues, conditionDecisionValue, groupIndex, logicalBlocks, logicalBlockConditions }) {
  if (!logicalBlocks) {
    logicalBlocks = []
    logicalBlockConditions = []
  }
  const [blocks, setBlocks] = useState([]);
  const [blockDropdowns, setBlockDropdowns] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState('user'); // Default selection
  const [selectedValueType, setSelectedValueType] = useState(secondTypeRowValues[rowIndex - 1][3]); // State to track selected value type
  const [selectedBlockValueType, setSelectedBlockValueType] = useState(secondTypeRowValues[rowIndex - 1][3]);
  const [selectedThirdDropdownValues, setSelectedThirdDropdownValues] = useState(['user']);
  const [secondTypeDropdownValues, setSecondTypeDropdownValues] = useState([])
  const [entity, setEntity] = useState(secondTypeRowValues[rowIndex - 1][0])
  const [attribute, setAttribute] = useState(secondTypeRowValues[rowIndex - 1][1])
  const [operator, setOperator] = useState(secondTypeRowValues[rowIndex - 1][2])
  const [comperator, setComperator] = useState(secondTypeRowValues[rowIndex - 1][3])
  const [compareValue, setCompareValue] = useState(secondTypeRowValues[rowIndex - 1][4])
  const [decision, setDecision] = useState(conditionDecisionValue)
  const [logicalBlocksValues, setLogicalBlocksValues] = useState(logicalBlocks[rowIndex - 1] ? logicalBlocks[rowIndex - 1] : [])
  const [logicalBlockConditionsValue, setLogicalBlockConditionsValue] = useState(logicalBlockConditions[rowIndex - 1] ? logicalBlockConditions[rowIndex - 1] : [])


  useEffect(() => {
    if (logicalBlocksValues) {
      for (var blockValue in logicalBlocksValues) {
        addBlock(`${logicalBlocksValues[blockValue]}`, false)
      }
    }

  }, []);

  const addBlock = (type, load) => {
    if (load === true) {
      const defaultConditions = ["firstName", "equals", "text"]
      setLogicalBlockConditionsValue(prevConditions => [...prevConditions, defaultConditions]);
    }
    setBlocks(prevBlocks => [...prevBlocks, type]);
    setBlockDropdowns(prevDropdowns => [...prevDropdowns, ["lastName", "equals", "text"]]);
    setSelectedThirdDropdownValues(prevValues => [...prevValues, '']);
  };

  const handleDeleteBlock = (blockIndex) => {
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(blockIndex, 1);
    setBlocks(updatedBlocks);

    const updatedBlockDropdowns = [...blockDropdowns];
    updatedBlockDropdowns.splice(blockIndex, 1);
    setBlockDropdowns(updatedBlockDropdowns);

    const updatedThirdDropdownValues = [...selectedThirdDropdownValues];
    updatedThirdDropdownValues.splice(blockIndex, 1);
    setSelectedThirdDropdownValues(updatedThirdDropdownValues);
  };

  // const handleBlocksConditionsValuesChange = (event, dropdownIndex) => {
  //   const value = event.target.value;
  //   setLogicalBlockConditionsValue
  // }

  const handleBlocksConditionsValuesChange = (event, index, j) => {
    // Get the selected value from the dropdown
    const selectedValue = event.target.value;

    // Create a copy of the existing logicalBlockConditionsValue array
    const updatedLogicalBlockConditionsValue = [...logicalBlockConditionsValue];

    // Update the specific element based on the dropdown index (j) and row index (index)
    updatedLogicalBlockConditionsValue[index][j] = selectedValue;

    // Update the state with the new array
    setLogicalBlockConditionsValue(updatedLogicalBlockConditionsValue);
    if (j === 2) {
      // renderNewField(logicalBlockConditionsValue[index][2])
      setSelectedBlockValueType(logicalBlockConditionsValue[index][2])
    }

  };

  const renderBlocks = () => {
    return blocks.map((blockType, index) => (
      <div key={`block-${index}`} className={`block-${blockType.toLowerCase()}`} >
        {<div label={`${blockType}${rowIndex}`}>{blockType}</div>}
        {Array.from({ length: 3 }).map((_, j) => (
          <div key={`select-${index}-${j}`} className="select-dropdown-container">
            <select
              label={j === 0 ? `"Subject's Attributes"${rowIndex}` : j === 1 ? `"Operators"${rowIndex}` : `"Comparator"${rowIndex}`}
              className="select-dropdown"
              // onChange={j === 2 ? (event) => handleThirdDropdownChange(event, index) : (event) => handleDropdownChange(event, index, j)}
              onChange={(event) => handleBlocksConditionsValuesChange(event, index, j)}
              // value={blockDropdowns[index][j]}
              // value={j === 0 ? logicalBlockConditionsValue[index][0] : j === 1 ? logicalBlockConditionsValue[index][1] : logicalBlockConditionsValue[index][2]}
              value={logicalBlockConditionsValue[index][j]}
            >
              {j === 0 && selectedEntity && (
                <optgroup>
                  <option value="" disabled>Select a Subject Attribute</option>
                  {jsonData.subjectsAttributes[selectedEntity].map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </optgroup>
              )}
              {j === 1 && (
                <optgroup >
                  <option value="" disabled>Select an Operator</option>
                  {jsonData.operators.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </optgroup>
              )}
              <optgroup >
                {j === 2 && jsonData.entities.map((option, optionIndex) => (
                  <>
                    <option key={optionIndex} value={option}>{option}</option>
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                  </>
                ))}
              </optgroup>
            </select>
          </div>
        ))}
        {/* {console.log('logicalBlockConditionsValue[index][2]', logicalBlockConditionsValue[index][2], index)*/}
        {logicalBlockConditionsValue[index][2] && renderNewField(logicalBlockConditionsValue[index][2], index)}
        <button className="remove-condition-light" onClick={() => handleDeleteBlock(index)}>Remove</button>
      </div>
    ));
  };

  const handleThirdDropdownChange = (event, blockIndex) => {
    const value = event.target.value;
    const updatedBlockDropdowns = [...blockDropdowns];
    updatedBlockDropdowns[blockIndex][2] = value;
    setSelectedThirdDropdownValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[blockIndex] = value;
      return newValues;
    });
    setBlockDropdowns(updatedBlockDropdowns);
  };

  const handleDropdownChange = (event, blockIndex, dropdownIndex) => {
    const value = event.target.value;
    const updatedBlockDropdowns = [...blockDropdowns];
    updatedBlockDropdowns[blockIndex][dropdownIndex] = value;
    setBlockDropdowns(updatedBlockDropdowns);
  };

  // Handle change of the first dropdown (Subject Entity)
  const handleFirstDropdownChange = (event) => {
    const value = event.target.value;
    setSelectedEntity(value);
    setEntity(value)
  };

  // Handle change of the second dropdown (Subject Attribute)
  const handleAttributeChange = (event) => {
    const value = event.target.value;
    setAttribute(value)
  };

  // Handle change of the third dropdown (Operator)
  const handleOperatorChange = (event) => {
    const value = event.target.value;
    setOperator(value)
  };

  // Handle change of the dropdown for the new field
  const handleValueTypeChange = (event) => {
    const value = event.target.value;
    setSelectedValueType(value);
    setComperator(value)
  };

  // Handle change of the third dropdown (Operator)
  const handleCompareValueChange = (event) => {
    const value = event.target.value;
    setCompareValue(value)
  };

  const handleDecisionChange = (event) => {
    const value = event.target.value;
    setDecision(value)
  };

  const handleRenderedFieldValueChange = (event, blockFieldIndex) => {
    // Get the selected value from the dropdown
    const selectedValue = event.target.value;

    // Create a copy of the existing logicalBlockConditionsValue array
    const updatedLogicalBlockConditionsValue = [...logicalBlockConditionsValue];

    // Update the specific element based on the dropdown index (j) and row index (index)
    updatedLogicalBlockConditionsValue[blockFieldIndex][3] = selectedValue;

    // Update the state with the new array
    setLogicalBlockConditionsValue(updatedLogicalBlockConditionsValue);

  }

  // Render the new field based on the selected value type
  const renderNewField = (selectedBlockValueType, callType) => {
    if (selectedBlockValueType === 'text' || selectedBlockValueType === 'number') {
      return <input label={`"Comparison Term"${rowIndex}`} className="select-dropdown" type={selectedBlockValueType} placeholder={`Enter ${selectedBlockValueType} value`} value={logicalBlockConditionsValue[callType][3]} onChange={(event) => { handleRenderedFieldValueChange(event, callType) }} />;
    } else {
      return (
        <select label={`"Comparison Term"${rowIndex}`} className="select-dropdown" value={logicalBlockConditionsValue[callType][3]} onChange={(event) => { handleRenderedFieldValueChange(event, callType) }}>
          <optgroup >
            {jsonData.attributes[selectedBlockValueType].map((option, optionIndex) => (
              <option key={optionIndex} value={option}>{option}</option>
            ))}
          </optgroup>
        </select>
      );
    }
  };


  const secondTypeRowNewField = (selectedValueType) => {

    if (selectedValueType === 'text' || selectedValueType === 'number') {
      return <input label={`"Comparison Term"${rowIndex}`} className="select-dropdown" type={selectedValueType} placeholder={`Enter ${selectedValueType} value`} value={compareValue} onChange={handleCompareValueChange} />;
    } else {
      return (
        <select label={`"Comparison Term"${rowIndex}`} className="select-dropdown">
          <optgroup >
            {jsonData.attributes[selectedValueType].map((option, optionIndex) => (
              <option key={optionIndex} value={option}>{option}</option>
            ))}
          </optgroup>
        </select>
      );
    }

  };
  return (
    <div>
      <div className="dropdown-title">
        Condition {rowIndex}
      </div>
      <div className="row">
        {dropdowns.map((dropdown, index) => (
          <select key={index} label={index === 0 ? `"Subject Entity"${rowIndex}` : index === 1 ? `"Subject's Attributes"${rowIndex}` : index === 2 ? `"Operators"${rowIndex}` : `"Comparator"${rowIndex}`} value={index === 0 ? entity : index === 1 ? attribute : index === 2 ? operator : index === 3 ? comperator : compareValue}
            className="select-dropdown" onChange={index === 0 ? (event) => handleFirstDropdownChange(event) : index === 1 ? handleAttributeChange : index === 2 ? handleOperatorChange : index === 3 ? (event) => handleValueTypeChange(event) : null}>
            <optgroup >
              <option value="" disabled>Select an option</option>
              {index === 0 && jsonData.subjects.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
              {index === 1 && jsonData.subjectsAttributes[selectedEntity].map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
              {index === 2 && jsonData.operators.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
              {index === 3 && jsonData.entities.map((option, optionIndex) => (
                <>
                  <option key={optionIndex} value={option}>{option}</option>
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                </>
              ))}
            </optgroup>

          </select>
        ))}
        {/* {console.log('SELECTED VALUE TYPE', selectedValueType)} */}
        {selectedValueType && secondTypeRowNewField(selectedValueType)}
        <div className="blocks-container">
          {renderBlocks()}
          <button className="btn add-condition-light" onClick={() => addBlock("AND", true)}>AND</button>
          <button className="btn add-condition-light" onClick={() => addBlock("OR", true)}>OR</button>
          <button className="btn add-condition-light" onClick={() => addBlock("XOR", true)}>XOR</button>
          <div className="decision-block">DECISION</div>
          <select id="decision" className="select-dropdown" name="decision" label={`"Select"${rowIndex}`} value={decision}
            onChange={(event) => handleDecisionChange(event)}>
            <optgroup >
              <option value="permit">Permit</option>
              <option value="deny">Deny</option>
            </optgroup>
          </select>
        </div>
      </div>
    </div >
  );
}


function Group({ rows, onAddCondition, onDeleteGroup, groupIndex, jsonData, firstTypeRowValues, secondTypeRowValues, conditionDecisionValues, logicalBlocks, logicalBlockConditions }) {
  const addCondition = () => {

    // Create a new row of SecondTypeRow
    const newRow = {
      type: "second",
      dropdowns: ["", "", "", ""],
    };

    // Clone the existing rows array and insert the new row
    const updatedRows = [...rows, newRow];
    // Update the groups state
    onAddCondition(groupIndex, updatedRows);
  };

  const deleteCondition = (rowIndex) => {
    // Clone the existing rows array and remove the specified row
    const updatedRows = rows.slice();
    updatedRows.splice(rowIndex, 1);

    // Update the groups state
    onAddCondition(groupIndex, updatedRows);
  };

  const deleteLastCondition = () => {
    if (rows.length > 0) {
      // Clone the existing rows array and remove the last condition
      const updatedRows = [...rows];
      updatedRows.pop(); // Remove the last condition

      // Update the groups state
      onAddCondition(groupIndex, updatedRows);
    }
  };

  return (
    <div className="group">
      <div className="dropdown-title">
        Policy {groupIndex + 1}
      </div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="subgroup">
          {row.type === "first" ? (
            <div>
              <FirstTypeRow dropdowns={row.dropdowns}
                rowIndex={rowIndex}
                jsonData={jsonData}
                firstTypeRowValues={firstTypeRowValues}
              />
            </div>
          ) : (
            <SecondTypeRow
              dropdowns={row.dropdowns}
              onDeleteCondition={() => deleteCondition(rowIndex)}
              rowIndex={rowIndex}
              jsonData={jsonData}
              secondTypeRowValues={secondTypeRowValues[groupIndex]}
              conditionDecisionValue={!conditionDecisionValues[groupIndex][rowIndex - 1] ? 'permit' : conditionDecisionValues[groupIndex][rowIndex - 1]}
              groupIndex={groupIndex}
              logicalBlocks={logicalBlocks[groupIndex]}
              logicalBlockConditions={logicalBlockConditions[groupIndex]}
            />
          )}
        </div>
      ))}
      <button className="btn add-condition" onClick={addCondition}>
        Add Condition
      </button>
      <button className="btn delete-policy" onClick={() => onDeleteGroup(groupIndex)}>
        Delete Policy
      </button>
      <button className="btn delete-condition" onClick={deleteLastCondition}>
        Delete Condition
      </button>
    </div>
  );
}


function Project() {
  /**
   * -- [groups, setGroups] is for handling the state of the groups of the selected project
   * -- [jsonData, setJsonData] is for handling the WABLI application configuration for the project 
   * -- [firstTypeRowValues, setFirstTypeRowValues] is for handling the values of the dropdowns for the 
   *    firstType rows of each group
   * -- [secondTypeRowValues, setSecondTypeRowValues] is for handling the values of the dropdowns for the
   *    secondType rows of each group
   */
  const [groups, setGroups] = useState([]);
  const [jsonData, setJsonData] = useState(null);
  const [firstTypeRowValues, setFirstTypeRowValues] = useState(['', ''])
  const [secondTypeRowValues, setSecondTypeRowValues] = useState([])
  const [conditionDecisionValues, setConditionsDecisionValues] = useState([])
  const [defaultDecision, setDefaultDecision] = useState([])
  const [bindingAlgorithm, setBindingAlgorithm] = useState([])
  const [logicalBlocks, setLogicalBlocks] = useState([])
  const [logicalBlockConditions, setLogicalBlockConditions] = useState([])

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.assign(`${import.meta.env.VITE_BASE_URL}/login`)
    } else {
      var projectId = window.location.href.split('/')[window.location.href.split('/').length - 1]

      /**
       * Request to get the WABLI project configuration for the selected project
       */
      axios.get(`${import.meta.env.VITE_POLICY_CONFIGURATION_SERVER_URL}/configurationObject/${projectId}`)
        .then((response) => {
          setJsonData(response.data)
        })
      /**Below is the process to load the saved policy configuration for the selected project.
       * By making a get request to the server we get the configuration from the db
       * and by initializing the arrays and objects that will be needed to have the desired format,
       * we are looping through the response data to gather the values for the dropdowns of the rows.
       */

      axios.get(`${import.meta.env.VITE_POLICY_CONFIGURATION_SERVER_URL}/policiesConfigurationObject/${projectId}`)
        .then((response) => {
          /**
           * Initialize the arrays and the firstRow type and secondRow type objects 
           */
          var projectPolicyConfiguration = response.data

          //console.log('PROJECT CONFIGURATION', projectPolicyConfiguration)
          ////console.log('LOGICAL OPERATOR', JSON.stringify(projectPolicyConfiguration[0].conditions[0][1][0].logicalOperator))

          /**
           * Set the default polcicy decision for the project that was selected (Permit/Deny)
           */
          setDefaultDecision(projectPolicyConfiguration.defaultPolicyDecision)

          /**
           * Set the binding algorithm for the project that was selected 
           */
          setBindingAlgorithm(projectPolicyConfiguration.bindingAlgorithm)

          /**
           * Initialize the arrays and objects for the laoding
           * of the configuration from the database
           */
          var firstRows = []
          firstRows[0] = []

          var firstRowObject = {
            type: "first",
            dropdowns: ["", ""]
          }
          var secondRowObject = {
            type: "second",
            dropdowns: ["", "", "", ""]
          }
          var secondRows = []
          var locigalValues = []
          var logicalBlocksConditions = []
          var intCounter = 0
          var configurationGroups = []
          var conditionDecisionValuesArray = []

          /**
           * Loop for every group, and for every firstType row
           * Every group can have only one firstType row
           */
          for (var count in projectPolicyConfiguration) {
            if (projectPolicyConfiguration[count].resource) {
              /**
               * Initialize the group object that will be loaded 
               * in an array for every loop (for every group)
               * and this array will be the argument for the setGroups init
               */
              var group = {
                id: intCounter + 1,
                rows: []
              }
              group.rows.push(firstRowObject)
              /**
               * Load the firstRows array that will be the argument for the
               * setFirstTypeRowValues init
               */
              firstRows[0].push([projectPolicyConfiguration[count].resource, projectPolicyConfiguration[count].method])

              /**
               * Initialize arrays
               */
              secondRows[count] = [];
              conditionDecisionValuesArray[count] = [];
              locigalValues[count] = []
              logicalBlocksConditions[count] = []

              /**
               * Loop for every secondType row of a group
               * Every group can have unlimited secondType rows
               * But every secondType row can belong to only one group
               */
              for (var secondRowCounter in projectPolicyConfiguration[count].conditions) {
                locigalValues[count][secondRowCounter] = []
                logicalBlocksConditions[count][secondRowCounter] = []
                if (projectPolicyConfiguration[count].conditions[secondRowCounter].length > 2) {
                  var innerCounter = 0;
                  for (var secondRowBlocksCounter = 1; secondRowBlocksCounter < projectPolicyConfiguration[count].conditions[secondRowCounter].length - 1; secondRowBlocksCounter++) {

                    if (secondRowBlocksCounter % 2 == 0) {
                      logicalBlocksConditions[count][secondRowCounter].push(
                        [
                          // projectPolicyConfiguration[count].conditions[secondRowCounter][secondRowBlocksCounter][0].subject.entity,
                          projectPolicyConfiguration[count].conditions[secondRowCounter][secondRowBlocksCounter][0].subject.attribute,
                          projectPolicyConfiguration[count].conditions[secondRowCounter][secondRowBlocksCounter][0].operator,
                          projectPolicyConfiguration[count].conditions[secondRowCounter][secondRowBlocksCounter][0].comparison.type,
                          projectPolicyConfiguration[count].conditions[secondRowCounter][secondRowBlocksCounter][0].comparison.value
                        ])
                    } else {
                      // Loading the logical values for each secondType row of every policy
                      locigalValues[count][secondRowCounter].push(projectPolicyConfiguration[count].conditions[secondRowCounter][secondRowBlocksCounter][0].logicalOperator)
                    }

                  }
                }
                // if (projectPolicyConfiguration[count].conditions[secondRowCounter].length > 2) {
                //   for (var secondRowBlocksCounter = 1; secondRowBlocksCounter < projectPolicyConfiguration[count].conditions[secondRowCounter].length - 1; secondRowBlocksCounter += 2) {
                //     //console.log('COUNTER', secondRowBlocksCounter)
                //     // Testing for logical operators console
                //     //console.log('ROW LOGICAL OPERATOR', projectPolicyConfiguration[count].conditions[secondRowCounter][secondRowBlocksCounter][0].logicalOperator)
                //   }
                // }

                /**
                 * Initialize and load the conditions decision
                 * after the policy evalutation (Permit/Deny)
                 */
                conditionDecisionValuesArray[count][secondRowCounter] = [];
                conditionDecisionValuesArray[count][secondRowCounter] = projectPolicyConfiguration[count].conditions[secondRowCounter][1].decision

                group.rows.push(secondRowObject)
                /**
                 * Initialize and load the secondRows array that will be the argument
                 * for the secondTypeRowValues init
                 */
                secondRows[count][secondRowCounter] = [];
                secondRows[count][secondRowCounter] =
                  [projectPolicyConfiguration[count].conditions[secondRowCounter][0][0].subject.entity,
                  projectPolicyConfiguration[count].conditions[secondRowCounter][0][0].subject.attribute,
                  projectPolicyConfiguration[count].conditions[secondRowCounter][0][0].operator,
                  projectPolicyConfiguration[count].conditions[secondRowCounter][0][0].comparison.type,
                  projectPolicyConfiguration[count].conditions[secondRowCounter][0][0].comparison.value
                  ]
              }
              // Push the group object in the configurationGroups array which will then be loaded in the setGroups method
              configurationGroups.push(group)
              intCounter++
            }
          }
          setLogicalBlocks(locigalValues)

          setLogicalBlockConditions(logicalBlocksConditions);

          // setLogicalBlockConditions(logicalBlocksConditions)
          // Load the condition decision values
          setConditionsDecisionValues(conditionDecisionValuesArray)
          //Load the first type rows 
          setFirstTypeRowValues(firstRows)
          // Load the second type rows
          setSecondTypeRowValues(secondRows)
          // Load the groups
          setGroups(configurationGroups)
        })
    }
  }, []);

  const returnToDashboard = () => {
    window.location.assign('/dashboard')
  }
  const collectDropdownValues = () => {

    const object = []

    // Iterate through all group elements on the page
    document.querySelectorAll('.group').forEach((groupElement, groupIndex) => {
      var groupObject = {};
      const selectedValues = [];

      groupElement.querySelectorAll('.row').forEach((rowElement, rowIndex) => {

        var rowValues = [];
        // Iterate through all select elements in the current group
        rowElement.querySelectorAll(`[label*="${rowIndex}"]`).forEach((selectElement, selectIndex) => {

          const selectedValue = selectElement.value ? selectElement.value : selectElement.innerHTML;


          rowValues.push(selectedValue)
        });
        if (rowValues.length !== 0) {
          selectedValues.push(rowValues)

        }
      })
      groupObject[groupIndex] = selectedValues
      object.push(groupObject)
    })
    var defaultDecision = document.querySelector('#default-decision').value
    var bindingAlgorithm = document.querySelector('#binding-algorithm').value

    object.push(defaultDecision)
    object.push(bindingAlgorithm)

    var projectId = window.location.href.split('/')[window.location.href.split('/').length - 1]
    // Send the json to server
    axios.post(`${import.meta.env.VITE_POLICY_CONFIGURATION_SERVER_URL}/policiesConfig/${projectId}`, { object })
      .then(response => {
        if (response.status === 200) {
          alert('The configuration was successfully submitted')
        }
      })
      .catch(err => console.log(err))

  };


  /**
   * Add group function is called when a new group is added
   * First of all it updates the firstTypeRowValues and adds
   * two default values for each dropdown.
   * Then it creates a newGroup object which describes the 
   * new firstType row as an element and updates the groups state
   */
  const addGroup = () => {
    setFirstTypeRowValues(prevValues => {
      const newValues = [...prevValues];
      newValues[0].push(['user', 'createuser']);
      return newValues;
    });
    const newGroup = {
      id: groups.length + 1,
      rows: [
        {
          type: "first",
          dropdowns: ["", ""],
        }
      ]
    };
    setGroups([...groups, newGroup]);
  };

  /**
   * Delete group function is called when a group is deleted.
   * It updates the groups by loading in the updatedGroups all the groups
   * that have different index from the group that the delete button that was clicked
   * was located 
   */
  const deleteGroup = (groupIndex) => {
    const updatedGroups = groups.filter((_, index) => index !== groupIndex);
    setGroups(updatedGroups);
  };

  /**
   * Add condition function is called when a new condition (secondType row) is being added.
   * First of all it updates the secondTypeRowValues with some default values for its dropdowns.
   * Then it updates the groups.rows
   */
  const addCondition = (groupIndex, updatedRows) => {
    setSecondTypeRowValues(prevValues => {
      const newValues = [...prevValues];
      if (prevValues[groupIndex]) {
        newValues[groupIndex].push(['user', 'firstName', 'equals', 'text', '']);
      } else {
        newValues[groupIndex] = []
        newValues[groupIndex].push(['user', 'firstName', 'equals', 'text', '']);
      }
      return newValues;
    });

    setConditionsDecisionValues(prevValues => {
      const newValues = [...prevValues];
      if (prevValues[groupIndex]) {
        newValues[groupIndex].push(['permit']);
      } else {
        newValues[groupIndex] = []
        newValues[groupIndex].push(['permit']);
      }
      return newValues;
    });

    const updatedGroups = [...groups];
    updatedGroups[groupIndex].rows = updatedRows;
    setGroups(updatedGroups);
  };

  /**
   * Function to handle the change of the default decision dropdown 
   */
  const handleDefaultDecisionChange = (event) => {
    const value = event.target.value;
    setDefaultDecision(value)
  };

  /**
  * Function to handle the change of the default decision dropdown 
  */
  const handleBindingAlgorithmChange = (event) => {
    const value = event.target.value;
    setBindingAlgorithm(value)
  };


  return (
    <div className="Project">
      <div>
        <button onClick={returnToDashboard} className='return-to-dashboard-button'>&lt; Dashboard</button>
      </div>
      <button className="add-policy" onClick={addGroup}>
        Add Policy
      </button>
      {groups.map((group, index) => (
        <div key={group.id} className="block">
          <Group
            rows={group.rows}
            onAddCondition={addCondition}
            onDeleteGroup={deleteGroup}
            groupIndex={index}
            jsonData={jsonData}
            firstTypeRowValues={firstTypeRowValues[0][index]}
            secondTypeRowValues={secondTypeRowValues}
            conditionDecisionValues={conditionDecisionValues}
            logicalBlocks={logicalBlocks}
            logicalBlockConditions={logicalBlockConditions}
          />
        </div>
      ))}
      <div className='default-policy-decision-title'>Default Policy Decision</div>
      <select id="default-decision" className="select-dropdown" name="decision" value={defaultDecision} onChange={(event) => handleDefaultDecisionChange(event)}>
        <optgroup >
          <option value="permit">Permit</option>
          <option value="deny">Deny</option>
        </optgroup>
      </select>
      <div className='binding-algorithm-title'>Binding Algorithm</div>
      <select id="binding-algorithm" className="select-dropdown" name="decision" value={bindingAlgorithm} onChange={(event) => handleBindingAlgorithmChange(event)}>
        <optgroup >
          <option value="PERMIT_UNLESS_DENY">Permit Unless Deny</option>
          <option value="DENY_UNLESS_PERMIT">Deny Unless Permit</option>
        </optgroup>
      </select>
      <button className="btn submit-button" onClick={collectDropdownValues}>
        Submit
      </button>
    </div>
  );
}

export default Project;

