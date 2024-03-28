let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';document.getElementById('icy1c').onclick = (event) => {
    event.preventDefault();
    { history.back(); }};document.getElementById('i75og').onclick = (event) => {
    event.preventDefault();
    let userId = window.location.pathname.replace('/editEmployee/','');
      if(userId === '/editEmployee' || userId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i75og")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            userId = value._id;
            parentId = key;
          }
        });
      }
    apiUserApi.deleteuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};document.getElementById('i3j96').onclick = (event) => {
    event.preventDefault();
    let userId = window.location.pathname.replace('/editEmployee/','');let user = new TempApi.User();user['userName'] = document.querySelector("[annotationname = 'userName']").value;user['userSurname'] = document.querySelector("[annotationname = 'userSurname']").value; let opts = {user};apiUserApi.updateuser( userId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = userName]').value = response.body.query.userName ;document.querySelector('[annotationname = userSurname]').value = response.body.query.userSurname ;{   location.href= '/Home' ;}}});};window.onload = () => {let userId = window.location.pathname.replace('/editEmployee/','');apiUserApi.getuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = userName]').value = response.body.query.userName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = userSurname]').value = response.body.query.userSurname; } catch (e) { console.log(e) };}});};