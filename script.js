// Floating hearts generator
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}, 300);

// Valentine buttons
function yesAnswer() {
  document.getElementById("response").innerHTML =
    "YAY 😍 I knew it! Happy Valentine’s Day 💕";
}

function noAnswer() {
  document.getElementById("response").innerHTML =
    "That’s okay… I still think you’re amazing 💗";
}
