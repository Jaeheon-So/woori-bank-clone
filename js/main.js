const searchIcon = document.querySelector(".search");
const searchPage = document.querySelector(".search2");
const searchClose = document.querySelector(".search-close");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form input");
const btnGoTop = document.querySelector("footer .go-top");
const filter = document.querySelector(".filter");

searchIcon.addEventListener("click", () => {
  searchPage.classList.add("show");
  filter.classList.add("on");
});

searchInput.addEventListener("focus", () => {
  console.log("hi");
  searchForm.classList.add("focused");
});

searchInput.addEventListener("blur", () => {
  console.log("ih");
  searchForm.classList.remove("focused");
});

searchClose.addEventListener("click", () => {
  searchPage.classList.remove("show");
  filter.classList.remove("on");
});

btnGoTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const swiper = new Swiper(".slide-content .swiper-container", {
  centeredSlides: true,
  effect: "fade",
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  touchRatio: false,
  pagination: {
    el: ".slide-content .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".slide-content .swiper-prev",
    nextEl: ".slide-content .swiper-next",
  },
});

const swiperPause = document.querySelector(".swiper-pause");
const swiperPlay = document.querySelector(".swiper-play");
swiperPause.addEventListener("click", () => {
  console.log("stop");
  swiperPause.classList.add("hide");
  swiperPlay.classList.remove("hide");
  swiper.autoplay.stop();
});
swiperPlay.addEventListener("click", () => {
  console.log("play");
  swiperPause.classList.remove("hide");
  swiperPlay.classList.add("hide");
  swiper.autoplay.start();
});

const fastMenu = document.querySelector(".fast-menu");
const fastMenuToggle = document.querySelector(".fast-menu > a");
let flag = true;
fastMenuToggle.addEventListener("click", () => {
  if (flag) {
    console.log("show");
    fastMenu.classList.add("show");
    flag = !flag;
  } else {
    console.log("hide");
    fastMenu.classList.remove("show");
    flag = !flag;
  }
});
