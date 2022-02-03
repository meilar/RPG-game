import { prototype } from "dotenv-webpack";

class Character {
  constructor(name) {
    this.level = 1;
    this.name = name
  }
}

export default class SpaceMarine extends Character {
  constructor (name)  {
    super(name);
    this.hitPoints = 20;
    this.defense = 3;
    this.dodge = 25; //percentage chance to completely dodge an incoming attack
    this.atkDmg = 5;
  }
} 
