// Base de Datos con Todos Los Productos :)

const BaseDatos = {

    // Camisas
    "camisa-cuadros": {
        titulo: "Camisa a Cuadros Casual",
        precio: "$450.00",
        descripcion: "Corte ajustado, perfecto para un look relajado de fin de semana.",
        carpeta: "../img/Camisas/Camisa_Cuadros/",
        imagenes: ["Camisa_Main.jpg", "Camisa_1.jpg", "Camisa_2.jpg", "Camisa_3.jpg", "Camisa_4.jpg"]
    },

    "camisa-franela": {
        titulo: "Camisa de Franela",
        precio: "$550.00",
        descripcion: "Tela cómoda, ideal para climas frescos y salidas al aire libre.",
        carpeta: "../img/Camisas/Camisa_Franela/",
        imagenes: ["Camisa_Main.jpg", "Camisa_1.jpg", "Camisa_2.jpg", "Camisa_3.jpg", "Camisa_4.jpg"]
    },

    "camisa-manga-corta": {
        titulo: "Camisa Manga Corta",
        precio: "$480.00",
        descripcion: "Estilo moderno y fresco en color azul marino con botones metálicos.",
        carpeta: "../img/Camisas/Camisa_Manga_Corta/",
        imagenes: ["Camisa_Main.jpg", "Camisa_1.jpg", "Camisa_2.jpg", "Camisa_3.jpg", "Camisa_4.jpg"]
    },

    "camisa-rayas": {
        titulo: "Camisa a Rayas Elegante",
        precio: "$520.00",
        descripcion: "Diseño vertical que estiliza la figura, excelente para la oficina.",
        carpeta: "../img/Camisas/Camisa_Rayas/",
        imagenes: ["Camisa_Main.jpg", "Camisa_1.jpg", "Camisa_2.jpg", "Camisa_3.jpg", "Camisa_4.jpg"]
    },

    "camisa-vestir": {
        titulo: "Camisa de Vestir Clásica",
        precio: "$600.00",
        descripcion: "Un indispensable en tu guardarropa para cualquier evento formal.",
        carpeta: "../img/Camisas/Camisa_Vestir/",
        imagenes: ["Camisa_Main.jpg", "Camisa_1.jpg", "Camisa_2.jpg", "Camisa_3.jpg", "Camisa_4.jpg"]
    },

    // Pantalones
    "pantalon-cargo": {
        titulo: "Pantalón Cargo Negro",
        precio: "$580.00",
        descripcion: "Estilo urbano con múltiples bolsillos y ajuste elástico en los tobillos para máxima comodidad.",
        carpeta: "../img/Pantalones/Cargo/",
        imagenes: ["P_M.jpg", "P_1.jpg", "P_2.jpg", "P_3.jpg", "P_4.jpg"]
    },

    "pantalon-jeans": {
        titulo: "Jeans Rectos Azul Claro",
        precio: "$650.00",
        descripcion: "Mezclilla clásica de corte recto, un básico súper versátil que combina con todo.",
        carpeta: "../img/Pantalones/Jeans/",
        imagenes: ["J_M.jpg", "J_1.jpg", "J_2.jpg", "J_3.png", "J_4.jpg"]
    },

    "pantalon-jogger": {
        titulo: "Jogger Cargo Caqui",
        precio: "$490.00",
        descripcion: "Diseño relajado con cintura ajustable y bolsillos laterales. Ideal para tu día a día.",
        carpeta: "../img/Pantalones/Joggers/",
        imagenes: ["J_M.jpg", "J_1.jpg", "J_2.png", "J_3.jpg", "J_4.jpg"]
    },

    "pantalon-chino": {
        titulo: "Pantalón Chino Beige",
        precio: "$550.00",
        descripcion: "Corte entallado y tela ligera, perfecto para lograr un estilo casual pero bien arreglado.",
        carpeta: "../img/Pantalones/Pantalon_Chino/",
        imagenes: ["P_C.jpg", "P_1.jpg", "P_2.jpg", "P_3.jpg", "P_4.jpg"]
    },

    "pantalon-vestir": {
        titulo: "Pantalón de Vestir Negro",
        precio: "$720.00",
        descripcion: "Elegancia formal con ajuste impecable. El indispensable para la oficina o eventos especiales.",
        carpeta: "../img/Pantalones/Pantalones_Vestir/",
        imagenes: ["P_M.jpg", "P_1.jpg", "P_2.jpg", "P_3.jpg", "P_4.jpg"]
    },

    // Chamarras

    "chamarra-bomber": {
        titulo: "Chamarra Bomber Negra",
        precio: "$750.00",
        descripcion: "Diseño clásico y ligero con ajuste en puños y cintura. Perfecta para un look casual.",
        carpeta: "../img/Chamarras/Chamarra_Bomber/",
        imagenes: ["Chamarra_Main.jpg", "C_1.jpg", "C_2.jpg", "C_3.jpg", "C_4.jpg"]
    },

    "chamarra-cuero": {
        titulo: "Chamarra de Cuero Biker",
        precio: "$1,200.00",
        descripcion: "Estilo rebelde y atemporal con cierres metálicos. Un clásico que eleva cualquier outfit.",
        carpeta: "../img/Chamarras/Chamarra_Cuero/",
        imagenes: ["C_M.jpg", "C_1.jpg", "C_2.jpg", "C_3.jpg", "C_4.jpg"]
    },

    "chamarra-deportiva": {
        titulo: "Chamarra Deportiva Negra",
        precio: "$850.00",
        descripcion: "Ligera, cómoda y con detalles de franjas. Ideal para tus entrenamientos o estilo sport.",
        carpeta: "../img/Chamarras/Chamarra_Deportiva/",
        imagenes: ["C_M.jpg", "C_1.jpg", "C_2.jpg", "C_3.jpg", "C_4.jpg"]
    },

    "chamarra-mezclilla": {
        titulo: "Chamarra de Mezclilla Oscura",
        precio: "$680.00",
        descripcion: "Un básico indispensable en tu clóset. Resistente y fácil de combinar con todo.",
        carpeta: "../img/Chamarras/Chamarra_Mezclilla/",
        imagenes: ["C_M.jpg", "C_1.jpg", "C_2.jpg", "C_3.jpg", "C_4.jpg"]
    },

    "chamarra-rompevientos": {
        titulo: "Chamarra Rompevientos Bicolor",
        precio: "$600.00",
        descripcion: "Material ligero resistente al agua y viento. Excelente para tus actividades al aire libre.",
        carpeta: "../img/Chamarras/Chamarra_Rompevientos/",
        imagenes: ["C_M.jpg", "C_1.jpg", "C_2.jpg", "C_3.jpg", "C_4.jpg"]
    },


    // Zapatos
    "zapatos-formales": {
        titulo: "Zapatos Formales de Charol",
        precio: "$890.00",
        descripcion: "Acabado brillante y sumamente elegante. El calzado indispensable para trajes y eventos de gala.",
        carpeta: "../img/Calzado/Zapatos_Formales/",
        imagenes: ["Zapato_Main.jpg", "Zapato_1.jpg", "Zapato_2.jpg", "Zapato_3.jpg", "Zapato_4.jpg"]
    },

    "zapatos-deportivos": {
        titulo: "Tenis Deportivos Negros",
        precio: "$750.00",
        descripcion: "Diseño ultraligero y transpirable con suela ergonómica. Ideales para correr o ir al gimnasio.",
        carpeta: "../img/Calzado/Zapatos_Deportivos/",
        imagenes: ["Zapato_Main.jpg", "Zapato_1.jpg", "Zapato_2.jpg", "Zapato_3.jpg", "Zapato_4.jpg"]
    },

    "sandalias": {
        titulo: "Sandalias Slide Confort",
        precio: "$290.00",
        descripcion: "Suela gruesa antideslizante y diseño ergonómico para el máximo descanso en casa o en la alberca.",
        carpeta: "../img/Calzado/Sandalias/",
        imagenes: ["Sandali_Main.jpg", "Sandali_1.jpg", "Sandali_2.jpg", "Sandali_3.jpg", "Sandali_4.jpg"]
    },

    "mocasines": {
        titulo: "Mocasines Clásicos",
        precio: "$680.00",
        descripcion: "Estilo casual de vestir con un sofisticado detalle metálico. La mezcla perfecta entre comodidad y clase.",
        carpeta: "../img/Calzado/Mocasines/",
        imagenes: ["Mocasin_Main.jpg", "Mocasin_1.jpg", "Mocasin_2.jpg", "Mocasin_3.jpg", "Mocasin_4.jpg"]
    },

    "botas": {
        titulo: "Botas de Trabajo Cafés",
        precio: "$950.00",
        descripcion: "Resistentes, con suela antiderrapante y materiales duraderos, pensadas para aventuras al aire libre.",
        carpeta: "../img/Calzado/Botas/",
        imagenes: ["Botas_Main.jpg", "Botas_1.jpg", "Botas_2.jpg", "Botas_3.jpg", "Botas_4.jpg"]
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























