import { Player } from "../entities/player.js";
import { Enemy } from "../entities/enemies.js";

const playersList = [];
const enemiesList = [];

const enemiesStats = {
  atk: 5,
  def: 5,
  spd: 20,
};

const enemiesStats2 = {
  atk: 5,
  def: 5,
  spd: 50,
};
const enemiesStats3 = {
  atk: 5,
  def: 5,
  spd: 70,
};

let playerChar1 = new Player("Jean", "mage", 1, 2, 100);
let playerChar2 = new Player("Jean", "mage", 2, 4, 100);
let playerChar3 = new Player("Jean", "mage", 5, 6, 100);
let enemyChar1 = new Enemy(
  "Méchant archer",
  "archer",
  5,
  4,
  enemiesStats,
  false
);
let enemyChar2 = new Enemy(
  "Méchant mage",
  "mage",
  3,
  5,
  enemiesStats,
  false,
  false
);
let enemyChar3 = new Enemy(
  "Méchant warrior",
  "warrior",
  2,
  3,
  enemiesStats3,
  false,
  false
);

playersList.push(playerChar1);
enemiesList.push(enemyChar1, enemyChar2, enemyChar3);

export { playersList, enemiesList };
