const text = "This is a typing effect with JavaScript.";
const speed = 50; // milliseconds per character
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;