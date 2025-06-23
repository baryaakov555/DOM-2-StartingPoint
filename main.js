// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

const button = document.getElementById("add-column");

button.addEventListener("click", () => {
  const rows = document.querySelectorAll("table tr");
  rows.forEach(row => {
    const newCell = document.createElement("td");
    row.appendChild(newCell);
  });
});

const clearGridButton = document.getElementById("clear-grid");

clearGridButton.addEventListener("click", () => {
  const allCells = document.querySelectorAll("td");
  allCells.forEach(cell => {
    cell.style.backgroundColor = ""; 
  });
});

const cells = document.querySelectorAll("td");

let isMouseDown = false;
const colorSelect = document.getElementById("color-select");

cells.forEach(cell => {
  cell.addEventListener("mousedown", () => {
    isMouseDown = true;
    cell.style.backgroundColor = colorSelect.value;
  });

  cell.addEventListener("mouseover", () => {
    if (isMouseDown) {
      cell.style.backgroundColor = colorSelect.value;
    }
  });

  cell.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});



