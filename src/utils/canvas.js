const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 512;
canvas.height = 512;
const numCols = 8;
const numRows = 8;
const cellSize = 64;
const gridSize = numCols * numRows;
const cellSpacing = 1;

const createGrid = (ctx) => {
  const cellColor = "black";
  ctx.strokeStyle = "white";

  for (let i = 0; i <= numCols; i++) {
    ctx.beginPath();
    ctx.moveTo(i * cellSize, 0);
    ctx.lineTo(i * cellSize, numRows * cellSize);
    ctx.stroke();
  }

  for (let i = 0; i <= numRows; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * cellSize);
    ctx.lineTo(numCols * cellSize, i * cellSize);
    ctx.stroke();
  }

  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      ctx.fillStyle = cellColor;
      ctx.fillRect(
        col * cellSize + cellSpacing,
        row * cellSize + cellSpacing,
        cellSize - 2 * cellSpacing,
        cellSize - 2 * cellSpacing
      );
    }
  }
};

export {
  canvas,
  ctx,
  createGrid,
  gridSize,
  numCols,
  numRows,
  cellSize,
  cellSpacing,
};
