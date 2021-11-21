"use strict";

// Selecting and Manipulating DOM
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value = 14;
// console.log(document.querySelector(".guess").value);

// Handling Click Events

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    //When there is no input
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === secretNumber) {
    //When player wins
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess !== secretNumber) {
    //When guess is too high
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High!" : "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
