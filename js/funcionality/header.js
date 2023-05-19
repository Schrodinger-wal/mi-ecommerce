const signIn = document.getElementById ('navbar__sign-in');



function renderHeaderLinks() {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if(currentUser) {
    signIn.innerHTML = `<div onclick="logout()" class="navbar__nav-link">Logout</div>`
} else {
    const link = creat



/*     signIn.innerHTML = '<a href="/pages/login/login.html" class="navbar__nav-link">Login</a>' */
    }
}

//!!! Arreglar Login y verificar si funciona esto, ponerle sweetalert

function logout() {
    localStorage.removeItem('currentUser');
    renderHeaderLinks();
}


