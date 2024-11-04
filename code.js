// Arreglo de mensajes para cada día
const dailyMessages = [
    "Eres la razón de mis sonrisas y mis mejores momentos. ❤️",
    "Confío en ti y sé que lograrás todo lo que te propongas. 🌟",
    "No puedo esperar a verte de nuevo, eres increíble. 😍",
    "Cada día pienso en lo afortunada que soy de tenerte. 💖",
    "Recuerda siempre lo fuerte y capaz que eres. 💪",
    "¡Estoy aquí para ti en cada paso que des! 🐾",
    "Gracias por ser tú, mi persona especial. 💫",
    // Agrega más mensajes para cada día que necesites
];

// Función para obtener el mensaje basado en el día del año
function getTodayMessage() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0); // 1 de enero
    const diff = now - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay); // Día del año (0 a 365)

    // Usar el día del año como índice para el mensaje
    return dailyMessages[dayOfYear % dailyMessages.length];
}

// Función para mostrar el mensaje al hacer clic en el botón
function showDailyMessage() {
    const message = document.getElementById("message");
    message.textContent = getTodayMessage();
    message.style.color = "#d81b60"; // Cambia el color del mensaje al mostrarse
}

// Añadir el evento al botón después de que la página ha cargado
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("showMessageButton");
    button.addEventListener("click", showDailyMessage);
});
