/*---------------script inicial------------------*/
/*
let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById('carrito');
    const totalElement = document.getElementById('total');
    
    carritoElement.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio}`;
        carritoElement.appendChild(li);
    });
    
    totalElement.textContent = `$${total}`;
}
    */
    /*---------------script segundo------------------*/
   
document.addEventListener('DOMContentLoaded', function () {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoUL = document.getElementById('carrito');
    const totalSpan = document.getElementById('total');
    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toLocaleString('es-AR')}`;
        carritoUL.appendChild(li);
        total += item.precio;
    });

    totalSpan.textContent = `$${total.toLocaleString('es-AR')}`;
});

