const params = window.location.search;

const paramsURL = new URLSearchParams(params);

const paramsEntries = Object.fromEntries(paramsURL)

console.log(paramsEntries)

const id = paramsEntries.id;

const products = json.parse(localStorage.getItem('products'));

const product = product[id];

document.body.innerHTML = `<p> JSON </p>`

console.log(paramsURL)

