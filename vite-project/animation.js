import { animate, stagger, timeline, scroll } from "motion";
const activator = document.querySelector("#hamburger-button");
const mover = document.querySelector("#menu-open-wrapper");

// scroll(animate(".progress", { strokeDasharray: ["0,1", "1,1"] }));

let menuOpen = true;
const daMotion = [
  [
    "#menu-open-wrapper",
    { transform: ["translate3d(0px, 0%, 0px"] },
    { at: 0.1 },
  ],
];
const daNegativeMotion = [
  [
    "#menu-open-wrapper",
    { transform: ["translate3d(0px, -110%, 0px"] },
    { at: 0.1 },
  ],
];

activator.addEventListener("click", () => {
  if (menuOpen) {
    timeline(daMotion, { duration: 0.8 });
    animate(
      ".heading1-menu",
      {
        y: -40,
      },
      { delay: 0.55 },
      { duration: 0.4 }
    );
  } else {
    timeline(daNegativeMotion, { duration: 0.8 });
    animate(
      ".heading1-menu",
      {
        y: 40,
      },
      {
        delay: 0.55,
      },
      { duration: 0.4 }
    );
  }

  menuOpen = !menuOpen;
});

setTimeout(() => {
  const loaderText = document.querySelector(".loader").querySelector("h1");
  const loader = document.querySelector(".loader");

  animate((progress) => (loaderText.innerHTML = Math.round(progress * 100)), {
    duration: 1.5,
    easing: "ease-out",
  }).finished.then(() => {
    loader.style.display = "none";
  });
}, 700);

const letters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&?'";

let interval = null;
const h1Elements = document.querySelectorAll(".hero-text h1");
h1Elements.forEach((h1) => {
  h1.onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 63)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };
});
