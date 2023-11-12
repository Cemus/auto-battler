import { updateEnemyBehavior } from "./enemies.js";
import { playersList, enemiesList } from "./charactersCreation.js";
import "./styles/style.css";
import { canvas, createGrid, ctx } from "./canvas.js";

let currentPlayerIndex = 0;
function nextPlayer() {
  currentPlayerIndex++;
  if (currentPlayerIndex >= enemiesList.length) {
    currentPlayerIndex = 0;
  }
  enemiesList[currentPlayerIndex].hasAttacked = false;
}
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  createGrid(ctx);
  if (currentPlayerIndex < enemiesList.length) {
    const currentPlayer = enemiesList[currentPlayerIndex];
    playersList.forEach((player) => {
      if (player !== currentPlayer) {
        player.sprite();
      }
    });
    enemiesList.forEach((enemy) => {
      if (enemy !== currentPlayer) {
        enemy.sprite();
      }
    });
    updateEnemyBehavior(currentPlayer, playersList, enemiesList, nextPlayer);
  } else {
    currentPlayerIndex = 0;
  }

  setTimeout(() => {
    requestAnimationFrame(gameLoop);
  }, 60);
}

gameLoop();
