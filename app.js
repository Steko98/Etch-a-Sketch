let numberOfDivs = 16;
const container = document.getElementById("container");
const submitButton = document.getElementById("submit-button");

function randomRgb() {
  return (
    "rgba(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")"
  );
}

function colorOnHover(item) {
  item.style.backgroundColor = randomRgb();
}

function clearGrid() {
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}

function createGrid(num) {
  for (let i = 0; i < num * num; i++) {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    box.style.width = `${400 / num}px`;
    box.style.height = `${400 / num}px`;
    box.addEventListener("mouseover", () => {
      colorOnHover(box);
    });
    container.appendChild(box);
  }
  return;
}

createGrid(numberOfDivs);

submitButton.addEventListener("click", (event) => {
  numberOfDivs = document.getElementById("quantity").value;
  if (numberOfDivs > 100) {
    alert("You cannot generate more than a 100 squares per side");
    return;
  }
  event.preventDefault();
  clearGrid();
  createGrid(numberOfDivs);
});
