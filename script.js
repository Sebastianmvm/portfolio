let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};



let indiceActual = 0;

function moverCarrusel(direccion) {
    const carrusel = document.querySelector('.carrusel');
    const items = document.querySelectorAll('.carrusel-item');
    const totalItems = items.length;

    // Calcula el nuevo índice
    indiceActual = (indiceActual + direccion + totalItems) % totalItems;

    // Mueve el carrusel
    carrusel.style.transform = `translateX(-${indiceActual * 100}%)`;
}

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
      }
  }
});



//document.addEventListener("DOMContentLoaded", function() {
 // const carrusel = document.querySelector('.carrusel');
  //const items = document.querySelectorAll('.carrusel-item');
  //const btnAnterior = document.querySelector('.carrusel-btn.anterior');
  //const btnSiguiente = document.querySelector('.carrusel-btn.siguiente');

  //let index = 0;

  //function mostrarItem(indice) {
     // const offset = -indice * 100; // Mueve el carrusel en incrementos del 100%
     // carrusel.style.transform = `translateX(${offset}%)`;
  //}

  //btnAnterior.addEventListener('click', function() {
      //index = (index > 0) ? index - 1 : items.length - 1;
     // mostrarItem(index);
  //});

 //btnSiguiente.addEventListener('click', function() {
     // index = (index < items.length - 1) ? index + 1 : 0;
     // mostrarItem(index);
  //});

  // Mostrar el primer item al cargar la página
  //mostrarItem(index);
//});



//document.addEventListener("DOMContentLoaded", function() {
  //const tabButtons = document.querySelectorAll('.tab-btn');
  //const tabItems = document.querySelectorAll('.tab-item');

  //tabButtons.forEach(button => {
     // button.addEventListener('click', function() {
          // Remueve la clase 'active' de todos los botones y pestañas
      //    tabButtons.forEach(btn => btn.classList.remove('active'));
      //    tabItems.forEach(item => item.classList.remove('active'));

          // Agrega la clase 'active' al botón y pestaña seleccionados
      //    const tabId = this.getAttribute('data-tab');
       //   this.classList.add('active');
       //   document.getElementById(`tab-${tabId}`).classList.add('active');
    //  });
 // });
//});


// Array con las rutas de las imágenes y sus descripciones (SIN FIGMA)
const imagenesSinFigma = [
  { src: "IMG PROYECTO 1/Panel_01.JPG", descripcion: "Total 'Request' por 'Year', 'Month', y 'Type_Request'." },
  { src: "IMG PROYECTO 1/Panel_02.JPG", descripcion: "Análisis por 'Customer_Segment' en comparación del año anterior." },
  { src: "IMG PROYECTO 1/Panel_03.JPG", descripcion: "Análisis de los 'Warning'." },
  { src: "IMG PROYECTO 1/Panel_04.JPG", descripcion: "Análisis de costos por 'Request' fallidas." },
  { src: "IMG PROYECTO 1/Panel_05.JPG", descripcion: "KAM a cargo de los 'Customer' con mayor advertencias 'Warning' por motivos 'No Cargo'." },
  { src: "IMG PROYECTO 1/Panel_06.JPG", descripcion: "Nivel de servicio diario." },
  { src: "IMG PROYECTO 1/Panel_07.JPG", descripcion: "Reporte diario por 'Status' de cada 'Request' o solicitud." },
  { src: "IMG PROYECTO 1/Panel_08.JPG", descripcion: "Reporte mensual y anual por 'Status' de cada 'Request' o solicitud." }
];

// Array con las rutas de las imágenes y sus descripciones (CON FIGMA)
const imagenesConFigma = [
  { src: "IMG PROYECTO 1/Panel_09.JPG", descripcion: "Total Request." },
  { src: "IMG PROYECTO 1/Panel_10.JPG", descripcion: "Analysis Customer." },
  { src: "IMG PROYECTO 1/Panel_11.JPG", descripcion: "Analysis Warning." },
  { src: "IMG PROYECTO 1/Panel_12.JPG", descripcion: "No Cargo by Month." },
  { src: "IMG PROYECTO 1/Panel_13.JPG", descripcion: "Daily Operational Report." },
  { src: "IMG PROYECTO 1/Panel_14.JPG", descripcion: "Monthly Operational Report." },
  { src: "IMG PROYECTO 1/Panel_15.JPG", descripcion: "Cost Management Report." },
  { src: "IMG PROYECTO 1/Panel_16.JPG", descripcion: "Geofence." },
  { src: "IMG PROYECTO 1/Panel_17.JPG", descripcion: "Service Time Analysis." }
];

// Función para cambiar imágenes SIN FIGMA
function cambiarImagenSinFigma(indice) {
  const imagen = imagenesSinFigma[indice - 1];
  document.getElementById("imagen-mostrada").src = imagen.src; 
  document.getElementById("descripcion-imagen").textContent = imagen.descripcion;
}

// Función para cambiar imágenes CON FIGMA
function cambiarImagenConFigma(indice) {
  const imagen = imagenesConFigma[indice - 1];
  document.getElementById("imagen-mostrada-con-figma").src = imagen.src;
  document.getElementById("descripcion-imagen-con-figma").textContent = imagen.descripcion;
}


//Array con las rutas de las imagenes y sus dscripciones (SIN FIGMA) del proyecto 2

const imagenesSinFigmaProyecto2 = [
  { src: "IMG PROYECTO 1/PROYECTO 02 - Panel 1 sin figma.PNG", descripcion: "Análisis de Reservas"},
  { src: "IMG PROYECTO 1/PROYECTO 02 - Panel 2 sin figma.PNG", descripcion: "Análisis de Transporte" },
  { src: "IMG PROYECTO 1/PROYECTO 02 - Panel 3 sin figma.PNG", descripcion: "Análisis Operativo" }
];

//Array con las rutas de las imagenes y sus dscripciones (CON FIGMA) del proyecto 2

const imagenesConFigmaProyecto2 = [
  { src: "IMG PROYECTO 1/PROYECTO 02 - Panel 1 con figma.PNG", descripcion: "Análisis de Reservas"},
  { src: "IMG PROYECTO 1/PROYECTO 02 - Panel 2 con figma.PNG", descripcion: "Análisis de Transporte" },
  { src: "IMG PROYECTO 1/PROYECTO 02 - Panel 3 con figma.PNG", descripcion: "Análisis Operativo" }
];

// Función para cambiar imágenes SIN FIGMA del proyecto 2

function cambiarImagenSinFigmaProyecto2(indice) {
  const imagen = imagenesSinFigmaProyecto2[indice - 1];
  document.getElementById("imagen-mostrada-proyecto2").src = imagen.src; 
  document.getElementById("descripcion-imagen-proyecto2").textContent = imagen.descripcion;
}

// Función para cambiar imágenes CON FIGMA del proyecto 2

function cambiarImagenConFigmaProyecto2(indice) {
  const imagen = imagenesConFigmaProyecto2[indice - 1];
  document.getElementById("imagen-mostrada-con-figma-proyecto2").src = imagen.src;
  document.getElementById("descripcion-imagen-con-figma-proyecto2").textContent = imagen.descripcion;
}