const userColor = prompt("¡Bienvenido! ¿Cuál es tu color favorito para el fondo de la página?");
if (userColor) {
    document.body.style.backgroundColor = userColor;
} else {
    alert("No seleccionaste un color, se usará el predeterminado.");
}

// Función Hermanos
function hermanos() {
    const cantidad = parseInt(prompt("¿Cuántos hermanos tienes?"));
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa un número válido mayor que 0.");
        return;
    }

    let intentos = cantidad;
    const nombres = [];
    while (intentos > 0) {
        const nombre = prompt(`Ingresa el nombre de uno de tus hermanos (${intentos} intentos restantes):`);
        if (nombre) {
            nombres.push(nombre);
            intentos--;
        } else {
            alert("Por favor, ingresa un nombre válido.");
        }
    }
    console.log("Nombres de tus hermanos:", nombres);
}

// Función para generar colores hexadecimales aleatorios
function generarColorHex() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

// Función Bloques
function bloques() {
    const cantidad = parseInt(prompt("¿Cuántos bloques deseas generar?"));
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa un número válido mayor que 0.");
        return;
    }

    let contenedor = document.getElementById("contenedor-bloques");
    if (contenedor) {
        contenedor.remove();
    }

    contenedor = document.createElement("div");
    contenedor.id = "contenedor-bloques";
    contenedor.style.display = "flex";
    contenedor.style.flexWrap = "wrap";
    contenedor.style.gap = "10px";
    document.body.appendChild(contenedor);

    for (let i = 0; i < cantidad; i++) {
        const bloque = document.createElement("div");
        bloque.style.width = "100px";
        bloque.style.height = "100px";
        bloque.style.backgroundColor = generarColorHex();
        bloque.style.border = "1px solid #000";
        contenedor.appendChild(bloque);
    }
}

// Función para generar una opción aleatoria
function generarOpcionAleatoria() {
    const opciones = ["piedra", "papel", "tijera"];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

// Función Yanquenpo
function yanquenpo() {
    const usuario = prompt("Elige una opción: piedra, papel o tijera").toLowerCase();
    const computadora = generarOpcionAleatoria();

    if (!["piedra", "papel", "tijera"].includes(usuario)) {
        alert("Por favor, elige una opción válida (piedra, papel o tijera).");
        return;
    }

    alert(`Tú elegiste: ${usuario}\nLa computadora eligió: ${computadora}`);

    if (usuario === computadora) {
        alert("¡Es un empate!");
    } else if (
        (usuario === "piedra" && computadora === "tijera") ||
        (usuario === "tijera" && computadora === "papel") ||
        (usuario === "papel" && computadora === "piedra")
    ) {
        alert("¡Ganaste!");
    } else {
        alert("¡Perdiste!");
    }
}

// Llamada de las funciones según el usuario lo desee
document.querySelectorAll("li").forEach((item, index) => {
    item.addEventListener("click", () => {
        if (index === 0) hermanos();
        else if (index === 1) bloques();
        else if (index === 2) yanquenpo();
    });
});

document.getElementById("btn-inicio").addEventListener("click", () => {
    location.href = "./index.html";
});