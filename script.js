/* 
Author: Sheber Mokua
File Name: script.js
Date: 02/20/2025
*/

// Hamburger menu function
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("nav-links").classList.toggle("show");
  document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

});

// FAQ interactivity
const questions = document.querySelectorAll("#questions p");
const response = document.getElementById("response");

questions.forEach((question, index) => {
  question.addEventListener("click", function() {
    let answers = [
      "If you find an injured animal, contact us immediately at (555) 123-4567.",
      "Yes! We welcome volunteers. Visit our 'Partnership' page to learn more.",
      "We rescue raccoons, foxes, squirrels, birds, reptiles, and more.",
      "Donations help us save more animals! Visit our 'Contact' page for details."
    ];
    response.textContent = answers[index];
  });
});
