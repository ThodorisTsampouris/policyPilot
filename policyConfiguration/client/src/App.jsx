// import { useState, useEffect } from 'react';
// import axios from 'axios'
// import './App.css'
// import jsonData from '../transformedJson.json'

// function FirstTypeRow({ dropdowns, rowIndex }) {
//   const [choice, setChoice] = useState('user');

//   const handleSubjectChange = (event) => {
//     const newChoice = event.target.value;
//     setChoice(newChoice);
//   };


//   const dropdownTitles = ["Resource", "Action", "Subject"];

//   return (
//     <div className="row">
//       {dropdowns.map((dropdown, index) => (
//         <div key={index}>
//           <div className="dropdown-title">{dropdownTitles[index]}</div>
//           <select label={index === 0 ? `"Resource Entity"${rowIndex}` : index === 1 ? `"Method"${rowIndex}` : index === 2 ? `"Operators"${rowIndex}` : `"Comparator"${rowIndex}`} className="select-dropdown" onChange={index === 0 ? handleSubjectChange : null}>
//             <option value="" disabled>
//               Select {dropdownTitles[index]}
//             </option>
//             {index === 0
//               ? jsonData.entities.map((option, optionIndex) => (
//                 <option key={optionIndex} value={option}>
//                   {option}
//                 </option>
//               ))
//               : index === 1
//                 ? jsonData.methods[choice].map((option, optionIndex) => (
//                   <option key={optionIndex} value={option}>
//                     {option}
//                   </option>
//                 ))
//                 : jsonData.entities.map((option, optionIndex) => (
//                   <option key={optionIndex} value={option}>
//                     {option}
//                   </option>
//                 ))}
//           </select>
//         </div>
//       ))}
//     </div>
//   );
// }


// function SecondTypeRow({ dropdowns, rowIndex }) {
//   const [blocks, setBlocks] = useState([]);
//   const [blockDropdowns, setBlockDropdowns] = useState([]);
//   const [selectedEntity, setSelectedEntity] = useState('user'); // Default selection
//   const [selectedValueType, setSelectedValueType] = useState('user'); // State to track selected value type
//   const [selectedThirdDropdownValues, setSelectedThirdDropdownValues] = useState(['user']);

//   const addBlock = (type) => {
//     setBlocks([...blocks, type]);
//     setBlockDropdowns([...blockDropdowns, ["", "", ""]]);
//     setSelectedThirdDropdownValues([...selectedThirdDropdownValues, '']);
//   };

//   const handleDeleteBlock = (blockIndex) => {
//     const updatedBlocks = [...blocks];
//     updatedBlocks.splice(blockIndex, 1);
//     setBlocks(updatedBlocks);

//     const updatedBlockDropdowns = [...blockDropdowns];
//     updatedBlockDropdowns.splice(blockIndex, 1);
//     setBlockDropdowns(updatedBlockDropdowns);

//     const updatedThirdDropdownValues = [...selectedThirdDropdownValues];
//     updatedThirdDropdownValues.splice(blockIndex, 1);
//     setSelectedThirdDropdownValues(updatedThirdDropdownValues);
//   };

//   const renderBlocks = () => {
//     return blocks.map((blockType, index) => (
//       <div key={`block-${index}`} className={`block ${blockType.toLowerCase()}`} >
//         {<div label={`${blockType}${rowIndex}`}>{blockType}</div>}
//         {Array.from({ length: 3 }).map((_, j) => (
//           <div key={`select-${index}-${j}`} className="select-dropdown-container">
//             <select
//               label={j === 0 ? `"Subject's Attributes"${rowIndex}` : j === 1 ? `"Operators"${rowIndex}` : `"Comparator"${rowIndex}`}
//               className="select-dropdown"
//               onChange={j === 2 ? (event) => handleThirdDropdownChange(event, index) : (event) => handleDropdownChange(event, index, j)}
//               value={blockDropdowns[index][j]}
//             >
//               {j === 0 && selectedEntity && (
//                 <optgroup>
//                   <option value="" disabled>Select a Subject Attribute</option>
//                   {jsonData.subjectsAttributes[selectedEntity].map((option, optionIndex) => (
//                     <option key={optionIndex} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </optgroup>
//               )}
//               {j === 1 && (
//                 <optgroup >
//                   <option value="" disabled>Select an Operator</option>
//                   {jsonData.operators.map((option, optionIndex) => (
//                     <option key={optionIndex} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </optgroup>
//               )}
//               <optgroup >
//                 {j === 2 && jsonData.entities.map((option, optionIndex) => (
//                   <>
//                     <option key={optionIndex} value={option}>{option}</option>
//                     <option value="text">Text</option>
//                     <option value="number">Number</option>
//                   </>
//                 ))}
//               </optgroup>
//             </select>
//           </div>
//         ))}
//         {selectedThirdDropdownValues[index] && renderNewField(selectedThirdDropdownValues[index])}
//         <button className="remove-condition-light" onClick={() => handleDeleteBlock(index)}>Remove</button>
//       </div>
//     ));
//   };

//   const handleThirdDropdownChange = (event, blockIndex) => {
//     const value = event.target.value;
//     const updatedBlockDropdowns = [...blockDropdowns];
//     updatedBlockDropdowns[blockIndex][2] = value;
//     setSelectedThirdDropdownValues((prevValues) => {
//       const newValues = [...prevValues];
//       newValues[blockIndex] = value;
//       return newValues;
//     });
//     setBlockDropdowns(updatedBlockDropdowns);
//   };

//   const handleDropdownChange = (event, blockIndex, dropdownIndex) => {
//     const value = event.target.value;
//     const updatedBlockDropdowns = [...blockDropdowns];
//     updatedBlockDropdowns[blockIndex][dropdownIndex] = value;
//     setBlockDropdowns(updatedBlockDropdowns);
//   };

//   // Handle change of the first dropdown (Subject Entity)
//   const handleFirstDropdownChange = (event) => {
//     const value = event.target.value;
//     setSelectedEntity(value);
//   };

//   // Handle change of the dropdown for the new field
//   const handleValueTypeChange = (event) => {
//     const value = event.target.value;
//     setSelectedValueType(value);
//   };


//   // Render the new field based on the selected value type
//   const renderNewField = (selectedValueType) => {
//     if (selectedValueType === 'text' || selectedValueType === 'number') {
//       return <input label={`"Comparison Term"${rowIndex}`} className="select-dropdown" type={selectedValueType} placeholder={`Enter ${selectedValueType} value`} />;
//     } else {
//       return (
//         <select label={`"Comparison Term"${rowIndex}`} className="select-dropdown">
//           <optgroup >
//             {jsonData.attributes[selectedValueType].map((option, optionIndex) => (
//               <option key={optionIndex} value={option}>{option}</option>
//             ))}
//           </optgroup>
//         </select>
//       );
//     }
//   };

//   return (
//     <div>
//       <div className="dropdown-title">
//         Condition {rowIndex}
//       </div>
//       <div className="row">
//         {dropdowns.map((dropdown, index) => (
//           <select key={index} label={index === 0 ? `"Subject Entity"${rowIndex}` : index === 1 ? `"Subject's Attributes"${rowIndex}` : index === 2 ? `"Operators"${rowIndex}` : `"Comparator"${rowIndex}`}
//             className="select-dropdown" onChange={index === 0 ? (event) => handleFirstDropdownChange(event) : index === 3 ? (event) => handleValueTypeChange(event) : null}>
//             <optgroup >
//               <option value="" disabled>Select an option</option>
//               {index === 0 && jsonData.subjects.map((option, optionIndex) => (
//                 <option key={optionIndex} value={option}>
//                   {option}
//                 </option>
//               ))}
//               {index === 1 && jsonData.subjectsAttributes[selectedEntity].map((option, optionIndex) => (
//                 <option key={optionIndex} value={option}>
//                   {option}
//                 </option>
//               ))}
//               {index === 2 && jsonData.operators.map((option, optionIndex) => (
//                 <option key={optionIndex} value={option}>
//                   {option}
//                 </option>
//               ))}
//               {index === 3 && jsonData.entities.map((option, optionIndex) => (
//                 <>
//                   <option key={optionIndex} value={option}>{option}</option>
//                   <option value="text">Text</option>
//                   <option value="number">Number</option>
//                 </>
//               ))}
//             </optgroup>

//           </select>
//         ))}
//         {selectedValueType && renderNewField(selectedValueType)}
//         <div className="blocks-container">
//           {renderBlocks()}
//           <button className="btn add-condition-light" onClick={() => addBlock("AND")}>AND</button>
//           <button className="btn add-condition-light" onClick={() => addBlock("OR")}>OR</button>
//           <button className="btn add-condition-light" onClick={() => addBlock("XOR")}>XOR</button>
//           <div className="decision-block">DECISION</div>
//           <select id="decision" className="select-dropdown" name="decision" label={`"Select"${rowIndex}`}>
//             <optgroup >
//               <option value="permit">Permit</option>
//               <option value="deny">Deny</option>
//             </optgroup>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }


// function Group({ rows, onAddCondition, onDeleteGroup, groupIndex }) {
//   const addCondition = () => {
//     // Create a new row of SecondTypeRow
//     const newRow = {
//       type: "second",
//       dropdowns: ["", "", "", ""],
//     };

//     // Clone the existing rows array and insert the new row
//     const updatedRows = [...rows, newRow];

//     // Update the groups state
//     onAddCondition(groupIndex, updatedRows);
//   };

//   const deleteCondition = (rowIndex) => {
//     // Clone the existing rows array and remove the specified row
//     const updatedRows = rows.slice();
//     updatedRows.splice(rowIndex, 1);

//     // Update the groups state
//     onAddCondition(groupIndex, updatedRows);
//   };

//   const deleteLastCondition = () => {
//     if (rows.length > 0) {
//       // Clone the existing rows array and remove the last condition
//       const updatedRows = [...rows];
//       updatedRows.pop(); // Remove the last condition

//       // Update the groups state
//       onAddCondition(groupIndex, updatedRows);
//     }
//   };

//   return (
//     <div className="group">
//       <div className="dropdown-title">
//         Policy {groupIndex + 1}
//       </div>
//       {rows.map((row, rowIndex) => (
//         <div key={rowIndex} className="subgroup">
//           {row.type === "first" ? (
//             <div>
//               <FirstTypeRow dropdowns={row.dropdowns}
//                 rowIndex={rowIndex} />
//             </div>
//           ) : (
//             <SecondTypeRow
//               dropdowns={row.dropdowns}
//               onDeleteCondition={() => deleteCondition(rowIndex)}
//               rowIndex={rowIndex}
//             />
//           )}
//         </div>
//       ))}
//       <button className="btn add-condition" onClick={addCondition}>
//         Add Condition
//       </button>
//       <button className="btn delete-policy" onClick={() => onDeleteGroup(groupIndex)}>
//         Delete Policy
//       </button>
//       <button className="btn delete-condition" onClick={deleteLastCondition}>
//         Delete Condition
//       </button>
//     </div>
//   );
// }


// function App() {
//   const [groups, setGroups] = useState([
//     {
//       id: 1,
//       rows: [
//         {
//           type: "first",
//           dropdowns: ["", ""],
//         },
//       ],
//     },
//   ]);

//   const [jsonDataObject, setJsonDataObject] = useState(null);

//   const collectDropdownValues = () => {

//     const object = []

//     // Iterate through all group elements on the page
//     document.querySelectorAll('.group').forEach((groupElement, groupIndex) => {
//       var groupObject = {};
//       const selectedValues = [];

//       console.log('GROUP', groupElement)
//       groupElement.querySelectorAll('.row').forEach((rowElement, rowIndex) => {

//         var rowValues = [];
//         console.log('ROW', rowElement)
//         // Iterate through all select elements in the current group
//         rowElement.querySelectorAll(`[label*="${rowIndex}"]`).forEach((selectElement, selectIndex) => {

//           const selectedValue = selectElement.value ? selectElement.value : selectElement.innerHTML;


//           rowValues.push(selectedValue)
//         });
//         if (rowValues.length !== 0) {
//           selectedValues.push(rowValues)

//         }
//       })
//       groupObject[groupIndex] = selectedValues
//       object.push(groupObject)
//     })
//     var defaultDecision = document.querySelector('#default-decision').value
//     var bindingAlgorithm = document.querySelector('#binding-algorithm').value

//     object.push(defaultDecision)
//     object.push(bindingAlgorithm)
//     console.log(object)

//     // Send the json to server
//     axios.post('http://localhost:3002/policiesConfig', { object })
//       .then(response => {
//         console.log("BEFORE REQUEST TO POLICY SERVER", response.data)
//         var policyJson = response.data

//         setJsonDataObject(response.data);

//         axios.post('http://localhost:3000/policiesConfiguration', { policyJson })
//       })
//       .catch(err => console.log(err))

//   };



//   const addGroup = () => {
//     const newGroup = {
//       id: groups.length + 1,
//       rows: [
//         {
//           type: "first",
//           dropdowns: ["", ""],
//         },
//       ],
//     };
//     setGroups([...groups, newGroup]);
//   };

//   const deleteGroup = (groupIndex) => {
//     const updatedGroups = groups.filter((_, index) => index !== groupIndex);
//     setGroups(updatedGroups);
//   };

//   const addCondition = (groupIndex, updatedRows) => {
//     const updatedGroups = [...groups];
//     updatedGroups[groupIndex].rows = updatedRows;
//     setGroups(updatedGroups);
//   };


//   return (
//     <div className="App">
//       <button className="btn add-policy" onClick={addGroup}>
//         Add Policy
//       </button>
//       {groups.map((group, index) => (
//         <div key={group.id} className="block">
//           <Group
//             rows={group.rows}
//             onAddCondition={addCondition}
//             onDeleteGroup={deleteGroup}
//             groupIndex={index}
//           />
//         </div>
//       ))}
//       <div className='default-policy-decision-title'>Default Policy Decision</div>
//       <select id="default-decision" className="select-dropdown" name="decision">
//         <optgroup >
//           <option value="permit">Permit</option>
//           <option value="deny">Deny</option>
//         </optgroup>
//       </select>
//       <div className='binding-algorithm-title'>Binding Algorithm</div>
//       <select id="binding-algorithm" className="select-dropdown" name="decision">
//         <optgroup >
//           <option value="PERMIT_UNLESS_DENY">Permit Unless Deny</option>
//           <option value="DENY_UNLESS_PERMIT">Deny Unless Permit</option>
//         </optgroup>
//       </select>
//       <button className="btn submit-button" onClick={collectDropdownValues}>
//         Submit
//       </button>
//       {jsonDataObject && (
//         <pre className="policy-configuration">
//           <div className='policy-configuration-title'>
//             <div >Policies Configuration</div>
//           </div>

//           <code>{JSON.stringify(jsonDataObject, null, 2)}</code>
//         </pre>
//       )}
//     </div>
//   );
// }

// export default App; 

// src/App.jsx
import React from 'react';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
