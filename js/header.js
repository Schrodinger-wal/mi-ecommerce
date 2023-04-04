const singIn = document.getElementById('navbar__sign-in');

const currentUser = JSON.parse(localStorage.getItem('currentUser'));


function renderHeaderLinks() {
    
const currentUser = JSON.parse(localStorage.getItem('currentUser')); //se queda para poder verificar que esta el usuario

    if(currentUser) {
        singIn.innerHTML = `<div onclick="logout()" class=navbar__nav-link</div>`
    } else {
        singIn.innerHTML = `<a href="/pages/login/login.html" class="navbar__nav-link">Login</a>`
    }
}


function logout() {
    localStorage.removeItemU('currentUser');
    renderHeaderLinks();
}

renderHeaderLinks();