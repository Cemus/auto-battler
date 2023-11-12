import { ctx } from "./canvas";

const squareSize = 30;

function drawSquare(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, squareSize, squareSize);
}

function drawTriangle(x, y, color) {
  const triangleSize = 16;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y - triangleSize);
  ctx.lineTo(x + triangleSize, y + triangleSize);
  ctx.lineTo(x - triangleSize, y + triangleSize);
  ctx.closePath();
  ctx.fill();
}

function drawCross(x, y, color) {
  const crossSize = 12;
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x - crossSize, y - crossSize);
  ctx.lineTo(x + crossSize, y + crossSize);
  ctx.moveTo(x - crossSize, y + crossSize);
  ctx.lineTo(x + crossSize, y - crossSize);
  ctx.stroke();
}

function drawCircle(x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  let radius = 16;
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

export { drawSquare, drawTriangle, drawCross, drawCircle, squareSize };
