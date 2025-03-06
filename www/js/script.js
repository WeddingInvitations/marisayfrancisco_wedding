// Selecciona las flores
const flowersLeft = document.querySelector('.flowers_left');
const flowersRight = document.querySelector('.flowers_right');

// Función para manejar la visibilidad de las flores
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');  // Aparece cuando entra en la vista
    } else {
      entry.target.classList.remove('visible');  // Desaparece cuando sale de la vista
    }
  });
}

// Configura el IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });  // Cambiar cuando al menos el 50% de la flor esté visible

// Observa las flores
observer.observe(flowersLeft);
observer.observe(flowersRight);
