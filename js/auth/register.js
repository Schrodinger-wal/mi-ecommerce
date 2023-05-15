const registerForm = document.querySelector('#registerForm');
const registerBtn = document.getElementById ('registerSubmit');

registerForm.addEventListener ("submit", (event) => {


    console.log(event)

    event.preventDefault();

    const element = event.target.element;

    if (element.password1.value !== element.password2.value) {
        console.warn(`El password no consigue`);
        return;
    } 

    const users = JSON.parselocalStorage.getItem('users')


    const user = {
        name: elements.fullName.value,
        email: elements.email.value,
        password: elements.password1.value,
        age: elements.age.valueAsNumber,
        born: elements.born.valueAsNumber,

    }

})


