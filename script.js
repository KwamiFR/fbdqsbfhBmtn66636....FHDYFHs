let timer = 5;
const timerElement = document.getElementById('timer');

const countdown = setInterval(() => {
    timer--;
    timerElement.textContent = timer;

    if (timer <= 0) {
        clearInterval(countdown);
        window.location.href = 'https://kwami.tv'; // Remplacez par l'URL de redirection souhaitée
    }
}, 1000);
