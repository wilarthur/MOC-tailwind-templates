/* Mobile menu */

function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const htmlTag = document.documentElement;
  mobileMenu.classList.toggle("translate-x-full");
  htmlTag.classList.toggle("overflow-hidden");
}
