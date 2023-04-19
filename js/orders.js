let order = {
    producs: [
        {
            productName: 'Xbox',
            cantidad: 2,
            price: 1000
        },
        {
            productName:'Switch',
            cantidad: 1,
            price: 200000,
        }
    ],
    user: 'email@gmail.com',
    total: 30000,
};

    // ? Agregar elemento
// Tener la posibilidad de que cuando apriente el botón comprar se añada el elmento a1 array dentro order.products
// ANTES DE HACER UN PUSH
// Deberla checkear buscando con un find con un findlndex debería checkear si el producto ya se encuentra
// Si se encuentra incremento dentro de ese producto su cantidad*4
// Sino hago un push de ese elemento
// Incrementar el total

// ? Eliminar elemento
    //pintamos en el boton de mi orden el index del array order.products y lo eliminamos. splice 
    // Guardare el precio del producto por la cantidad y restarselo al total 
    // Actualizar el sessionStorage, con el nuevo valor 

// ?Listar Orden
    // Pintar los elementos en una nueva pagina, 