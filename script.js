// Generar automáticamente la lista de imágenes enumeradas del 1 al 10
const images = [];
for (let i = 1; i <= 10; i++) {
  images.push(`fotos-laboratorio-24/${i}.jpg`); // Ruta a las imágenes
}

let currentIndex = 0;
const backgroundRotator = document.getElementById('background-rotator');

// Función para cambiar el fondo
function changeBackground() {
  backgroundRotator.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length; // Ciclo infinito
}

// Cambiar la imagen cada 30 segundos
setInterval(changeBackground, 30000);

// Inicializar con la primera imagen
changeBackground();
