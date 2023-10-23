import { Enemy, updateEnemyBehavior } from "./entities/enemies.js";
import { Player, updatePlayerBehavior } from "./entities/player.js";

import { canvas, ctx } from "./utils/canvas.js";

let playerX = 300;
let playerY = 200;
let enemyX = 300;
let enemyY = 500;

let playerCharacterOne = new Player("mage", playerX, playerY);
let enemyOne = new Enemy("archer", enemyX, enemyY);
console.log(playerCharacterOne);

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  playerCharacterOne.sprite();

  updatePlayerBehavior(playerCharacterOne, enemyOne);
  updateEnemyBehavior(enemyOne, playerCharacterOne);

  requestAnimationFrame(gameLoop);
}

gameLoop();
