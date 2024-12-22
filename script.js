console.log('¡Bienvenido a 2R Geolab Ingenieros!');

// Número total de imágenes
const totalImages = 10;

// Selecciona el contenedor del slideshow
const slideshowContainer = document.querySelector('.slideshow');

// Generar las imágenes dinámicamente
for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.src = `fotos-laboratorio-24/${i}.jpg`; // Ruta de las imágenes
    img.alt = `Imagen ${i}`;
    if (i === 1) img.classList.add('active'); // La primera imagen comienza activa
    slideshowContainer.appendChild(img);
}

// Selecciona todas las imágenes generadas
const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

// Función para cambiar de imagen
function changeImage() {
    images[currentIndex].classList.remove('active'); // Quita 'active' de la imagen actual
    currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice
    images[currentIndex].classList.add('active'); // Añade 'active' a la nueva imagen
    console.log(`Mostrando imagen ${currentIndex + 1}`); // Log para depuración
}

// Cambiar imagen cada 3 segundos
setInterval(changeImage, 3000);
