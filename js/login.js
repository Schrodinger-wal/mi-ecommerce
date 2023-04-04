// 1-a guardo el formulario en una variable
const loginForm = document.getElementById('loginForm')
// 1- Obtener los datos del formulario

loginForm.addEventListener('submit', (event) => {
    event.preventDefault ();
    console.dir(loginForm)

    const { email, password} = loginForm.elements
    
    // 2- Checkear datos ingresados con los usuarios que tengo
        //a- Obtener los usuarios almacenados
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user =  users.find((usr) => {
        if(usr.email === email.value) {
            return true;
        }
        return false; 
    }) // {name password email}

    if(!user || user.password !== password.value) {
        showAlert('login incorrecto', 'error')
        return;
    }

    if(user.password === password.value) {
        showAlert('Login correcto')
    }
    
    localStorage.setItem('current-user', JSON.stringify(user));
    // TODO:
    showAlert('Login correcto, siendo redireccionado...')
    
    setTimeout(() => {
        window.location.href = "/index.html";
    }, 1500)
    
});


    //b- email que me ingreso lo tiene algun usuario en mi array 
    //c- password deberain ser las mismas 
// 3-  Vamos a guardar en el localStorage un registro que va a ser currentUser - user

// Function logout
// 1- Borramos el registro del localStorage