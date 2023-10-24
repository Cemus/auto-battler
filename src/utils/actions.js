function actionParser(player, action, target) {
  switch (action) {
    case "attack":
      return attack(player, target);

    case "defend":
      return defend(player);

    case "heal":
      return heal(player, target);
  }
}

const isClosedToEnemy = (subject, target) => {
  return (
    Math.abs(subject.positionX - target.positionX) <= 50 &&
    Math.abs(subject.positionY - target.positionY) <= 50
  );
};

const heal = (player, target) => {
  console.log(`je heal ${target} ^^`);
};

const defend = (player) => {
  console.log("je defends lol");
};

const canAttack = (player) => {
  console.log("puis-je attaquer ?");
  return player.coolDown <= 0;
};

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
  if (canAttack(player) && isClosedToEnemy(player, enemies)) {
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
  } else {
    followEnemy(enemies);
  }
};

export { actionParser };
