import { canvas, gridSize } from "./canvas";

export const correctPosition = (self) => {
  if (self.gridX < 0) {
    self.gridX += 1;
  }
  if (self.gridY < 0) {
    self.gridY += 1;
  }
  if (self.gridX > canvas.width) {
    self.gridX -= 1;
  }
  if (self.gridY > canvas.height) {
    self.gridY -= 1;
  }
};

const isSpaceFree = (whichPosition, self, all) => {
  let placeIsFree = true;
  switch (whichPosition) {
    case "xPlus":
      all.forEach((instance) => {
        if (
          instance.gridX === self.gridX + 1 &&
          instance.gridY === self.gridY
        ) {
          placeIsFree = false;
        }
      });
      if (self.gridX + 1 > gridSize / Math.sqrt(gridSize) - 1) {
        placeIsFree = false;
      }
      break;
    case "xMinus":
      all.forEach((instance) => {
        if (
          instance.gridX === self.gridX - 1 &&
          instance.gridY === self.gridY
        ) {
          placeIsFree = false;
        }
      });
      if (self.gridX - 1 < 0) {
        placeIsFree = false;
      }
      break;

    case "yPlus":
      all.forEach((instance) => {
        if (
          instance.gridX === self.gridX &&
          instance.gridY === self.gridY + 1
        ) {
          placeIsFree = false;
        }
      });
      if (self.gridY + 1 > gridSize / Math.sqrt(gridSize) - 1) {
        placeIsFree = false;
      }
      break;

    case "yMinus":
      all.forEach((instance) => {
        if (
          instance.gridX === self.gridX &&
          instance.gridY === self.gridY - 1
        ) {
          placeIsFree = false;
        }
      });
      if (self.gridY - 1 < 0) {
        placeIsFree = false;
      }
      break;
  }

  return placeIsFree;
};

export const followEnemy = (self, target, all) => {
  const tx = target.gridX;
  const ty = target.gridY;
  const sx = self.gridX;
  const sy = self.gridY;
  const diffX = Math.abs(tx - sx);
  const diffY = Math.abs(ty - sy);

  let moved = false;

  if (diffX >= diffY) {
    if (sx < tx) {
      if (isSpaceFree("xPlus", self, all)) {
        self.gridX = sx + 1;
        moved = true;
      }
    } else {
      if (isSpaceFree("xMinus", self, all)) {
        self.gridX = sx - 1;
        moved = true;
      }
    }
  } else {
    if (sy < ty) {
      if (isSpaceFree("yPlus", self, all)) {
        self.gridY = sy + 1;
        moved = true;
      }
    } else {
      if (isSpaceFree("yMinus", self, all)) {
        self.gridY = sy - 1;
        moved = true;
      }
    }
  }

  if (!moved) {
    let randomDirection = getRandomDirection();
    while (!isSpaceFree(randomDirection, self, all)) {
      randomDirection = getRandomDirection();
    }

    self.gridX +=
      randomDirection === "xPlus" ? 1 : randomDirection === "xMinus" ? -1 : 0;
    self.gridY +=
      randomDirection === "yPlus" ? 1 : randomDirection === "yMinus" ? -1 : 0;
  }
};

const getRandomDirection = () => {
  const directions = ["xPlus", "xMinus", "yPlus", "yMinus"];
  const randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
};

export const Attack = (self, target, all) => {
  let targetPushed = false;
  if (!self.hasAttacked) {
    if (self.gridX === target.gridX && self.gridY < target.gridY) {
      if (isSpaceFree("yPlus", target, all)) {
        target.gridY += 1;
        targetPushed = true;
      }
    } else if (self.gridX === target.gridX && self.gridY > target.gridY) {
      if (isSpaceFree("yMinus", target, all)) {
        target.gridY -= 1;
        targetPushed = true;
      }
    } else if (self.gridY === target.gridY && self.gridX < target.gridX) {
      if (isSpaceFree("xPlus", target, all)) {
        target.gridX += 1;
        targetPushed = true;
      }
    } else if (self.gridY === target.gridY && self.gridX > target.gridX) {
      if (isSpaceFree("yMinus", target, all)) {
        target.gridX -= 1;
        targetPushed = true;
      }
    }
    if (!targetPushed) {
      const directions = ["xPlus", "xMinus", "yPlus", "yMinus"];
      for (let i = 0; i < directions.length; i++) {
        if (isSpaceFree(directions[i], target, all)) {
          target.gridX +=
            directions[i] === "xPlus" ? 1 : directions[i] === "xMinus" ? -1 : 0;
          target.gridY +=
            directions[i] === "yPlus" ? 1 : directions[i] === "yMinus" ? -1 : 0;
          break;
        }
      }
    }
    self.hasAttacked = true;
  }
};

export const canAttack = (coolDown) => {
  return coolDown <= 0;
};

export const findTarget = (self, opponentList) => {
  let closestTarget = null;
  opponentList.forEach((player) => {
    if (
      closestTarget === null ||
      closestTarget.gridX < Math.abs(player.gridX - self.gridX)
    ) {
      closestTarget = player;
    }
  });
  return closestTarget;
};

export const isNextToEnemy = (self, target) => {
  const diffX = Math.abs(target.gridX - self.gridX);
  const diffY = Math.abs(target.gridY - self.gridY);
  const isTrue = (diffX === 1 && diffY === 0) || (diffX === 0 && diffY === 1);
  return (diffX === 1 && diffY === 0) || (diffX === 0 && diffY === 1);
};

export default {
  correctPosition,
  Attack,
  canAttack,
  followEnemy,
  findTarget,
  isNextToEnemy,
};
