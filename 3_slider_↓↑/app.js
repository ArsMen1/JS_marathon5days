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

document.addEventListener("keydown", (event) => {
  if (event.key === "0") {
    slideChange("home");
  } else if (event.key === "1") {
    slideChange("1");
  } else if (event.key === "2") {
    slideChange("2");
  } else if (event.key === "3") {
    slideChange("3");
  } else if (event.key === "4") {
    slideChange("4");
  } else if (event.key === "5") {
    slideChange("complete");
  }
});

function resettingStyles(yourBackgroundColor) {
  homeBtn.style.backgroundColor = yourBackgroundColor;
  oneBtn.style.backgroundColor = yourBackgroundColor;
  twoBtn.style.backgroundColor = yourBackgroundColor;
  threeBtn.style.backgroundColor = yourBackgroundColor;
  fourBtn.style.backgroundColor = yourBackgroundColor;
  completeBtn.style.backgroundColor = yourBackgroundColor;
}

function slideChange(direction) {
  resettingStyles("#fff");
  direction === "home"
    ? ((activeSlideIndex = 0), (homeBtn.style.backgroundColor = "black"))
    : direction === "1"
    ? ((activeSlideIndex = 1), (oneBtn.style.backgroundColor = "black"))
    : direction === "2"
    ? ((activeSlideIndex = 2), (twoBtn.style.backgroundColor = "black"))
    : direction === "3"
    ? ((activeSlideIndex = 3), (threeBtn.style.backgroundColor = "black"))
    : direction === "4"
    ? ((activeSlideIndex = 4), (fourBtn.style.backgroundColor = "black"))
    : ((activeSlideIndex = 5), (completeBtn.style.backgroundColor = "black"));

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
