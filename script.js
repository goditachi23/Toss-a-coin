"use strict";
const displayToss = function (flipped) {
  document.querySelector(".what-flipped").textContent = flipped;
};
const tossBtn = document.querySelector(".toss-button");
const resetBtn = document.querySelector(".reset-button");
const heads = document.getElementById("heads");
const tails = document.getElementById("tails");

let toss;

tossBtn.addEventListener("click", function () {
  toss = Math.trunc(Math.random() * 2) + 1; // Randomly generates either 1 or 2
  if (toss === 1) {
    displayToss("Heads");
    heads.classList.remove("hidden");
    tails.classList.add("hidden");
  } else {
    displayToss("Tails");
    tails.classList.remove("hidden");
    heads.classList.add("hidden");
  }
});

resetBtn.addEventListener("click", function () {
  tails.classList.add("hidden");
  heads.classList.add("hidden");
  displayToss("Heads Or Tails?");
});
