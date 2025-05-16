# Tienda de Colchones - Proyecto Web 
# Talento Tech - Ciudad de Buenos Aires
## Pre-Entrega Mayo 2025 - Comision 25013
** Instructor Gabriel Muñoz - Tutora Bel Jader 

## Descripción

Este proyecto es un sitio web de comercio electrónico para una tienda de colchones. El sitio permite a los usuarios explorar productos, ver detalles, agregar productos al carrito y realizar el pago.

## Estructura del Sitio

El sitio web está compuesto por las siguientes páginas principales:

* **index.html:** Página de inicio del sitio, con un banner, un producto destacado y enlaces a otras secciones.
* **files/colchones.html:** Página que muestra una lista de colchones disponibles.
* **files/sommiers.html:** Página que muestra una lista de sommiers disponibles.
* **files/almohadas.html:** Página que muestra una lista de almohadas disponibles.
* **files/accesorios.html:** Página que muestra una lista de acolchados y cama disponibles.
* **files/card-producto-colchones.html:** Página de detalle de un producto (colchón), donde se puede seleccionar la medida y agregar al carrito.
* **files/card-producto-sommiers.html:** Página de detalle de un producto (sommiers), donde se puede seleccionar la medida y agregar al carrito.
* **files/card-producto-almohadas.html:** Página de detalle de un producto (almohada), donde se puede seleccionar la medida y agregar al carrito.
* **files/card-producto-accesoriso.html:** Página de detalle de un producto (acolvhado), donde se puede seleccionar la medida y agregar al carrito.
* **files/carrito.html:** Página que muestra los productos agregados al carrito, el total y la opción de finalizar la compra.
* **files/pagos.html:** Página para realizar el pago de la compra.

## Funcionalidades

* **Navegación:** Menú de navegación principal en todas las páginas, con enlaces a las diferentes secciones del sitio.
* **Visualización de Productos:** Lista de productos en la página de colchones, con imágenes, título, descripción y enlace a la página de detalle.
* **Detalle de Producto:** Página de detalle de un producto, con imagen, título, descripción, selección de medida, precio y opción de agregar al carrito.
* **Carrito de Compras:**
    * Visualización de los productos agregados al carrito, con nombre, precio y total.
    * Opción de vaciar el carrito.
    * Opción de finalizar la compra, que redirige a la página de pagos.
* **Proceso de Pago:**
    * Página para ingresar los datos de la tarjeta de crédito/débito.
    * Simulación de procesamiento de pago.
    * Limpieza del carrito después de un pago aprobado.
    * Redirección a la página de inicio después de un pago aprobado.
* **Diseño Responsivo:** El sitio está diseñado para adaptarse a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

* HTML
* CSS
* JavaScript
* LocalStorage (para almacenar los productos del carrito)

## Cómo Utilizar el Sitio

1.  **Página de Inicio:** Explora el banner, el producto destacado y utiliza el menú de navegación para ir a las diferentes secciones.
2.  **Colchones/Sommiers/Almohadas/Accesorios:** Navega por la lista de colchones / sommiers / almohadas / accesorios y haz clic en "Ver Más" para ver los detalles de un producto.
3.  **Detalle del Producto:** Selecciona la medida del producto deseado, elige el modo de pago, la forma de pago y agrégalo al carrito.
4.  **Carrito:** Revisa los productos en tu carrito y haz clic en "Pagar" para ir a la página de pagos, o "Vaciar Carrito" para eliminar todos los productos.
5.  **Pagos:** Ingresa los datos de tu tarjeta y realiza el pago.  Si el pago es aprobado, el carrito se vaciará y serás redirigido a la página de inicio.

## Notas Adicionales

* El sitio utiliza JavaScript para gestionar el carrito de compras, el proceso de pago y la visualización dinámica de información.
* El estilo del sitio se define en el archivo `style.css`.
* El menú de navegación es responsive y se adapta a dispositivos móviles.
* Se utiliza `localStorage` para almacenar los productos en el carrito de forma local en el navegador del usuario.
* La página de pagos incluye validaciones para los campos del formulario.
* La funcionalidad de pago es simulada, no se realiza una transacción real.
* El formulario de contacto permite enviar un email a traves de Formspree.
