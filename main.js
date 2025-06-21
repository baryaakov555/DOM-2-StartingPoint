// Please feel free to change the JS as you see fit! This is just a starting point.

const colorDropdown = document.getElementById("color-select");
const fillButton = document.getElementById("fill-grid");

let selectedColor = colorDropdown.value;

colorDropdown.addEventListener("change", () => {
  selectedColor = colorDropdown.value;
})



const root = document.getElementById("root");
root.addEventListener("click", (event) => { 
  if (event.target.tagName === "TD") {
    event.target.style.backgroundColor = selectedColor;
  }
});

const removeBtm = document.getElementById("remove-row");
removeBtm.addEventListener("click", removeButton);

//checks if there is any rows and if there are rows greater then 0 then remove one row

function removeButton() {
  const amountOfRows = document.getElementsByTagName("TR").length;
  lastrow = document.getElementsByTagName("TR")[amountOfRows - 1];
  lastrow.remove();

  //checks if there is any rows and if there are rows greater then 0 then remove one row
}

const removeCol = document.getElementById("remove-column");
removeCol.addEventListener("click", removecolums);

function removecolums() {
  const rows = document.getElementsByTagName("tr"); //acess the file rows frist
  for (let i = 0; i < rows.length; i++) {
    // use go for to go through the rows
    const cells = rows[i].getElementsByTagName("td"); //for the crrent row i find all the cells inside that row
    if (cells.length > 0) {
      //if there any cells at all
      rows[i].removeChild(cells[cells.length - 1]); //that row/parent will go remove a cell because its tr/row and parent has a
      // method to remove child/cell and we need to use to remove the child/row .removechild
    }
  }
}

fillButton.addEventListener('click', () => {
  const cells = document.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = selectedColor;
  }
})


const addRow = document.getElementById("add-row");

addRow.addEventListener("click", () =>
{
  const nmberOfColumns = document.getElementsByTagName("TR")[0].children.length;
  
  const newRow = document.createElement("TR");
  document.getElementsByTagName("tbody")[0].appendChild(newRow);

  for (let i = 0; i < nmberOfColumns; i++)
  {
    const newCell = document.createElement("TD");
    newRow.appendChild(newCell);
  }
});

const fillUncoloredCells = document.getElementById("fill-uncolored-cells");

fillUncoloredCells.addEventListener("click", () =>
{
    const cells = document.getElementsByTagName("TD").length;

    for (let i = 0; i < cells; i++)
    {
      const currentCell = document.getElementsByTagName("TD")[i];
      if (!currentCell.style.backgroundColor)
      {
        currentCell.style.backgroundColor = currentColor.value
      }
    }
});

const clearAllCells = document.getElementById("clear-grid");

clearAllCells.addEventListener("click", () =>
{
  const cells = document.getElementsByTagName("TD").length;

  for (let i = 0; i < cells; i++)
  {
    const currentCell = document.getElementsByTagName("TD")[i];
    currentCell.style.backgroundColor = "";
  }
});
