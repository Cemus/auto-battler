import { Player } from "../entities/player.js";
import { Enemy } from "../entities/enemies";

const playersList = [];
const enemiesList = [];

let playerChar1 = new Player("Jean", "mage", 25, 25, 100);
let playerChar2 = new Player("Jean", "mage", 50, 50, 100);
let playerChar3 = new Player("Jean", "mage", 10, 10, 100);
let enemyChar1 = new Enemy("Méchant archer", "archer", 10, 10, 546);
let enemyChar2 = new Enemy("Méchant mage", "mage", 10, 10, 456);
let enemyChar3 = new Enemy("Méchant mage", "mage", 10, 10, 258);

playersList.push(playerChar1, playerChar2, playerChar3);
enemiesList.push(enemyChar1, enemyChar2, enemyChar3);

export { playersList, enemiesList };
