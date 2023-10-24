import { canvas } from "./canvas";
import { squareSize } from "./draw";

export const correctPosition = (self) => {
  if (self.positionX <= 0 || self.positionY <= 0) {
    self.positionX += 1;
    self.positionY += 1;
  }
  if (self.positionX > canvas.width || self.positionY > canvas.height) {
    self.positionX -= 1;
    self.positionY -= 1;
  }
};

export const isTooCloseFromAlly = (self, allies) => {
  const safeDistance = 30;

  for (const ally of allies) {
    if (ally !== self) {
      const deltaX = self.positionX - ally.positionX;
      const deltaY = self.positionY - ally.positionY;
      const distance = Math.floor(Math.sqrt(deltaX * deltaX + deltaY * deltaY));
      console.log(distance);
      if (distance < safeDistance) {
        console.log(ally);
        return ally;
      }
    }
  }

  return null;
};

export const moveAwayFromAlly = (self, ally) => {
  console.log("movingaway");
  const safeDistance = 30;

  const deltaX = self.positionX - ally.positionX;
  const deltaY = self.positionY - ally.positionY;
  const distance = Math.floor(Math.sqrt(deltaX * deltaX + deltaY * deltaY));
  console.log(distance);
  console.log(deltaX + " x");
  console.log(deltaY + " y");
  if (distance < safeDistance) {
    if (distance < safeDistance) {
      if (deltaX <= 0) {
        console.log(deltaX + " deltaX");
        self.positionX -= 1;
      } else {
        self.positionX += 1;
      }
      if (deltaY <= 0) {
        console.log(deltaY + " deltaY");
        self.positionY -= 1;
      } else {
        self.positionY += 1;
      }
    }
  }
};

export const Attack = (self, target) => {
  if (target.positionX <= self.positionX) {
    target.positionX -= 10;
  } else {
    target.positionX += 10;
  }

  if (target.positionY <= self.positionY) {
    target.positionY -= 10;
  } else {
    target.positionY += 10;
  }
};

export const canAttack = (self) => {
  return self.coolDown <= 0;
};

export const followEnemy = (self, target) => {
  if (target.positionX + 10 < self.positionX) {
    self.positionX -= 1;
  } else {
    self.positionX += 1;
  }
  if (target.positionY + 10 < self.positionY) {
    self.positionY -= 1;
  } else {
    self.positionY += 1;
  }
};

export const findTarget = (self, opponentList) => {
  let closestTarget = null;
  opponentList.forEach((player) => {
    if (
      closestTarget === null ||
      closestTarget.positionX < Math.abs(player.positionX - self.positionX)
    ) {
      closestTarget = player;
    }
  });
  return closestTarget;
};

export const isNextToEnemy = (self, target) => {
  if (
    target.positionX < self.positionX + squareSize &&
    target.positionX + squareSize > self.positionX &&
    target.positionY < self.positionY + squareSize &&
    target.positionY + squareSize > self.positionY
  ) {
    return true;
  }
};

export default {
  correctPosition,
  isTooCloseFromAlly,
  moveAwayFromAlly,
  Attack,
  canAttack,
  followEnemy,
  findTarget,
  isNextToEnemy,
};
