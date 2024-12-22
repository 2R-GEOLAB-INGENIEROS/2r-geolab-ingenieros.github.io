console.log('¡Carrusel de imágenes iniciado!');

// Selecciona todas las imágenes del carrusel
const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

// Verifica que se encontraron imágenes
if (images.length === 0) {
    console.error('No se encontraron imágenes en el contenedor .slideshow.');
} else {
    console.log(`Se encontraron ${images.length} imágenes en el carrusel.`);
}

// Función para cambiar de imagen
function changeImage() {
    images[currentIndex].classList.remove('active'); // Quita 'active' de la imagen actual
    currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice
    images[currentIndex].classList.add('active'); // Añade 'active' a la nueva imagen
    console.log(`Mostrando imagen ${currentIndex + 1}`); // Log para depuración
}

// Cambiar imagen cada 3 segundos
setInterval(changeImage, 3000);

