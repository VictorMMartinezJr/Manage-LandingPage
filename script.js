"use strict";

// Elements
const navLinks = document.querySelector(".navbar__navlinks");
const navIcon = document.querySelector(".navbar__icon");
const navIconMenu = document.querySelector(".navbar__icon--menu");
const navIconClose = document.querySelector(".navbar__icon--close");

const hideShowNavIcons = (iconToShow) => {
  iconToShow.classList.remove("hidden");

  if (navLinks.classList.contains("navbar__navlinks__hidden")) {
    navLinks.classList.remove("navbar__navlinks__hidden");
  } else {
    navLinks.classList.add("navbar__navlinks__hidden");
  }
};

// Event Listeners
navIconMenu.addEventListener("click", (e) => {
  e.target.classList.add("hidden");
  hideShowNavIcons(navIconClose);
});
navIconClose.addEventListener("click", (e) => {
  e.target.classList.add("hidden");
  hideShowNavIcons(navIconMenu);
});
