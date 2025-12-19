/* Mobile menu */

function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const htmlTag = document.documentElement;
  mobileMenu.classList.toggle("translate-x-full");
  htmlTag.classList.toggle("overflow-hidden");
}

function toggleSearch() {
  const searchContainer = document.getElementById("search-container");
  searchContainer.classList.toggle("hidden");
  searchContainer.classList.toggle("block");
}

/* Accordions */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
