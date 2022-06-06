const navBtn = document.querySelector(".nav-icon");
const closeNav = document.querySelector(".close-nav");
const navbar = document.querySelector(".navbar");

navBtn.addEventListener("click", function () {
  navbar.classList.add("showNav");
});

closeNav.addEventListener("click", function () {
  navbar.classList.remove("showNav");
});
