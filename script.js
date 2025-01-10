document.addEventListener("DOMContentLoaded", () => {
    // Solicitar nombre y mensaje de bienvenida
    const nombreUsuario = prompt("Por favor, ingresa tu nombre y apellido:");
    if (nombreUsuario) {
        confirm(`¡Bienvenido ${nombreUsuario}!`);
    }

    // Funcionalidad para cambiar tema
    const cambiarTema = document.getElementById("cambiarTema");
    const iconoTema = document.getElementById("iconoTema");
    const raiz = document.documentElement;

    cambiarTema.addEventListener("click", () => {
        const esClaro = iconoTema.textContent === "☀️";
        iconoTema.textContent = esClaro ? "🌙" : "☀️";

        if (esClaro) {
            raiz.style.setProperty("--primary-color", "#0D1B2A");
            raiz.style.setProperty("--secondary-color", "#1B263B");
            raiz.style.setProperty("--accent-color", "#415A77");
            raiz.style.setProperty("--text-color", "#E0E1DD");
            raiz.style.setProperty("--light-bg", "#1B263B");
            raiz.style.setProperty("--background-color", "#0D1B2A");
            raiz.style.setProperty("--card-bg", "#1B263B");
            raiz.style.setProperty("--nav-bg", "#1B263B");
            raiz.style.setProperty("--footer-bg", "#1B263B");
            raiz.style.setProperty("--logo-color", "#ffffff");
        } else {
            raiz.style.setProperty("--primary-color", "#2B4C7E");
            raiz.style.setProperty("--secondary-color", "#567EBB");
            raiz.style.setProperty("--accent-color", "#606D80");
            raiz.style.setProperty("--text-color", "#333");
            raiz.style.setProperty("--light-bg", "#f5f5f5");
            raiz.style.setProperty("--background-color", "#ffffff");
            raiz.style.setProperty("--card-bg", "#ffffff");
            raiz.style.setProperty("--nav-bg", "#ffffff");
            raiz.style.setProperty("--footer-bg", "#2B4C7E");
            raiz.style.setProperty("--logo-color", "#2b4c7e");
        }
        document.body.style.backgroundColor = getComputedStyle(raiz).getPropertyValue("--background-color");

        const nav = document.querySelector("header");
        nav.style.backgroundColor = getComputedStyle(raiz).getPropertyValue("--nav-bg");

        const footer = document.querySelector("footer");
        footer.style.backgroundColor = getComputedStyle(raiz).getPropertyValue("--primary-color");

        const cards = document.querySelectorAll(".destination-card");
        cards.forEach(card => {
            card.style.backgroundColor = getComputedStyle(raiz).getPropertyValue("--card-bg");
            card.style.color = getComputedStyle(raiz).getPropertyValue("--text-color");
        });

        const logo = document.querySelector(".logo");
        logo.style.color = getComputedStyle(raiz).getPropertyValue("--logo-color");
    });

    // Funcionalidad del carrusel
    const carrusel = document.getElementById("carrusel");
    const imagenes = carrusel.querySelectorAll("img");
    let indiceActual = 0;

    setInterval(() => {
        imagenes.forEach((img, indice) => {
            img.style.opacity = indice === indiceActual ? "1" : "0";
            img.style.zIndex = indice === indiceActual ? "1" : "-1";
        });
        indiceActual = (indiceActual + 1) % imagenes.length;
    }, 3000);

    // Ajustar imágenes del carrusel al tamaño del contenedor
    imagenes.forEach((img) => {
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.transition = "opacity 1s ease-in-out";
    });
});
