import { Orc } from "./Orc.js";
import { Knight } from "./Knight.js";
import { DarkElf } from "./DarkElf.js";


const orc1 = new Orc(0, 1);
const orc2 = new Orc(1, 1);
const knight = new Knight(2, 2);
const darkElf = new DarkElf(3,3)

console.log('!!! Fight started !!!');

while (
  (orc1.isAlive() || orc2.isAlive())
  && knight.isAlive()
  ) {

  knight.attack(orc1.isAlive() ? orc1 : orc2);

  orc2.isAlive() && orc2.attack(knight);
  orc1.isAlive() && orc1.attack(knight);

  darkElf.isAlive() && darkElf.attack(knight)
}


console.log("Orc1", orc1);
console.log("Orc2", orc2);
console.log("Knight", knight);
console.log("DarkElf", darkElf);

console.log('!!! Fight ended !!!');