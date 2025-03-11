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

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".animation");

  if (video) { // Verifica si el video existe antes de usarlo
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  video.play();
              } else {
                  video.pause();
                  video.currentTime = 0; // Reinicia al principio cuando desaparece
              }
          });
      }, { threshold: 0.5 });

      observer.observe(video);
  } else {
      console.error("No se encontró el elemento .animation");
  }
});

