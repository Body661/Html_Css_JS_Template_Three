let megaButton = document.querySelector(".other");
let megaMenu = document.querySelector(".mega-menu");

megaButton.onclick = function () {
  if (megaMenu.style.opacity == "1") {
    megaMenu.style.opacity = 0;
    megaMenu.style.zIndex = -1;
    megaMenu.style.top = "calc(100% + 50px)";
  } else {
    megaMenu.style.opacity = 1;
    megaMenu.style.zIndex = 100;
    megaMenu.style.top = "calc(100% + 1px)";
  }
};

let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".prog span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};
