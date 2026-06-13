// Smooth reveal animation on scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(
    ".card, .skill-card, .project-card, .strengths span"
);

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Navbar background effect

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
    } else {
        nav.style.boxShadow = "none";
    }
});

// Typing effect for Hero Section

const text = "Front-End Developer";
const typingText = document.querySelector(".hero-text h2");

let i = 0;

typingText.innerHTML = "";

function typeWriter(){
    if(i < text.length){
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

window.onload = typeWriter;