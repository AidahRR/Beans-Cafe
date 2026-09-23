const sections = document.querySelectorAll(
    ".Story-background, .Mission-background, .Values-background, .Team-background"
);

let currentSection = 0;
let Automaticsliding = true;

const track = document.querySelector(".Slideshow-track");

setInterval(() => {

if(Automaticsliding === true)

    currentSection++;

    if (currentSection >= sections.length) {
        currentSection = 0;
    }

    track.style.transform = `translateX(-${currentSection * 100}%)`;
}, 5000);


const Backbutton = document.querySelector(".Back-button");
const Forwardbutton = document.querySelector(".Forward-button");

Forwardbutton.addEventListener("click", () => {
    Automaticsliding = false;

    currentSection++;

    if (currentSection >= sections.length) {
        currentSection = 0;
    }

    track.style.transform = `translateX = (${currentSection * 100}%)`;
});
Backbutton.addEventListener("click", () => {
    Automaticsliding = false;

    currentSection--;

    if (currentSection >= sections.length) {
        currentSection = 0;
    }

    track.style.transform = `translateX(-${currentSection * 100}%)`;

    if (currentSection === -1) {
         currentSection = 3;
    }
});