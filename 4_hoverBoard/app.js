const board = document.querySelector("#board");
const colors = ["red", "blue", "green", "yellow", "purple"];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
}

function removeColor(el) {
  el.style.backgroundColor = "1d1d1d";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
