import * as ai from "../utils/aiFunctions";
import {
  drawSquare,
  drawCircle,
  drawTriangle,
  drawCross,
} from "../utils/draw.js";
import * as canv from "../utils/canvas.js";
/* import { conditionParser } from "../utils/conditions.js";
import { actionParser } from "../utils/actions.js"; */

class Player {
  constructor(name, job, gridX, gridY, coolDown) {
    this.name = name;
    this.job = job;
    this.gridX = gridX;
    this.gridY = gridY;
    this.coolDown = coolDown;
  }
  sprite() {
    const x =
      this.gridX * (canv.cellSize * canv.cellSpacing) + canv.cellSize / 2;
    const y =
      this.gridY * (canv.cellSize * canv.cellSpacing) + canv.cellSize / 2;
    switch (this.job) {
      case "warrior":
        drawTriangle(x, y, "blue");
        break;
      case "mage":
        drawCircle(x, y, "blue");
        break;
      case "archer":
        drawCross(x, y, "blue");
        break;
      default:
        drawSquare(x, y, "blue");
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

  /*   evaluate(player, enemies, target, subject) {
    if (conditionParser(this.condition, subject)) {
      actionParser(this.action);
    }
  } */
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
