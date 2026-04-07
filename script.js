// 💖 SLIDER
const images = [
"https://raw.githubusercontent.com/missnapokita/july25/refs/heads/main/IMG_20260209_204546.jpg",
"https://raw.githubusercontent.com/missnapokita/july25/refs/heads/main/IMG_20260125_151632.jpg",
"https://gpxcczvqsvngetixmlrx.supabase.co/storage/v1/object/public/maps/mot/IMG_3925.jpg",
"https://gpxcczvqsvngetixmlrx.supabase.co/storage/v1/object/public/maps/mot/IMG_4553.png"
];

let index = 0;

function showSlide() {
    document.getElementById("slide").src = images[index];
}

setInterval(() => {
    index = (index + 1) % images.length;
    showSlide();
}, 2500);

showSlide();

// 💕 COUNTDOWN
const targetDate = new Date("2026-05-01");

setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000*60*60*24));

    document.getElementById("countdown").innerText =
        "Next monthsary in " + days + " days 💕";
}, 1000);

// 💌 SAVE MESSAGE (FIXED)
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

    console.log("Saved:", messages);
}

// 💌 LOAD MESSAGE (FIXED 100%)
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
    alert("I love you so much, Mahal");
}

// 🌙 DARK MODE
function toggleMode() {
    document.body.classList.toggle("dark");
}

// ✍️ TYPING EFFECT
const text = "Mahal,

Happy 3rd monthsary sa atin. ❤️
Gusto ko lang sabihin na mahal na mahal kita, kahit minsan lagi mo akong inaaway. Kahit ganun, naiintindihan kita at mas lalo pa kitang minamahal sa bawat araw na lumilipas.

Salamat kasi nandiyan ka palagi — sa saya, sa tampuhan, at kahit sa simpleng usapan natin. Kahit may mga maliit na away, alam ko na bahagi lang yun ng pagmamahalan natin, at mas lalo lang tayong tumitibay dahil doon.

Ikaw yung dahilan kung bakit mas masaya ang araw ko. Kahit simpleng “kumain ka na ba” o “ingat ka,” sobrang halaga na nun para sa akin. Pinaparamdam mo sa akin na mahalaga ako, at sobra akong nagpapasalamat doon.

Pangako ko na patuloy kitang iintindihin, aalagaan, at mamahalin — hindi lang ngayon, kundi sa mga susunod pang buwan at taon na darating.

Mahal na mahal kita, Mahal. ❤️
Happy 3rd monthsary ulit sa atin.

— Mahal mo";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
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
