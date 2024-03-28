let apiUserApi = new TempApi.UserApi(); import TempApi from '../src/index'; let user = new TempApi.User(); document.getElementById('icy1c').onclick = (event) => {
    event.preventDefault();
    { history.back(); }
}; document.getElementById('i3j96').onclick = (event) => {
    event.preventDefault();
    user['userName'] = document.querySelector("[annotationname = 'userName']").value; user['userSurname'] = document.querySelector("[annotationname = 'userSurname']").value; apiUserApi.createuser(user, (error, data, response) => { if (error) { console.error(error); } else { console.log('API called successfully. Returned data: ' + data); { location.href = '/Home'; } } });
}; window.onload = () => { };