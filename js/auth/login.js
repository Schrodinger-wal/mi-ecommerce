const loginForm = document.getElementById('loginForm')


loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const {email, password} = loginForm.elements;

    const users = JSON.parse(localStorage.getItem('users')) || []; 

    const user = users.find((usr) => {
        if(usr.email === email.value) {
            return true;
        }
    });

    if(!user || user.password !== password.value) {
        showAlert('Login incorrecto', 'error')
        return;
    }
    
    localStorage.setItem('currentUser', JSON.stringify(user));
        
    showAlert('Login correcto, moviendonos a la pagina principal!!', 'sucess') // No aclaramos el 

    setTimeout(() => {
        window.location.href = '/index.html';
    }, 1500)

});
