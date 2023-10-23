import {
  drawSquare,
  drawCircle,
  drawTriangle,
  drawCross,
  squareSize,
} from "../utils/draw.js";
import conditionParser from "../utils/conditionParser.js";
import { ctx } from "../utils/canvas.js";

class Player {
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

class Gambit {
  constructor(condition, action) {
    this.condition = condition;
    this.action = action;
  }

  evaluate(player, enemies) {
    if (this.condition(player, enemies)) {
      this.action(player, enemies);
    }
  }
}

const gambitContainers = document.querySelectorAll(".gambit-container");
const gambits = [];

gambitContainers.forEach((container, index) => {
  console.log(container);
  const conditionSelect = container.querySelector(`#condition${index}`);
  const actionSelect = container.querySelector(`#action${index}`);

  const condition = conditionParser(conditionSelect.value);
  const action = actionSelect.value;

  const newGambit = new Gambit(condition, action);
  console.log(newGambit);
  gambits.push(newGambit);
});

console.log(gambits);

// Conditions
const isPlayerNearby = (player, enemies) => {
  return (
    Math.abs(player.positionX - enemies.positionX) <= 50 &&
    Math.abs(player.positionY - enemies.positionY) <= 50
  );
};

const canAttack = (player) => {
  return player.coolDown <= 0;
};

// Actions
const followEnemy = (player, enemies) => {
  if (player.positionX < enemies.positionX) {
    player.positionX += 1;
  } else {
    player.positionX -= 1;
  }

  if (player.positionY < enemies.positionY) {
    player.positionY += 1;
  } else {
    player.positionY -= 1;
  }
};

const attack = (player, enemies) => {
  if (canAttack(player) && isPlayerNearby(player, enemies)) {
    if (player.positionX < enemies.positionX) {
      enemies.positionX -= 10;
    } else {
      enemies.positionX += 10;
    }

    if (player.positionY < enemies.positionY) {
      enemies.positionY -= 10;
    } else {
      enemies.positionY += 10;
    }

    player.coolDown = 100;
  }
};

function updatePlayerBehavior(player, enemies) {
  for (const gambit of gambits) {
    gambit.evaluate(player, enemies);
  }

  if (player.coolDown > 0) {
    player.coolDown--;
  }
}

export { Player, updatePlayerBehavior };
