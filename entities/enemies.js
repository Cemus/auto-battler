import {
  drawSquare,
  drawCircle,
  drawTriangle,
  drawCross,
  squareSize,
} from "../utils/draw.js";
import { ctx } from "../utils/canvas.js";
let coolDown = 100;
let canAttack = false;

class Enemy {
  constructor(job, positionX, positionY) {
    this.job = job;
    this.positionX = positionX;
    this.positionY = positionY;
  }
  sprite() {
    switch (this.job) {
      case "warrior":
        drawTriangle(ctx, this.positionX, this.positionY, "blue");
        break;
      case "mage":
        drawCircle(ctx, this.positionX, this.positionY, "blue");
        break;
      case "archer":
        drawCross(ctx, this.positionX, this.positionY, "blue");
        break;
      default:
        drawSquare(ctx, this.positionX, this.positionY, "blue");
        break;
    }
  }
}

//States
const STATE_FOLLOW_ENEMY = "FOLLOW_ENEMY";
const STATE_ATTACK = "ATTACK";
let currentState = STATE_FOLLOW_ENEMY;

function followEnemy(enemy, player) {
  if (player.positionX < enemy.positionX) {
    enemy.positionX -= 1;
  } else {
    enemy.positionX += 1;
  }
  if (player.positionY < enemy.positionY) {
    enemy.positionY -= 1;
  } else {
    enemy.positionY += 1;
  }
}

function isNextToEnemy(enemy, player) {
  if (
    player.positionX < enemy.positionX + squareSize &&
    player.positionX + squareSize > enemy.positionX &&
    player.positionY < enemy.positionY + squareSize &&
    player.positionY + squareSize > enemy.positionY
  ) {
    return true;
  }
}

function updateEnemyBehavior(enemy, player) {
  drawSquare(ctx, enemy.positionX, enemy.positionY, "black");
  //Cooldown
  if (coolDown <= 0) {
    canAttack = true;
  } else {
    canAttack = false;
    coolDown--;
  }
  switch (currentState) {
    case STATE_FOLLOW_ENEMY:
      if (canAttack === false) {
        if (Math.abs(player.positionX - enemy.positionX) >= 50) {
          followEnemy(enemy, player);
        }

        if (Math.abs(player.positionY - enemy.positionY) >= 50) {
          followEnemy(enemy, player);
        }
      }
      if (canAttack === true) {
        currentState = STATE_ATTACK;
      }
      break;
    case STATE_ATTACK:
      if (!isNextToEnemy(enemy, player)) {
        followEnemy(enemy, player);
      }
      Attack(enemy, player);
      currentState = STATE_FOLLOW_ENEMY;
      coolDown = 100;
      break;
  }
}

function Attack(enemy, player) {
  if (player.positionX < enemy.positionX) {
    player.positionX -= 10;
  } else {
    player.positionX += 10;
  }

  if (player.positionY < enemy.positionY) {
    player.positionX -= 10;
  } else {
    player.positionX += 10;
  }
}

export { Enemy, updateEnemyBehavior, Attack };
