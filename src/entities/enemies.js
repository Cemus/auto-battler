import * as ai from "../utils/aiFunctions.js";
import {
  drawSquare,
  drawCircle,
  drawTriangle,
  drawCross,
} from "../utils/draw.js";

//Variables
let target = null;
let coolDown = 100;

class Enemy {
  constructor(name, job, gridX, gridY, stats, hasMoved, hasAttacked) {
    this.name = name;
    this.job = job;
    this.gridX = gridX;
    this.gridY = gridY;
    this.stats = stats;
    this.hasMoved = hasMoved;
    this.hasAttacked = hasAttacked;
  }
  sprite() {
    const cellSize = 64;
    const cellSpacing = 1;
    const x = this.gridX * (cellSize + cellSpacing) + cellSize / 2;
    const y = this.gridY * (cellSize + cellSpacing) + cellSize / 2;
    switch (this.job) {
      case "warrior":
        drawTriangle(x, y, "red");
        break;
      case "mage":
        drawCircle(x, y, "red");
        break;
      case "archer":
        drawCross(x, y, "red");
        break;
      default:
        drawSquare(x, y, "red");
        break;
    }
  }
}

//States
const STATE_FIND = "FIND";
const STATE_IDLE = "IDLE";
const STATE_ATTACK = "ATTACK";
const STATE_ENGAGE = "ENGAGE";
let currentState = STATE_IDLE;

function updateEnemyBehavior(self, playersList, allies, nextPlayer) {
  ai.correctPosition(self);
  if (coolDown > 0) {
    coolDown -= self.stats.spd;
  }
  let all = [...playersList, ...allies];
  /*   console.log(self, currentState); */
  switch (currentState) {
    case STATE_IDLE:
      if (self.hasAttacked === false) {
        currentState = STATE_ENGAGE;
      } else {
        nextPlayer();
      }
      break;
    case STATE_FIND:
      const playerTargetted = ai.findTarget(self, playersList);
      if (playerTargetted) {
        target = playerTargetted;
        currentState = STATE_IDLE;
      } else {
        currentState = STATE_FIND;
      }
      break;
    case STATE_ENGAGE:
      if (target) {
        if (!ai.canAttack(self)) {
          if (!ai.isNextToEnemy(self, target)) {
            if (self.hasMoved === false) {
              self.hasMoved = true;
              ai.aStar(self, target, all);
            }
          } else {
            currentState = STATE_ATTACK;
          }
        }
      } else {
        currentState = STATE_FIND;
      }
      break;
    case STATE_ATTACK:
      if (ai.canAttack(coolDown)) {
        ai.Attack(self, target, all);
        coolDown = 100;
        currentState = STATE_IDLE;
      } else {
        currentState = STATE_IDLE;
      }
      break;
  }

  self.sprite();
}

export { Enemy, updateEnemyBehavior };
