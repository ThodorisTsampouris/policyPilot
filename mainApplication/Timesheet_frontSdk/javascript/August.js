let apiAugustApi = new TempApi.AugustApi();import TempApi from '../src/index';document.getElementById('iuj19x').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Home' ;}};document.getElementById('irt5g').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("irt5g")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editAugust/' + transitionId;}};document.getElementById('imict4').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("imict4")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editAugust/' + transitionId;}};document.getElementById('irv081').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("irv081")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editAugust/' + transitionId;}};document.getElementById('i2t6qs').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i2t6qs")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editAugust/' + transitionId;}};document.getElementById('i8yi23').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i8yi23")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/editAugust/' + transitionId;}};window.onload = () => {apiAugustApi.getAllaugust((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i3iw").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day1']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day1;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day1'){
        subDataElements[i].textContent = data[data.length -i -1].day1;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day2']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day2;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day2'){
        subDataElements[i].textContent = data[data.length -i -1].day2;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day3']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day3;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day3'){
        subDataElements[i].textContent = data[data.length -i -1].day3;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day4']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day4;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day4'){
        subDataElements[i].textContent = data[data.length -i -1].day4;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day5']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day5;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day5'){
        subDataElements[i].textContent = data[data.length -i -1].day5;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day6']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day6;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day6'){
        subDataElements[i].textContent = data[data.length -i -1].day6;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day7']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day7;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day7'){
        subDataElements[i].textContent = data[data.length -i -1].day7;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day8']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day8;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day8'){
        subDataElements[i].textContent = data[data.length -i -1].day8;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day9']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day9;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day9'){
        subDataElements[i].textContent = data[data.length -i -1].day9;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day10']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day10;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day10'){
        subDataElements[i].textContent = data[data.length -i -1].day10;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day11']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day11;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day11'){
        subDataElements[i].textContent = data[data.length -i -1].day11;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day12']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day12;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day12'){
        subDataElements[i].textContent = data[data.length -i -1].day12;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day13']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day13;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day13'){
        subDataElements[i].textContent = data[data.length -i -1].day13;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day14']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day14;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day14'){
        subDataElements[i].textContent = data[data.length -i -1].day14;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day15']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day15;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day15'){
        subDataElements[i].textContent = data[data.length -i -1].day15;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day16']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day16;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day16'){
        subDataElements[i].textContent = data[data.length -i -1].day16;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day17']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day17;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day17'){
        subDataElements[i].textContent = data[data.length -i -1].day17;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day18']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day18;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day18'){
        subDataElements[i].textContent = data[data.length -i -1].day18;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day19']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day19;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day19'){
        subDataElements[i].textContent = data[data.length -i -1].day19;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day20']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day20;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day20'){
        subDataElements[i].textContent = data[data.length -i -1].day20;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day21']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day21;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day21'){
        subDataElements[i].textContent = data[data.length -i -1].day21;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'day22']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].day22;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'day22'){
        subDataElements[i].textContent = data[data.length -i -1].day22;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'employee']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'userName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].employee.userName;}} catch (e) {console.log(e);};
        }
      if(data[data.length-i-1].employee._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'employee']"
          ).getAttribute("id"),
          data[data.length-i-1].employee
        );
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};