const homeBtn = document.querySelector(".Home");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const completeBtn = document.querySelector(".complete");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slideCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

homeBtn.addEventListener("click", () => slideChange("home"));
oneBtn.addEventListener("click", () => slideChange("1"));
twoBtn.addEventListener("click", () => slideChange("2"));
threeBtn.addEventListener("click", () => slideChange("3"));
fourBtn.addEventListener("click", () => slideChange("4"));
completeBtn.addEventListener("click", () => slideChange("complete"));

function slideChange(direction) {
  direction === "home"
    ? (activeSlideIndex = 0)
    : direction === "1"
    ? (activeSlideIndex = 1)
    : direction === "2"
    ? (activeSlideIndex = 2)
    : direction === "3"
    ? (activeSlideIndex = 3)
    : direction === "4"
    ? (activeSlideIndex = 4)
    : (activeSlideIndex = 5);

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
