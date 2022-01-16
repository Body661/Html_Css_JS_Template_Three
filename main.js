let toggleMenu = document.querySelector(".toggle-menu");
let links = document.querySelector(".nav-links");

toggleMenu.onclick = function () {
  if (links) {
    links.style.display == "flex"
      ? (links.style.display = "")
      : (links.style.display = "flex");
  }
};
