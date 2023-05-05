
const cardContainer = document.querySelector('#card-container');

const products = JSON.parse(localStorage.getItem('products')) || [];

console.log(products)

function renderizarProductos(productos) {
    productos.forEach((product, index) => {

    cardContainer.innerHTML = ``;

    const card = document.createElement('article');
    card.classList.add('card');

    cardContainer.innerHTML =`<div class="card__header">
            <img src="${product.image}" alt="${product.name}" class="card__image">
        </div>
        <div class="card__body">
            <div class="card__title">
                ${product.name}
            </div>
            <p class="card__description">
                ${product.description}
            </p>
            <div class="card__price">
                $ ${product.price}
            </div>
        </div>
        <div class="card__footer">
            <div class="card__date">
                21/12/22
            </div>
            
            <div class="card__btn-container">
                <a href="" class="card__btn"> 
                    Comprar
                </a> 
            </div>
            <div class="card__btn-container">
                <a href="/pages/product-detail/product-detail.html?id=${index}" class="card__btn">
                    Detalle
                </a> 
            </div>
        </div>
    </article>`

    cardContainer.appendChild(card);
    });

};

renderizarProductos(products);