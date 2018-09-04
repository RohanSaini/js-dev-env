import {getUsers} from './api/userapi'


getUsers().then(results=>{

  let userBody="";

  results.forEach(user => {
    userBody+=`
    <tr>
    <td> <a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.eamil}</td>
    `

  });

  global.document.getElementById('users').innerHTML=userBody;
});


