// Base de Datos con Todos Los Productos :)

const BaseDatos = {

    // Camisas
    "camisa-cuadros": {
        titulo: "Camisa a Cuadros Casual",
        precio: "$450.00",
        descripcion: "Corte ajustado, perfecto para un look relajado de fin de semana.",
        carpeta: "../img/Camisas/Camisa_Cuadros/",
        imagenes: ["Camisa_Main.jpg", "Camisa_1.jpg", "Camisa_2.jpg", "Camisa_3.jpg", "Camisa_4.jpg"]
    }
};

// Lógica para cargar el producto Correcto :)
const parametrosURL = new URLSearchParams(window.location.search);
const idProducto = parametrosURL.get("id");

const contenedorMiniaturas = document.querySelector('.galeria-imagen');
const imagenPrincipal = document.getElementById('imagen-principal');
const tituloElemento = document.querySelector('.titulo-producto');
const precioElemento = document.querySelector('.precio-producto');
const descripcionElemento = document.querySelector('.descripcion');

let miniaturasNodos = [];
let indiceActual = 0;

function cargarProducto() {
    if (idProducto && BaseDatos[idProducto]) {
        const info = BaseDatos[idProducto];

        // Llenar Textos :)
        tituloElemento.textContent = info.titulo;
        precioElemento.textContent = info.precio;
        descripcionElemento.textContent = info.descripcion;

        // Limpiar Miniaturas
        contenedorMiniaturas.innerHTML = '';

        // Crear imágenes dinámicas
        info.imagenes.forEach((nombreImagen, indice) => {
            const rutaCompleta = info.carpeta + nombreImagen;
            const imgElement = document.createElement('img');
            imgElement.src = rutaCompleta;

            if (indice === 0) {
                imgElement.className = "imagen-muestra activa";
                imagenPrincipal.src = rutaCompleta;
            } else {
                imgElement.className = "imagen-siguiente";
            }

            imgElement.onclick = function () { cambiarImagen(this, indice); };
            contenedorMiniaturas.appendChild(imgElement);
        });

        miniaturasNodos = document.querySelectorAll('.galeria-imagen img');
    } else {
        tituloElemento.textContent = "Producto no Encontrado";
        descripcionElemento.textContent = "Regresa al catálogo y seleccione un producto.";
    }
}

// Lógica de la Galería y el Modal
const imgModal = document.getElementById('img-modal');
const modal = document.getElementById('miModal');

function cambiarImagen(elemento, indice) {
    imagenPrincipal.src = elemento.src;
    indiceActual = indice;
    miniaturasNodos.forEach(min => min.classList.remove('activa'));
    elemento.classList.add('activa');
}

function abrirModal() {
    if(miniaturasNodos.length > 0) {
        modal.style.display = 'flex';
        imgModal.src = imagenPrincipal.src;
        document.addEventListener('keydown', controlarTeclado);
    }
}

function cerrarModal() {
    modal.style.display = 'none';
    document.addEventListener('keydown', controlarTeclado);
}

function navegarModal(direccion) {
    indiceActual += direccion;
    if(indiceActual >= miniaturasNodos.length) indiceActual = 0;
    else if (indiceActual < 0) indiceActual = miniaturasNodos.length - 1;

    imgModal.src = miniaturasNodos[indiceActual].src;

    cambiarImagen(miniaturasNodos[indiceActual], indiceActual)
}

function controlarTeclado(evento) {
    if (evento.key === 'ArrowRight') {
        navegarModal(1);
    } else if (evento.key === 'ArrowLeft') {
        navegarModal(-1);
    } else if (evento.key === 'Escape') {
        cerrarModal();
    }
}

window.onload = cargarProducto;























