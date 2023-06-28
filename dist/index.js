const hamburgerBtn = document.querySelector(
  '[data-collapse-toggle="navbar-sticky"]'
);
const navbarSticky = document.getElementById("navbar-sticky");

hamburgerBtn.addEventListener("click", () => {
  const expanded =
    hamburgerBtn.getAttribute("aria-expanded") === "true" || false;
  hamburgerBtn.setAttribute("aria-expanded", !expanded);
  navbarSticky.classList.toggle("hidden", expanded);
});
