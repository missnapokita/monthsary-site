// 💖 SLIDER (FIXED + FADE EFFECT)
const images = [
"https://raw.githubusercontent.com/missnapokita/july25/main/IMG_20260209_204546.jpg",
"https://raw.githubusercontent.com/missnapokita/july25/main/IMG_20260125_151632.jpg",
"https://gpxcczvqsvngetixmlrx.supabase.co/storage/v1/object/public/maps/mot/IMG_3925.jpg",
"https://gpxcczvqsvngetixmlrx.supabase.co/storage/v1/object/public/maps/mot/IMG_4553.png"
];

let index = 0;
const slide = document.getElementById("slide");

// fade effect
slide.style.transition = "opacity 0.8s ease-in-out";

function showSlide() {
    slide.style.opacity = 0;

    setTimeout(() => {
        slide.src = images[index];
        slide.style.opacity = 1;
    }, 300);
}

setInterval(() => {
    index = (index + 1) % images.length;
    showSlide();
}, 3000);

// initial load
slide.src = images[0];

// 💕 COUNTDOWN
const targetDate = new Date("2026-05-01");

setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000*60*60*24));

    document.getElementById("countdown").innerText =
        "Next monthsary in " + days + " days 💕";
}, 1000);

// 💌 SAVE MESSAGE
function saveMessage() {
    const input = document.getElementById("msgInput");
    const msg = input.value.trim();

    if (msg === "") {
        alert("Mag type ka muna 😅");
        return;
    }

    let messages = JSON.parse(localStorage.getItem("loveMsgs")) || [];

    messages.push(msg);

    localStorage.setItem("loveMsgs", JSON.stringify(messages));

    input.value = "";

    loadMessages();
}

// 💌 LOAD MESSAGE
function loadMessages() {
    let messages = JSON.parse(localStorage.getItem("loveMsgs")) || [];
    const list = document.getElementById("messages");

    list.innerHTML = "";

    if (messages.length === 0) {
        list.innerHTML = "<li>No messages yet 💔</li>";
        return;
    }

    messages.slice().reverse().forEach(m => {
        const li = document.createElement("li");
        li.textContent = "💖 " + m;
        list.appendChild(li);
    });
}

loadMessages();

// 💖 CLICK HEART
function showLove() {
    alert("I love you so much, Mahal 💖🥺");
}

// 🌙 DARK MODE
function toggleMode() {
    document.body.classList.toggle("dark");
}

// ✍️ TYPING EFFECT
const text = `Mahal,

Happy 3rd monthsary sa atin. ❤️
Mahal na mahal kita kahit lagi mo akong inaaway 😅
Pero kahit ganun, mas lalo pa kitang minamahal araw-araw.

Salamat kasi nandiyan ka palagi 💖`;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}
typeWriter();

// 🎆 CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

for (let i = 0; i < 100; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "pink";

    confetti.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
    });

    confetti.forEach(c => {
        c.y += 2;
        if (c.y > canvas.height) c.y = 0;
    });
}

setInterval(draw, 30);
