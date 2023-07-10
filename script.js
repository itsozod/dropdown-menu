const drop = document.querySelector(".drop");
const dropDown = document.querySelector(".dropdown-menu");
const iconDown = document.querySelector(".fas.fa-caret-down");
const iconUp = document.querySelector(".fas.fa-caret-up");
const lines = document.querySelector(".lines");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const links = document.querySelector(".links");
const nav = document.querySelector(".menu");

drop.addEventListener("click", () => {
  if (drop.classList.contains("active")) {
    drop.classList.remove("active");
    iconDown.style.display = "inline";
    iconUp.style.display = "none";
    dropDown.classList.remove("active");
  } else {
    drop.classList.add("active");
    iconDown.style.display = "none";
    iconUp.style.display = "inline";
    dropDown.classList.add("active");
  }
});

lines.addEventListener("click", () => {
  isNavOpen = !isNavOpen;
  if (
    line1.classList.contains("active") &&
    line3.classList.contains("active")
  ) {
    line1.classList.remove("active");
    line2.style.opacity = "1";
    line3.classList.remove("active");
    links.style.display = "none";
    nav.style.display = "none";
  } else {
    line1.classList.add("active");
    line2.style.opacity = "0";
    line3.classList.add("active");
    links.style.display = "flex";
    nav.style.display = "initial";
  }
});

let isNavOpen = false; // Track if the navigation is open

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    // Reset the display properties of links and nav
    links.style.display = "flex";
    nav.style.display = "initial";
  } else {
    if (isNavOpen) {
      // Keep the navigation open when the screen size is less than 900px
      links.style.display = "flex";
      nav.style.display = "initial";
    } else {
      // Reset the display properties of links and nav
      links.style.display = "none";
      nav.style.display = "none";
    }
  }
});








