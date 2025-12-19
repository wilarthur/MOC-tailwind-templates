/* Mobile menu */

function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const htmlTag = document.documentElement;
  mobileMenu.classList.toggle("translate-x-full");
  htmlTag.classList.toggle("overflow-hidden");
}

function toggleSearch() {
  const searchContainer = document.getElementById("search-container");
  const searchForm = document.getElementById("search-form");

  if (searchContainer.classList.contains("h-0")) {
    searchContainer.classList.toggle("h-0");
    searchContainer.classList.toggle("h-32");
    setTimeout(() => {
      searchForm.classList.toggle("opacity-0");
      searchForm.classList.toggle("opacity-100");
    }, 300);
  } else if (searchContainer.classList.contains("h-32")) {
    searchForm.classList.toggle("opacity-0");
    searchForm.classList.toggle("opacity-100");
    setTimeout(() => {
      searchContainer.classList.toggle("h-0");
      searchContainer.classList.toggle("h-32");
    }, 300);
  }
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
