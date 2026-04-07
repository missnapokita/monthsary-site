// PALITAN MO NG REAL PICS NIYO
const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/301",
    "https://via.placeholder.com/302"
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

// COUNTDOWN (palitan mo date)
const targetDate = new Date("2026-05-01");

setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText =
        "Next monthsary in " + days + " days 💕";
}, 1000);

// BACKEND
async function sendMessage() {
    const msg = document.getElementById("msgInput").value;

    if (!msg) return;

    await fetch("http://localhost:3000/send", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: msg})
    });

    document.getElementById("msgInput").value = "";
    loadMessages();
}

async function loadMessages() {
    const res = await fetch("http://localhost:3000/messages");
    const data = await res.json();

    const list = document.getElementById("messages");
    list.innerHTML = "";

    data.reverse().forEach(m => {
        const li = document.createElement("li");
        li.textContent = "💖 " + m;
        list.appendChild(li);
    });
}

loadMessages();
