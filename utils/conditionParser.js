export default function conditionparser(condition) {
  switch (condition) {
    case "HP > 50%":
      return ifHPUnder50;
  }
}
