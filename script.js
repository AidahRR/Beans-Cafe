console.log("Script loaded successfully");
const sections = document.querySelectorAll(
    ".Story-background, .Mission-background, .Values-background, .Team-background"
);

let currentSection = 0;
let Automaticsliding = true;

const track = document.querySelector(".Slideshow-track");


if (track) {


    setInterval(() => {

    if(Automaticsliding === true) {

        currentSection++;

        if (currentSection >= sections.length) {
            currentSection = 0;
        }

        track.style.transform = `translateX(-${currentSection * 100}%)`;
    }
    }, 2000);

    const Backbutton = document.querySelector(".Back-button");
    const Forwardbutton = document.querySelector(".Forward-button");

    Forwardbutton.addEventListener("click", () => {
        Automaticsliding = false;

        currentSection++;

        if (currentSection >= sections.length) {
            currentSection = 0;
        }   

        track.style.transform = `translateX(${currentSection * 100}%)`;
    });
Backbutton.addEventListener("click", () => {
    Automaticsliding = false;

    currentSection--;

    if (currentSection === -1) {
        currentSection = sections.length - 1;
    }

    track.style.transform = `translateX(-${currentSection * 100}%)`;
});
}
const animatedElements = document.querySelectorAll(
    ".Forename-form, .Surname-form, .Email-form, .Phone-form, .Date-form, .time-form, .requests-form, .guests-form"
);

console.log("Elements found:", animatedElements.length);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(
            "Observed element:",
            entry.target.className,
            "Visible:",
            entry.isIntersecting
        );

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

animatedElements.forEach((element) => {
    observer.observe(element);
});
