document.addEventListener("DOMContentLoaded", function () {
    const flowers = document.querySelectorAll(".flower");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Muestra la flor
            } else {
                entry.target.classList.remove("visible"); // La oculta al subir
            }
        });
    }, {
        threshold: 0.3 // Detecta cuando el 30% del elemento es visible
    });

    flowers.forEach((flower) => {
        observer.observe(flower);
    });
});
