import * as ai from "../utils/aiFunctions";
import {
  drawSquare,
  drawCircle,
  drawTriangle,
  drawCross,
  squareSize,
} from "../utils/draw.js";
import { conditionParser } from "../utils/conditions.js";
import { actionParser } from "../utils/actions.js";
import { canvas } from "../utils/canvas.js";

class Player {
  constructor(name, job, positionX, positionY, coolDown) {
    this.name = name;
    this.job = job;
    this.positionX = positionX;
    this.positionY = positionY;
    this.coolDown = coolDown;
  }
  sprite() {
    switch (this.job) {
      case "warrior":
        drawTriangle(this.positionX, this.positionY, "blue");
        break;
      case "mage":
        drawCircle(this.positionX, this.positionY, "blue");
        break;
      case "archer":
        drawCross(this.positionX, this.positionY, "blue");
        break;
      default:
        drawSquare(this.positionX, this.positionY, "blue");
        break;
    }
  }
}

class Gambit {
  constructor(player, subject, condition, action, target) {
    this.subject = subject;
    this.condition = condition;
    this.action = action;
    this.target = target;
    this.player = player;
  }

  evaluate(player, enemies, target, subject) {
    if (conditionParser(this.condition, subject)) {
      actionParser(this.action);
    }
  }
}

const gambitContainers = document.querySelectorAll(".gambit-container");
const gambits = [];

gambitContainers.forEach((container, index) => {
  const subjectSelect = container.querySelector(`#subject${index}`);
  const conditionSelect = container.querySelector(`#condition${index}`);
  const actionSelect = container.querySelector(`#action${index}`);
  const targetSelect = container.querySelector(`#target${index}`);

  const subject = subjectSelect.value;
  const condition = conditionSelect.value;
  const action = actionSelect.value;
  const target = targetSelect.value;

  const newGambit = new Gambit(subject, condition, action, target);

  gambits.push(newGambit);
});

console.log(gambits);

function updatePlayerBehavior(self, enemies) {
  ai.correctPosition(self);
  self.sprite();
  if (self.coolDown === 0) {
    for (const gambit of gambits) {
      gambit.evaluate(self, enemies);
    }
  } else {
    self.coolDown--;
  }
}

export { Player, updatePlayerBehavior };
