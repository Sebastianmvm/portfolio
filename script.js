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