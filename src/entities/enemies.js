import * as ai from "../utils/aiFunctions.js";
import {
  drawSquare,
  drawCircle,
  drawTriangle,
  drawCross,
  squareSize,
} from "../utils/draw.js";

//Variables
let target = null;

class Enemy {
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
        drawTriangle(this.positionX, this.positionY, "red");
        break;
      case "mage":
        drawCircle(this.positionX, this.positionY, "red");
        break;
      case "archer":
        drawCross(this.positionX, this.positionY, "red");
        break;
      default:
        drawSquare(this.positionX, this.positionY, "red");
        break;
    }
  }
}

//States
const STATE_FIND_ENEMY = "FIND";
const STATE_FOLLOW_ENEMY = "FOLLOW";
const STATE_ATTACK_ENEMY = "ATTACK";
const STATE_ENGAGE_ENEMY = "ENGAGE";
let currentState = STATE_FIND_ENEMY;

function updateEnemyBehavior(self, playersList, allies) {
  ai.correctPosition(self);
  self.sprite();
  if (self.coolDown > 0) {
    self.coolDown--;
  }
  console.log(currentState);
  switch (currentState) {
    case STATE_FIND_ENEMY:
      const playerTargetted = ai.findTarget(self, playersList);
      if (playerTargetted) {
        target = playerTargetted;
        currentState = STATE_FOLLOW_ENEMY;
      } else {
        currentState = STATE_FIND_ENEMY;
      }
      break;
    case STATE_FOLLOW_ENEMY:
      if (target) {
        if (!ai.canAttack(self)) {
          if (
            Math.abs(target.positionX - self.positionX) >= 50 ||
            Math.abs(target.positionY - self.positionY) >= 50
          ) {
            const allyWhichIsTooClose = ai.isTooCloseFromAlly(self, allies);
            console.log(allyWhichIsTooClose);
            if (allyWhichIsTooClose !== null) {
              console.log("too close");
              ai.moveAwayFromAlly(self, allyWhichIsTooClose);
            } else {
              ai.followEnemy(self, target);
            }
          }
        }
        if (ai.canAttack(self)) {
          currentState = STATE_ENGAGE_ENEMY;
        }
      } else {
        currentState = STATE_FIND_ENEMY;
      }
      break;
    case STATE_ENGAGE_ENEMY:
      if (!ai.isNextToEnemy(self, target)) {
        const allyWhichIsTooClose = ai.isTooCloseFromAlly(self, allies);
        console.log(allyWhichIsTooClose);
        if (allyWhichIsTooClose !== null) {
          console.log("too close");
          ai.moveAwayFromAlly(self, allyWhichIsTooClose);
        } else {
          ai.followEnemy(self, target);
        }
      } else {
        currentState = STATE_ATTACK_ENEMY;
      }
      break;
    case STATE_ATTACK_ENEMY:
      if (ai.canAttack(self)) {
        ai.Attack(self, target);
        self.coolDown = 100;
      } else {
        currentState = STATE_FOLLOW_ENEMY;
      }
      break;
  }
}

export { Enemy, updateEnemyBehavior };
