// 💖 SLIDER (SWIPE + FADE)
const images = [
"https://raw.githubusercontent.com/missnapokita/july25/main/IMG_20260209_204546.jpg",
"https://raw.githubusercontent.com/missnapokita/july25/main/IMG_20260125_151632.jpg",
"https://gpxcczvqsvngetixmlrx.supabase.co/storage/v1/object/public/maps/mot/IMG_3925.jpg",
"https://gpxcczvqsvngetixmlrx.supabase.co/storage/v1/object/public/maps/mot/IMG_4553.png"
];

let index = 0;
const slide = document.getElementById("slide");

slide.style.transition = "opacity 0.6s ease-in-out";

function showSlide() {
    slide.style.opacity = 0;
    setTimeout(() => {
        slide.src = images[index];
        slide.style.opacity = 1;
    }, 200);
}

// AUTO SLIDE
setInterval(() => {
    index = (index + 1) % images.length;
    showSlide();
}, 3000);

// INITIAL
slide.src = images[0];

// 👉 SWIPE SUPPORT (MOBILE)
let startX = 0;

slide.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

slide.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        index = (index + 1) % images.length;
        showSlide();
    } else if (endX - startX > 50) {
        index = (index - 1 + images.length) % images.length;
        showSlide();
    }
});

// 💕 COUNTDOWN
const targetDate = new Date("2026-05-01");

setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000*60*60*24));

    document.getElementById("countdown").innerText =
        "Next monthsary in " + days + " days 💕";
}, 1000);

// 💖 CLICK HEART
function showLove() {
    alert("I love you so much, Mahal 💖🥺");
}

// 🌙 DARK MODE
function toggleMode() {
    document.body.classList.toggle("dark");
}

// 💖 STORY PAGE FUNCTION (UNCHANGED)
function openStory() {
    window.location.href = "story.html";
}

// 💖 NEW: STORYLINE ALERT (ADDED LANG)
function showStory() {
    alert("Simula nung nag meet tayo, nagbago lahat... ikaw ang pinaka magandang nangyari sa buhay ko 💖🥺");
}

// ✍️ TYPING EFFECT (PRO VERSION)
window.addEventListener("load", () => {

    const lines = [
        "Mahal,",
        "",
        "Happy 3rd monthsary sa atin. ❤️",
        "Mahal na mahal kita kahit lagi mo akong inaaway 😅",
        "Pero kahit ganun, mas lalo pa kitang minamahal araw-araw.",
        "",
        "Salamat kasi nandiyan ka palagi 💖"
    ];

    const el = document.getElementById("typing");

    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
        if (lineIndex >= lines.length) return;

        if (charIndex < lines[lineIndex].length) {
            el.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, 40);
        } else {
            el.innerHTML += "<br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeLine, 500);
        }
    }

    typeLine();
});

// 🎆 CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

for (let i = 0; i < 80; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 5
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
        c.y += 1.5;
        if (c.y > canvas.height) c.y = 0;
    });
}

setInterval(draw, 30);
