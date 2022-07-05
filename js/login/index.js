window.onload = function() {
    
    let autenticado = localStorage.getItem('autenticado');  
    if (autenticado) {
        window.location.href ='./dashboard.html' 
    }

   /* ////////  EVENTO SUBMIT  ///////// */
   let form= document.querySelector('#loginform');
   form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let errorLogin = document.querySelector('#error');
    console.log('email '+email);
    console.log('pw '+password);
        fetch("https://basic-server-one.vercel.app/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email: email,
            password: password
            })
        })
        .then(response =>response.json())
        .then(data=>{
            console.log(data);
            if (data.error || data.errors){
                errorLogin.innerHTML='Wrong email or password';
                errorLogin.classList.remove('msg');
                errorLogin.classList.add('error');     
            } 
            else{
                localStorage.setItem('autenticado',true)
                window.location.href ='./dashboard.html'
            }
        })
        .catch(function(error) {
            console.log ('interrupcion '+error);
            return
        })

    });


}

