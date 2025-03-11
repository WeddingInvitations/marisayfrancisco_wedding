// function animateOnScroll(className) {
//   window.addEventListener('scroll', function () {
//       const elements = document.querySelectorAll(`.${className}`);
//       const windowHeight = window.innerHeight;
//       const triggerPoint = windowHeight * 0.85;

//       elements.forEach(element => {
//           const elementTop = element.getBoundingClientRect().top;
//           if (elementTop < triggerPoint) {
//               element.classList.add('show');
//           } else {
//               element.classList.remove('show');
//           }
//       });
//   });
// }

// // Llamar a la función para distintos elementos
// document.addEventListener("DOMContentLoaded", function () {
//   animateOnScroll('event');      // Para los eventos del itinerario
//   animateOnScroll('scroll-reveal'); // Para los elementos que se revelan al hacer scroll
// });

// document.addEventListener("scroll", function () {
//   let scrollY = window.scrollY;
//   let eucaliptos = document.querySelector(".animation");

//   // Controla la opacidad según el scroll
//   let opacity = Math.min(scrollY / 300, 1); 
//   eucaliptos.style.opacity = opacity;

//   // Controla la velocidad de reproducción del video (Opcional)
//   let speed = Math.min(scrollY / 500, 1); 
//   eucaliptos.playbackRate = speed;
// });
