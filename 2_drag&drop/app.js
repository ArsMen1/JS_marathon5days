const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

// Замена перетаскиваемого предмета
const dragDroppp = () => {
  const Drop1 = function () {
    item.innerHTML = `Цена: 50р/шт`;
  };

  const Drop2 = function () {
    item.innerHTML = `Цена: 100р/шт`;
  };

  const Drop3 = function () {
    item.innerHTML = `Цена: 150р/шт`;
  };

  placeholders[0].addEventListener("drop", Drop1);
  placeholders[1].addEventListener("drop", Drop2);
  placeholders[2].addEventListener("drop", Drop3);

  placeholders[0].classList.add("background1row");
  placeholders[1].classList.add("background2row");
  placeholders[2].classList.add("background3row");
};

function dragstart(event) {
  dragDroppp();
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0); // classList имеет методы для классов
}

function dragend(event) {
  event.target.className = "item"; //className Всегд работает со строчкой
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  setTimeout(() => event.target.classList.add("hovered"), 0); // classList имеет методы для классов
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  //event.target.classList.remove("hovered");
  event.target.append(item);
}
