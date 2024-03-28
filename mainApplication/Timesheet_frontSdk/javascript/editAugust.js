let apiAugustApi = new TempApi.AugustApi();import TempApi from '../src/index';let apiUserApi = new TempApi.UserApi();document.getElementById('icy1c').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};document.addEventListener('alignemployee', function(e) {
  const advanceSelect = document.getElementById('i29h2d');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('itc6q').onclick = (event) => {
    event.preventDefault();
    let augustId = window.location.pathname.replace('/editAugust/','');let august = new TempApi.August();august['employee'] = document.querySelector("[annotationname = 'employee']").value;august['day1'] = document.querySelector("[annotationname = 'day1']").value;august['day2'] = document.querySelector("[annotationname = 'day2']").value;august['day3'] = document.querySelector("[annotationname = 'day3']").value;august['day4'] = document.querySelector("[annotationname = 'day4']").value;august['day5'] = document.querySelector("[annotationname = 'day5']").value;august['day6'] = document.querySelector("[annotationname = 'day6']").value;august['day7'] = document.querySelector("[annotationname = 'day7']").value;august['day8'] = document.querySelector("[annotationname = 'day8']").value;august['day9'] = document.querySelector("[annotationname = 'day9']").value;august['day10'] = document.querySelector("[annotationname = 'day10']").value;august['day11'] = document.querySelector("[annotationname = 'day11']").value;august['day12'] = document.querySelector("[annotationname = 'day12']").value;august['day13'] = document.querySelector("[annotationname = 'day13']").value;august['day14'] = document.querySelector("[annotationname = 'day14']").value;august['day15'] = document.querySelector("[annotationname = 'day15']").value;august['day16'] = document.querySelector("[annotationname = 'day16']").value;august['day17'] = document.querySelector("[annotationname = 'day17']").value;august['day18'] = document.querySelector("[annotationname = 'day18']").value;august['day19'] = document.querySelector("[annotationname = 'day19']").value;august['day20'] = document.querySelector("[annotationname = 'day20']").value;august['day21'] = document.querySelector("[annotationname = 'day21']").value;august['day22'] = document.querySelector("[annotationname = 'day22']").value; let opts = {august};apiAugustApi.updateaugust( augustId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = employee]').value = response.body.query.employee ;document.querySelector('[annotationname = day1]').value = response.body.query.day1 ;document.querySelector('[annotationname = day2]').value = response.body.query.day2 ;document.querySelector('[annotationname = day3]').value = response.body.query.day3 ;document.querySelector('[annotationname = day4]').value = response.body.query.day4 ;document.querySelector('[annotationname = day5]').value = response.body.query.day5 ;document.querySelector('[annotationname = day6]').value = response.body.query.day6 ;document.querySelector('[annotationname = day7]').value = response.body.query.day7 ;document.querySelector('[annotationname = day8]').value = response.body.query.day8 ;document.querySelector('[annotationname = day9]').value = response.body.query.day9 ;document.querySelector('[annotationname = day10]').value = response.body.query.day10 ;document.querySelector('[annotationname = day11]').value = response.body.query.day11 ;document.querySelector('[annotationname = day12]').value = response.body.query.day12 ;document.querySelector('[annotationname = day13]').value = response.body.query.day13 ;document.querySelector('[annotationname = day14]').value = response.body.query.day14 ;document.querySelector('[annotationname = day15]').value = response.body.query.day15 ;document.querySelector('[annotationname = day16]').value = response.body.query.day16 ;document.querySelector('[annotationname = day17]').value = response.body.query.day17 ;document.querySelector('[annotationname = day18]').value = response.body.query.day18 ;document.querySelector('[annotationname = day19]').value = response.body.query.day19 ;document.querySelector('[annotationname = day20]').value = response.body.query.day20 ;document.querySelector('[annotationname = day21]').value = response.body.query.day21 ;document.querySelector('[annotationname = day22]').value = response.body.query.day22 ;{   location.href= '/August' ;}}});};window.onload = () => {let augustId = window.location.pathname.replace('/editAugust/','');apiAugustApi.getaugust( augustId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = day1]').value = response.body.query.day1; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day2]').value = response.body.query.day2; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day3]').value = response.body.query.day3; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day4]').value = response.body.query.day4; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day5]').value = response.body.query.day5; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day6]').value = response.body.query.day6; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day7]').value = response.body.query.day7; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day8]').value = response.body.query.day8; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day9]').value = response.body.query.day9; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day10]').value = response.body.query.day10; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day11]').value = response.body.query.day11; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day12]').value = response.body.query.day12; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day13]').value = response.body.query.day13; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day14]').value = response.body.query.day14; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day15]').value = response.body.query.day15; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day16]').value = response.body.query.day16; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day17]').value = response.body.query.day17; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day18]').value = response.body.query.day18; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day19]').value = response.body.query.day19; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day20]').value = response.body.query.day20; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day21]').value = response.body.query.day21; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = day22]').value = response.body.query.day22; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = employee]').setAttribute('selected-element',response.body.query.employee.userName);document.dispatchEvent(new Event("alignemployee"));
        const insideSubdocument = document.querySelector("[annotationname = 'employee']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'userName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = response.body.query.employee.userName;}} catch (e) {console.log(e);};
        }
      if(response.body.query.employee._id){
        map.set(
          document.querySelector(
            "[annotationname = 'employee']"
          ).getAttribute("id"),
          response.body.query.employee
        );
      }
     } catch (e) { console.log(e) };
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
    }});apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iz4vf").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();
    if( data.length > subDataElements.length){
      for(let i = 0; i <=  data.length - subDataElements.length; i++){
        let parentNode = subDataElements[0].parentNode;
        let child = parentNode.childNodes[0].cloneNode(true);
        parentNode.appendChild(child);
        subDataElements.push(child);
      }
    }
    data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'userName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].userName;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'userName'){
        subDataElements[i].textContent = data[data.length -i -1].userName;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignemployee"))
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