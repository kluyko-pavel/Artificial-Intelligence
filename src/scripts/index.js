new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    680: {
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 30,
    },
    1150: {
      slidesPerView: 3,
    },
    1565: {
      slidesPerView: 4,
    },
    1955: {
      slidesPerView: 5,
    },
  },
});

const chooseLangBtn = document.querySelector(
  ".main-footer__about-choose-lang-btn "
);
const lang = document.querySelector(".main-footer__about-choose-lang-lang");
const handlerChangeLangValue = (e) => {
  const en = "English";
  const ru = "Russian";
  lang.innerText = e.target.innerText;
  lang.innerText === en
    ? (chooseLangBtn.innerText = ru)
    : (chooseLangBtn.innerText = en);
};
chooseLangBtn.addEventListener("click", (e) => handlerChangeLangValue(e));

const menuButton = document.querySelector(".menu-burger");
const menuBox = document.querySelector(".main-header__menu-box");
const toggleMenuButton = () => {
  menuButton.classList.toggle("active");
  menuBox.classList.toggle("active");
};
menuButton.addEventListener("click", toggleMenuButton);
