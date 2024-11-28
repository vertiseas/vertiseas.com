"use strict";

const vertfart1 = `Assets/vertfart1.mp3`;
const vertfart2 = `Assets/vertfart2.mp3`;
const vertfart3 = `Assets/vertfart3.mp3`;
const abripiano = new Audio(`Assets/abripiano.mp3`);
const abri = document.querySelector(".abri");
const abrifish = document.querySelector(".abrifish");

const farts = [vertfart1, vertfart2, vertfart3];

const derpvert = document.getElementById("derpvert");

derpvert.addEventListener("click", () => {
  const randomFart = farts[Math.floor(Math.random() * farts.length)];

  const fartSound = new Audio(randomFart);
  fartSound.play();

  derpvert.classList.add("derpvert-shake");
  setTimeout(() => {
    derpvert.classList.remove("derpvert-shake");
  }, 700);
});

const abriclick = document.getElementById("abriclick");

abriclick.addEventListener("click", () => {
  abri.classList.toggle("hidden");
  abripiano.load();
  setTimeout(() => {
    abrifish.classList.add("abri-play");
    abripiano.play();
  }, 2000);
  setTimeout(() => {
    abri.classList.toggle("hidden");
    abrifish.classList.remove("abri-play");
  }, 9000);
});
