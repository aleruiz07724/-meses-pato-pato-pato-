// script.js
// Contador de tiempo desde el 20 de diciembre de 2025
function updateCounter() {

    const startDate = new Date("2025-12-20T00:00:00");
    const now = new Date();

    let diff = now - startDate;

    if (diff < 0) {
        diff = 0;
    }

    const seconds = Math.floor(diff / 1000);

    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const months = Math.floor(days / 30);

    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days % 30;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = secs;
}

setInterval(updateCounter, 1000);
updateCounter();

// Manejo del sobre
const envelopeCard = document.getElementById('envelope-card');
const envelopeWrapper = document.querySelector('.envelope-wrapper');

envelopeCard.addEventListener('click', function (e) {
    if (e.target.classList.contains('close-letter')) return; // no abrir al cerrar
    if (!envelopeWrapper.classList.contains('opened')) {
        envelopeWrapper.classList.add('opened');
    }
});

function closeEnvelope() {
    envelopeWrapper.classList.remove('opened');
}

// Música
const bgMusic = document.getElementById('bg-music');
const playBtn = document.getElementById('play-btn');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        playBtn.textContent = '🎵 Reproducir';
        isPlaying = false;
    } else {
        bgMusic.play().catch(err => console.log("Autoplay prevented:", err));
        playBtn.textContent = '⏸️ Pausar';
        isPlaying = true;
    }
}

// Mensaje secreto
function revealSecret() {
    const secret = document.getElementById('secret-msg');
    if (secret.style.display === 'block') {
        secret.style.display = 'none';
    } else {
        secret.style.display = 'block';
    }
}

// Corazones flotantes
function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart-float');
    heart.innerHTML = '♥';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's'; // 5-8s
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px'; // 15-35px
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    document.getElementById('hearts-container').appendChild(heart);

    // Eliminar después de la animación
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Crear corazones periódicamente
setInterval(createHeart, 400);
// Crear algunos iniciales
for (let i = 0; i < 8; i++) {
    setTimeout(createHeart, i * 200);
}