/** @jest-environment jsdom */
import { findTarget } from "../src/entities/enemies";

const enemy = { positionX: 101, positionY: 101 };
const jean = { positionX: 100, positionY: 100 };
const pierre = { positionX: 1, positionY: 1 };
const playersList = [jean, pierre];

test("Censé trouvé une cible", () => {
  expect(findTarget(enemy, playersList).toBe(jean));
});
