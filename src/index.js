import { updateEnemyBehavior } from "./entities/enemies.js";
import { updatePlayerBehavior } from "./entities/player.js";
import { playersList, enemiesList } from "./utils/charactersCreation.js";
import "./styles/style.css";
import { canvas, ctx } from "./utils/canvas.js";

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  playersList.forEach((player) => {
    updatePlayerBehavior(player, enemiesList, playersList);
  });

  enemiesList.forEach((enemy) => {
    updateEnemyBehavior(enemy, playersList, enemiesList);
  });

  requestAnimationFrame(gameLoop);
}

gameLoop();
