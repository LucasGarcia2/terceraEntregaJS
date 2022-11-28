//clase producto

class producto {
    constructor(id, nombre, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    } 
}
//productos y arreglos de productos
const producto1 = new producto(1, 'Aceite Motul', 50, "./img/motul.jpg")
const producto2 = new producto(2, 'Aceite Castrol', 40, "./img/castrol.jpg")
const producto3 = new producto(3, 'Casco Hawk', 80, "./img/hawk.jpeg")
const producto4 = new producto(4, 'Casco Shark', 120, "./img/shark.jpeg")
const producto5 = new producto(5, 'Neumaticos Michelin', 150, "./img/michelin.jpg")
const producto6 = new producto(6, 'Neumaticos Pirelli', 200, "./img/pirelli.jpg")
const producto7 = new producto(7, 'Guantes ProBiker', 40, "./img/probiker.jpg")
const producto8 = new producto(8, 'Guantes HD', 200, "./img/hd.jpg")

const productosArray = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
]

//busqueda de elementos del dom
const divProductos = document.querySelector('#divProductos')

productosArray.forEach(producto => {
    
    divProductos.innerHTML = divProductos.innerHTML + `
    <div id="${producto.id}" class="card cardProductos">
    <img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$${producto.precio}</p>
    <button id="${producto.id}" class="btn btn-success">Agregar al carrito</button>
    </div>
    </div>

    `
})

//carrito de compra

const carrito = []
const buttonAdd = document.querySelectorAll('.btn-success')

buttonAdd.forEach((button)=>{
    button.onclick = () => {
        const producto = productosArray.find((prod) => prod.id === parseInt(button.id))

        const productoCarrito = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1,
        }

    const indexCarrito = carrito.findIndex((prod) => prod.id === producto.id)
    if (indexCarrito === -1){
        carrito.push(productoCarrito)
        alert(`Has agregado ${producto.nombre} al carrito`);
    } else {
        alert(`Has agregado otro ${producto.nombre} al carrito`);
        carrito[indexCarrito].cantidad += 1
    }
    }
})

//finalizar compra
const buttonComprar = document.querySelector('#finalizarCompra')
buttonComprar.onclick = () => {
    const totalCompra = carrito.map(prod=>prod.precio*prod.cantidad).reduce((elem1,elem2)=>elem1+elem2)
    alert(`El total de tu compra es ${totalCompra}`)
}