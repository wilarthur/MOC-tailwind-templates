/* Mobile menu */

function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const htmlTag = document.documentElement;

  if (mobileMenu.classList.contains("left-full")) {
    mobileMenu.classList.toggle("hidden");
    setTimeout(() => {
      mobileMenu.classList.toggle("left-full");
      mobileMenu.classList.toggle("right-0");
      mobileMenu.classList.toggle("translate-x-full");
    }, 10);
  } else if (mobileMenu.classList.contains("right-0")) {
    mobileMenu.classList.toggle("translate-x-full");
    setTimeout(() => {
      mobileMenu.classList.toggle("right-0");
      mobileMenu.classList.toggle("left-full");
    }, 1000);
    setTimeout(() => {
      mobileMenu.classList.toggle("hidden");
    }, 1010);
  }
}

function toggleSearch() {
  const searchContainer = document.getElementById("search-container");
  const searchForm = document.getElementById("search-form");

  if (searchContainer.classList.contains("h-0")) {
    searchContainer.classList.toggle("hidden");
    setTimeout(() => {
      searchContainer.classList.toggle("h-0");
      searchContainer.classList.toggle("h-32");
    }, 10);
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
    setTimeout(() => {
      searchContainer.classList.toggle("hidden");
    }, 600);
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
