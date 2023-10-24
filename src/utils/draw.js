import { ctx } from "../utils/canvas";

const squareSize = 30;

function drawSquare(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, squareSize, squareSize);
}

function drawTriangle(x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 20, y + 40);
  ctx.lineTo(x - 20, y + 40);
  ctx.closePath();
  ctx.fill();
}

function drawCross(x, y, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x - 10, y - 10);
  ctx.lineTo(x + 10, y + 10);
  ctx.moveTo(x - 10, y + 10);
  ctx.lineTo(x + 10, y - 10);
  ctx.stroke();
}

function drawCircle(x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  let radius = 15;
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

export { drawSquare, drawTriangle, drawCross, drawCircle, squareSize };
