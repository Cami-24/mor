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

    // Usar el día del año como índice para el mensaje, utilizando módulo para evitar errores
    return dailyMessages[dayOfYear % dailyMessages.length];
}

// Mostrar el mensaje del día
document.getElementById("message").textContent = getTodayMessage();
