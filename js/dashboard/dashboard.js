window.onload = function() {
    
    function verificarLogeo(a) { 
         if (a == null) {
            window.location.href='./index.html';  
        }
    }

    let auth2 = localStorage.getItem('autenticado');
    verificarLogeo(auth2); 

    let logout =document.querySelector('#logout');
    logout.addEventListener('click',function () {
        localStorage.removeItem('autenticado');
        auth2 = localStorage.getItem('autenticado');
        verificarLogeo(auth2);
    })

    fetch("https://basic-server-one.vercel.app/users")
    .then(function(response){          // Rpta de la Api
          return response.json()})    // Devuelve Promise
    .then(function (respJSON){       // Obtengo el objeto 
            console.log(respJSON.data)
            let resp = respJSON.data;
            let table= document.querySelector('#container-table');
            let bodyTable=` <table id='customers'>
                              <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                </tr>    
                              </thead>
                              <tbody>`;
            resp.forEach(element => {

                bodyTable+=`<tr>
                                <td> ${element.name} </td>
                                <td> ${element.username} </td>
                                <td> ${element.email} </td>
                            </tr>`;
            }); 
            bodyTable+=`</tbody>
                    </table>`;
            table.innerHTML=bodyTable; 
    })
    .catch(function(error) {
        alert('Ups ha ocurrido un error : '+error) // Obtengo error en el trafico
    })
}