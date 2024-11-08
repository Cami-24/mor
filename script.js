
// Mensajes diarios
const messages = [
    "El futuro te depara cosas asombrosas. Este es solo el comienzo de todo lo que vas a lograr. 😊",
    "¡No te detengas! Cada pequeño paso que das es una prueba de tu valentía y tus ganas de triunfar. Estoy tan orgullosa de lo lejos que has llegado 💪",
    "Siempre estoy aquí para apoyarte, pase lo que pase. 🎁",
    "Recuerda que siempre puedes contar conmigo. ❤️",
    "Las estrellas solo brillan en la oscuridad. Cuando sientas que la vida es difícil, recuerda que es tu momento para brillar. 🌟",
    "A veces el camino se siente cuesta arriba, pero quiero que sepas que cada paso que das me llena de admiración. No estás solo; estoy contigo en cada desafío 💝",
    "Eres más fuerte de lo que crees y más valiente de lo que imaginas. ¡Confía en ti, porque yo creo en ti! 🌹",
    "Cada vez que sientas que dudas, piensa en lo increíblemente lejos que has llegado. ¡No te subestimes, que eres capaz de cosas grandiosas! 💫",
    "Las piedras en el camino son solo recordatorios de lo increíblemente fuerte que eres al saltarlas. Estoy emocionada por todo lo que vas a lograr. 👑",
    "Cuando todo se vuelva complicado, respira, recuerda por qué empezaste y sigue adelante con esa chispa en tus ojos. ¡Tu meta está cada vez más cerca! 😘",
    "Tómate un respiro cuando lo necesites, pero no pierdas de vista tu meta. Eres una inspiración, y pronto verás lo lejos que tus sueños pueden llevarte. 🌟",
    "Cuando la carga se sienta pesada, recuerda que no tienes que cargarla solo. Estoy aquí, apoyándote, animándote y caminando contigo cada paso del camino. ❤️",
    "Sigue luchando, sigue sonriendo y sigue creyendo en ti mismo. Yo estoy aquí para recordarte que puedes conquistar cualquier meta que te propongas. 💋",
    "Nunca dudes de tu potencial y de todo lo que eres capaz de lograr. ¡Tú puedes con todo!🌟",
    "Puedes más de lo que te imaginas y vales más de lo que crees. Estoy orgullosa de ti, por buscar ser mejor cada día. 🥰",
    "No olvides que aquí tienes a alguien que le importas, que te quiere y piensa que eres el mejor. ¡Yo creo en ti! 🌻",
    "Te admiro mucho por estra dando lo mejor de ti, eres my fuerte. 💪",
    "Yo estaré a tu lado cuando estés en lo más alto y en lo más bajo. Te quiero 💕",
    "¡Hoy es el gran día! Sé todo el esfuerzo y dedicación que has puesto para llegar hasta aquí, y quiero que recuerdes que ya eres increíblemente valiente por haber llegado a este punto. Confía en ti, respira profundo y afronta el examen con la seguridad de que estás listo. ¡Tú puedesss!",
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

function loadDailyMessage() {
    const lastMessageIndex = localStorage.getItem("lastMessageIndex");
    const lastMessageDate = localStorage.getItem("lastMessageDate");
    const today = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD

    if (lastMessageDate === today) {
        // Si ya se mostró el mensaje hoy, recuperarlo
        currentMessageIndex = parseInt(lastMessageIndex);
        messageElement.textContent = "Haz clic en el botón para descubrir un mensaje especial ❤️";
        messageElement.style.display = "block"; // Mostrar el texto de introducción
        showMessageButton.style.display = "block"; // Mostrar el botón para descubrir el mensaje
        resetButton.style.display = "none"; // Ocultar el botón de reiniciar
    } else {
        // Si no hay mensaje para hoy, preparar la pantalla de inicio
        currentMessageIndex = (lastMessageIndex !== null) ? (parseInt(lastMessageIndex) + 1) % messages.length : 0;
        messageElement.textContent = "Haz clic en el botón para descubrir un mensaje especial ❤️";
        messageElement.style.display = "block"; // Mostrar el texto de introducción
        showMessageButton.style.display = "block"; // Mostrar el botón
        resetButton.style.display = "none"; // Ocultar el botón de reiniciar
    }
}

// Evento para el botón de "Descubre el mensaje"
showMessageButton.addEventListener("click", () => {
    messageElement.textContent = messages[currentMessageIndex]; // Mostrar el mensaje
    messageElement.style.display = "block"; // Mostrar el mensaje
    localStorage.setItem("lastMessageIndex", currentMessageIndex); // Guarda el índice del mensaje
    localStorage.setItem("lastMessageDate", new Date().toISOString().split('T')[0]); // Guarda la fecha
    showMessageButton.style.display = "none"; // Oculta el botón después de mostrar el mensaje
    resetButton.style.display = "block"; // Muestra el botón de reiniciar
});

// Evento para el botón de reiniciar
resetButton.addEventListener("click", () => {
    localStorage.removeItem("lastMessageIndex"); // Elimina el índice del mensaje guardado
    messageElement.textContent = "Haz clic en el botón para descubrir un mensaje especial ❤️"; // Restablece el texto de introducción
    messageElement.style.display = "block"; // Muestra el texto de introducción
    showMessageButton.style.display = "block"; // Muestra el botón para descubrir el mensaje
    resetButton.style.display = "none"; // Oculta el botón de reiniciar
});
