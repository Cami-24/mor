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
});

// Función para mostrar el mensaje diario
function showDailyMessage() {
    if (currentMessageIndex < messages.length) {
        messageElement.textContent = messages[currentMessageIndex];
        currentMessageIndex++;
        if (currentMessageIndex === messages.length) {
            showMessageButton.style.display = "none"; // Oculta el botón de mostrar mensaje
            resetButton.style.display = "block"; // Muestra el botón de reiniciar
        }
    }
}

// Evento para el botón de "Descubre el mensaje"
showMessageButton.addEventListener("click", showDailyMessage);

// Evento para reiniciar y mostrar todos los mensajes
resetButton.addEventListener("click", () => {
    currentMessageIndex = 0;
    messageElement.textContent = "Haz clic en el botón para descubrir un mensaje especial ❤️";
    showMessageButton.style.display = "block"; // Muestra el botón de mostrar mensaje
    resetButton.style.display = "none"; // Oculta el botón de reiniciar
});
