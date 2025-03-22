document.addEventListener("DOMContentLoaded", function () {
    function rotateYDIV(element) {
        // Evitar iniciar otra animación si ya está en curso
        if (element.dataset.animating === "true") return;
        
        element.dataset.animating = "true"; // Marcar como animando
        let ny = 0;
        let rotYINT = setInterval(() => {
            ny += 2; // Aumentamos de 1 en 1 o más rápido con 2 en 2
            element.style.transform = `rotateY(${ny}deg)`;
            if (ny >= 360) { // Terminar la animación en 360°
                clearInterval(rotYINT);
                element.style.transform = "rotateY(0deg)"; // Resetear al estado original
                element.dataset.animating = "false"; // Marcar como terminado
            }
        }, 10);
    }

    // Seleccionar solo los elementos que deben rotar
    document.querySelectorAll(".rotate-target").forEach(img => {
        img.dataset.animating = "false"; // Inicializa el estado

        img.addEventListener("mouseover", function () {
            rotateYDIV(this);
        });

        // Para accesibilidad con teclado
        img.addEventListener("focus", function () {
            rotateYDIV(this);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function rotateZDIV(element) {
        // Evitar iniciar otra animación si ya está en curso
        if (element.dataset.animating === "true") return;
        
        element.dataset.animating = "true"; // Marcar como animando
        let nz = 0;
        let rotZINT = setInterval(() => {
            nz += 2; // Aumentamos de 1 en 1 o más rápido con 2 en 2
            element.style.transform = `rotateZ(${nz}deg)`; // Cambiar de rotateY a rotateZ
            if (nz >= 360) { // Terminar la animación en 360°
                clearInterval(rotZINT);
                element.style.transform = "rotateZ(0deg)"; // Resetear al estado original
                element.dataset.animating = "false"; // Marcar como terminado
            }
        }, 10);
    }

    // Seleccionar solo los elementos que deben rotar
    document.querySelectorAll(".rotate-target").forEach(img => {
        img.dataset.animating = "false"; // Inicializa el estado

        img.addEventListener("mouseover", function () {
            rotateZDIV(this); // Usamos rotateZDIV en lugar de rotateYDIV
        });

        // Para accesibilidad con teclado
        img.addEventListener("focus", function () {
            rotateZDIV(this); // Usamos rotateZDIV también para el foco
        });
    });
});

