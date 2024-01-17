const hamburgerButton = document.getElementById("hamburger-button");
const hamburgerMenu = document.getElementById("burger-white");
const hamburgerMenuOpen = document.getElementById("burger-white-2");
const menuOpenWrapper = document.getElementById("menu-open-wrapper");
const menuOpenFilter = document.getElementById("menu-open-bg-filter");

hamburgerButton.addEventListener("click", () => {
  const isOpened = hamburgerButton.getAttribute("aria-expanded");

  if (isOpened === "false") {
    hamburgerMenuOpen.style.opacity = "100%";
    menuOpenWrapper.style.display = "flex";
    hamburgerMenu.style.opacity = "0%";
    hamburgerButton.setAttribute("aria-expanded", "true");
  } else {
    hamburgerMenu.style.opacity = "100%";
    hamburgerMenuOpen.style.opacity = "0%";
    hamburgerButton.setAttribute("aria-expanded", "false");
  }
});

// -------- Mouse Animations --------//

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // cursorOutline.style.left = `${posX}px`;
  // cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 200, fill: "forwards" }
  );
});

// -------- Set Current Page --------//
const activePage = window.location.pathname;
const navLinks = document
  .querySelectorAll(".heading1-menu-sub-wrapper a")
  .forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("w--current");
    }
  });
