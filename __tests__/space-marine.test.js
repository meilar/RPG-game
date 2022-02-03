import SpaceMarine from '../src/js/space-marine.js';

describe('SpaceMarine', () => {
let spaceMar;
let hitpoints;
let def;
let dodge;
let attackDamage;
  
  beforeEach(() => {
    spaceMar = new SpaceMarine;
    hitpoints = spaceMar.hitPoints;
    def = spaceMar.defense;
    dodge = spaceMar.dodge;
    attackDamage = spaceMar.atkDmg;
  });

  test('SpaceMarine constructor() should correctly set properties to specified default values', () => {
    expect(hitpoints).toEqual(20);
    expect(def).toEqual(3);
    expect(dodge).toEqual(25);
    expect(attackDamage).toEqual(5);
  });      
  
  test('levelUp() method should increase property values inside SpaceMarine() constructor', () =>{
    spaceMar.levelUp();
    expect(hitpoints).toEqual(20);
    expect(def).toEqual(3);
    expect(dodge).toEqual(25);
    expect(attackDamage).toEqual(5);
  });
});