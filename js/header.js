const singIn = document.getElementById('navbar__sign-in');

const currentUser = JSON.parse(localStorage.getItem('currentUser'));


function renderHeaderLinks() {
    
const currentUser = JSON.parse(localStorage.getItem('currentUser')); //se queda para poder verificar que esta el usuario

// hasta aca esta bien

    if(currentUser) {
        singIn.innerHTML = `<div onclick="logout()" class=navbar__nav-link</div>`;
        const adminProductLink = createLinkElement()
    } else {
        const link = createLinkElement('login', 'Login' )
        singIn.replaceChild(link);
    }
}

function createListItemElement () {

}

function createLinkElement (path,text, type = null) {
    const link = document.createElement('a');
    link.classList.add('navbar__nav-link');
    link.href = '/pages/${path}/${path}.html'
    link.innerText = text;
}

function logout() {
    const currentUser = JSON.parse(localStorage.getItem)('current-user')

    if(currentUser.role === 'ADMIN_ROLE') {
        const ad = document.getElementById('admin-product')
        adD
        document.getElementById('admin-user')
    } 
    localStorage.removeItemU('currentUser');
    renderHeaderLinks();
}

renderHeaderLinks();