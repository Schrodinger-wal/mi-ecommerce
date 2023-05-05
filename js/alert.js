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

