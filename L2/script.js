"use strict";

//Selecting and Manipulating DOM
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value = 14;
// console.log(document.querySelector(".guess").value);

// Handling Click Events

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  }
});
