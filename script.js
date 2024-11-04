// Mensajes diarios
const messages = [
    "Eres la razón por la que sonrío cada día. 😊",
    "Siempre estoy aquí para apoyarte, pase lo que pase. 💪",
    "Tu amor es un regalo que valoro cada día. 🎁",
    "Recuerda que siempre puedes contar conmigo. ❤️",
    "Cada día a tu lado es una aventura maravillosa. 🌟"
];

// Selecciona los elementos de bienvenida y de mensajes diarios
const welcomeScreen = document.getElementById("welcomeScreen");
const dailyMessageScreen = document.getElementById("dailyMessageScreen");
const startButton = document.getElementById("startButton");
const messageElement = document.getElementById("message");
const showMessageButton = document.getElementById("showMessageButton");
const resetButton = document.getElementById("resetButton");

let currentMessageIndex = 0;

// Al hacer clic en el botón de inicio, oculta la pantalla de bienvenida y muestra los mensajes diarios
startButton.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
    dailyMessageScreen.classList.remove("hidden");
    loadDailyMessage();
});

// Función para cargar el mensaje diario
function loadDailyMessage() {
    const lastMessageIndex = localStorage.getItem("lastMessageIndex");
    const lastMessageDate = localStorage.getItem("lastMessageDate");
    const today = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD

    if (lastMessageDate === today) {
        // Si ya se mostró el mensaje hoy, recuperarlo
        currentMessageIndex = parseInt(lastMessageIndex);
        messageElement.textContent = messages[currentMessageIndex]; // Prepara el mensaje, pero lo mantiene oculto
        messageElement.style.display = "none"; // Mantiene el mensaje oculto
        showMessageButton.style.display = "none"; // Oculta el botón para mostrar mensaje
        resetButton.style.display = "block"; // Muestra el botón de reiniciar
    } else {
        // Si no hay mensaje para hoy, reinicia el índice
        currentMessageIndex = (lastMessageIndex !== null) ? parseInt(lastMessageIndex) + 1 : 0;

        if (currentMessageIndex < messages.length) {
            // Mantener el mensaje oculto y mostrar el botón
            messageElement.style.display = "none"; // Ocultar el mensaje inicialmente
            showMessageButton.style.display = "block"; // Muestra el botón para mostrar el mensaje
            resetButton.style.display = "none"; // Oculta el botón de reiniciar
        } else {
            // No hay más mensajes, mostrar mensaje final
            messageElement.textContent = "¡Ya has visto todos los mensajes! ❤️";
            messageElement.style.display = "block"; // Mostrar el mensaje final
            showMessageButton.style.display = "none"; // Oculta el botón
            resetButton.style.display = "block"; // Muestra el botón de reiniciar
        }
    }
}

// Evento para el botón de "Descubre el mensaje"
showMessageButton.addEventListener("click", () => {
    messageElement.textContent = messages[currentMessageIndex]; // Muestra el mensaje
    messageElement.style.display = "block"; // Muestra el mensaje
    localStorage.setItem("lastMessageIndex", currentMessageIndex); // Guarda el índice del mensaje
    localStorage.setItem("lastMessageDate", new Date().toISOString().split('T')[0]); // Guarda la fecha
    showMessageButton.style.display = "none"; // Oculta el botón después de mostrar el mensaje
    resetButton.style.display = "block"; // Muestra el botón de reiniciar
});

// Evento para reiniciar y mostrar todos los mensajes
resetButton.addEventListener("click", () => {
    currentMessageIndex = 0;
    messageElement.textContent = "Haz clic en el botón para descubrir un mensaje especial ❤️";
    messageElement.style.display = "none"; // Mantiene el mensaje oculto
    showMessageButton.style.display = "block"; // Muestra el botón para mostrar mensaje
    resetButton.style.display = "none"; // Oculta el botón de reiniciar
    localStorage.removeItem("lastMessageIndex");
    localStorage.removeItem("lastMessageDate");
});
