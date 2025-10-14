/* Mobile menu */

function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const htmlTag = document.documentElement;
  mobileMenu.classList.toggle("visible");
  mobileMenu.classList.toggle("invisible");
  htmlTag.classList.toggle("overflow-hidden");
}



