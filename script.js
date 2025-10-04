const heartBtn = document.getElementById('heartBtn');
const heartsContainer = document.getElementById('hearts');
const sparklesContainer = document.getElementById('sparkles');
const title = document.getElementById('title');
const message = document.getElementById('message');

// Анимированная печать текста
const textTitle = "Ты — мое счастье 💖";
const textMessage = "Каждый день с тобой — как праздник ✨";

let i = 0;
function typeWriter() {
    if (i < textTitle.length) {
        title.innerHTML += textTitle.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        fadeInMessage();
    }
}

function fadeInMessage() {
    let j = 0;
    function typeMsg() {
        if (j < textMessage.length) {
            message.innerHTML += textMessage.charAt(j);
            j++;
            setTimeout(typeMsg, 50);
        }
    }
    typeMsg();
}

window.onload = typeWriter;

// Сердечки
heartBtn.addEventListener('click', () => {
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.fontSize = 20 + Math.random() * 40 + 'px';
    heart.style.animationDuration = 3 + Math.random() * 4 + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

// Мерцающие блестки
setInterval(() => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.width = 2 + Math.random() * 3 + 'px';
    sparkle.style.height = 2 + Math.random() * 3 + 'px';
    sparkle.style.animationDuration = 2 + Math.random() * 3 + 's';
    sparklesContainer.appendChild(sparkle);
    setTimeout(() => { sparkle.remove(); }, 4000);
}, 200);

// Автоматические сердечки
setInterval(() => {
    createHeart();
}, 500);
