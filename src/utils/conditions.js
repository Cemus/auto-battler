function conditionParser(condition, subject) {
  switch (condition) {
    case "HP > 50%":
      return ifHPUnder50(subject);

    case "enemies nearby":
      return areEnemiesNearby(subject, enemies);
      sub;
  }
}

const ifHPUnder50 = (subject) => {
  console.log("hi");
  return true;
};

const areEnemiesNearby = (subject, enemies) => {
  //
};

export { conditionParser, ifHPUnder50 };
