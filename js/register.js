// !!! VER CRUD DE PRODUCTOS, ES SIMILAR A ESTO //

// 1- Obtener formulario y almacenarlo en una variable de JS
const registerForm = document.querySelector('#registerForm')
    // b- Obtener boton submmit
    const registerBtn = document.getElementById('registerSubmit')
//2- Vamos a escuchar el evento direcatamente de JS


registerForm.addEventListener('submit', (event) => {
    console.log('submmit event')
    //a preventDefault
    event.preventDefault();
    //escucho el evento y luego lo ejecuto cuando se toca el boton
    //b Tomar los datos y armar el objeto usuario
    const el = event.target.elements;
    console.log(el)
    
    
    //d Guardarlo en el local torage
    // Verificar que los datos ingresados de password y password 2 son exactamente igual
    if(el.password.value !== el.password2.value) {
        console.warn('Los password no coindicen')
        return
    }

    // *================= SOLUCION 2
// Recorro el array buscando un mail que quizas este repetido, si lo encuentro se termina el array y se le notifica al usuario que ese email ya no esta disponible.
function checkIfUserExist(users) {

    const userExist = users.find(user => {
        
        if(user.email === el.email.value) {
            return true; //  no es necesario ya que si no lo defino se hace un return undefined (false)
        }
    })
    
    if (userExist) {
        console.warn(`El mail ya esta registrado`)
        return;
    }}
    // 3 verisones 
    // existe: retorno y muestro un alert
    // no existe: sigo con mi sintaxis normalmente

/*     //SOLUCION 3
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

        // no existe: sigo con mi codigo normalmente */


        
    const user = {
        name: el.name.value,
        age: el.age.value,
        password: el.password.value,
        email:el.email.vaslue,
        gender:el.gender.value,
        role: 'user-role',
    }

    //e- insertar en mi array de usuarios el nuevo user (lista de usuarios)
    user.push(user)

    //e- guardarlo en el localStorage
    localStorage.setItem('users', JSON.stringify(users) ) //users ahora tiene un usuario mas

    //f- Limpiamos el formulario, o podemos llevar al usuario a la pagina de login
        //a - re4setear el formulario 
            // registerForm.reset();

// * Vamos a hacer nuestro alert custom

/* const alertDialog = document.createElement('div');
    alertDialog.classList.add('alert-dialog')
    alertDialog.innerText = 'Se agreggo usuario correctamente!!';
    alertDialog.styyle.backgroundColor = 'red';

    document.querySelector('body').appendChild(alertDialog)
})
 */

/*         //obtener los usuarios guardados en el local storage
        const users = JSON.parse(localStorage.getItem('users')) || []

        let userEmailExist = false; */

function showAlert (text, type = 'success') {
    // * Vamos a hacer nuestro alert custom
//crea un elemento html
const alertDialog = document.createElement('div');
//añade la clase
alertDialog.classList.add('alert-dialog')


if (type === 'error') {
    alertDialog.style.backgroundColor = 'red';
}
if(type=== 'warning') {
    alertDialog.styyle.backgroundColor = 'orange';
}
alertDialog.innerText = 'Se agreggo usuario correctamente!!';
document.querySelector('body').appendChild(alertDialog)

setTimeout(()=> {
    alertDialog.remove();
/* window.location.href = '/pages/register/register.html' */}, 3000)    
}

})


function nameParameters() {
    
}

