
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
        messageElement.textContent = messages[currentMessageIndex];
        showMessageButton.style.display = "none";
        resetButton.style.display = "block";
    } else {
        // Mostrar el siguiente mensaje y guardar los datos
        currentMessageIndex = (lastMessageIndex !== null) ? parseInt(lastMessageIndex) + 1 : 0;
        if (currentMessageIndex < messages.length) {
            messageElement.textContent = messages[currentMessageIndex];
            localStorage.setItem("lastMessageIndex", currentMessageIndex);
            localStorage.setItem("lastMessageDate", today);
            showMessageButton.style.display = "block";
            resetButton.style.display = "none";
        } else {
            // No hay más mensajes, mostrar botón de reiniciar
            messageElement.textContent = "¡Ya has visto todos los mensajes! ❤️";
            showMessageButton.style.display = "none";
            resetButton.style.display = "block";
        }
    }
}

// Evento para el botón de "Descubre el mensaje"
showMessageButton.addEventListener("click", () => {
    messageElement.textContent = messages[currentMessageIndex];
    showMessageButton.style.display = "none";
    resetButton.style.display = "block";
});

// Evento para reiniciar y mostrar todos los mensajes
resetButton.addEventListener("click", () => {
    currentMessageIndex = 0;
    messageElement.textContent = "Haz clic en el botón para descubrir un mensaje especial ❤️";
    showMessageButton.style.display = "block";
    resetButton.style.display = "none";
    localStorage.removeItem("lastMessageIndex");
    localStorage.removeItem("lastMessageDate");
});
