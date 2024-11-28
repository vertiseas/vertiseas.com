"use strict";

const vertfart1 = `Assets/vertfart1.mp3`;
const vertfart2 = `Assets/vertfart2.mp3`;
const vertfart3 = `Assets/vertfart3.mp3`;

const farts = [vertfart1, vertfart2, vertfart3];

const derpvert = document.getElementById("derpvert");

derpvert.addEventListener("click", () => {
  // Randomly select one of the fart files
  const randomFart = farts[Math.floor(Math.random() * farts.length)];

  // Create a new Audio instance and play it
  const fartSound = new Audio(randomFart);
  fartSound.play();

  // Add shake animation
  derpvert.classList.add("derpvert-shake");
  setTimeout(() => {
    derpvert.classList.remove("derpvert-shake");
  }, 700);
});
