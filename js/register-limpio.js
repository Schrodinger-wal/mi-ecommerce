//1- Obtener formulario y almacenarlo en una variable de JS
const registerForm = document.querySelector('#register');
console.log(registerForm)
    //a- Obtener boton de submit
const registerBtn = document.getElementById('registerSubmit');
//2- Vamos a escuchar el evento directamente en JS
registerForm.addEventListener('submit', (event)=>{
    console.log('Submit event')
    //a- preventDefault
    event.preventDefault();
    //b- Tomar los datos y armar el objeto usuario
    const el = event.target.elements
    console.log(el)
    
    //d- Verificar que los datos ingresados de password1 y password2 son exactamente igual
    if(el.password1.value !== el.password2.value){
        console.warn(`El password no coincide`)
        return
    }
    
    //c- Verificar si hay en el localStorage algun usario guardado ya con ese mail
        // a- Obtener los usuarios guardados
        const users = JSON.parse(localStorage.getItem('users')) || []; //Le ponemos [] ya que si no encuentra nada, lo inicializamos en un vector vacio
        
        const userExist = checkIfUserExist(users, el.email.value)
        
        // c-  3 versiones: 
        // existe: retorno y muestro un alert
        if(userExist){ //creo que lo mejor seria borrar la constante y directamente llamar a la funcion dentro del if
            return
        }

        // no existe: sigo con mi codigo normalmente

    
    const user = {
        name: el.name.value,
        age: el.age.value,
        password: el.password1.value,
        email:  el.email.value,
        gender: el.gender.value
    }

    //e- Insertar en mi array de usuarios el nuevo user (lista de usuarios)
    users.push(user)

    //f- Guardarlo en el localStorage
    localStorage.setItem('users', JSON.stringify(users)) //users ahora tiene un usuario mas

    //g- Limpiamos el formulario, o podemos llevar al usuario a la pagina de login
        //I- reseteamos nuestro formulario, comunmente es para productos    
            // registerForm.reset //con eso limpiamos nuestro formulario
        
        //II- Lo movemos a otra pagina
            window.location.href = 'pages/login/login.html' //aca hay que ridereccionarlo al home por ejemplo, /index.html
})
