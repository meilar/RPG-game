import SpaceMarine from './../src/space-marine.js';

describe('SpaceMarine', () => {

  
  // beforeEach(() => {

  // });

  test('SpaceMarine constructor() should correctly set properties to specified default values', () => {
    
    let spaceMar = new SpaceMarine();
    let hitpoints = spaceMar.hitPoints;
    let def = spaceMar.defense;
    let dodge = spaceMar.dodge;
    let attackDamage = spaceMar.atkDmg

    expect(hitpoints).toEqual(20);
    expect(def).toEqual(3);
    expect(dodge).toEqual(25);
    expect(attackDamage).toEqual(5);
  });      
  
  // test('levelUp() method should increase property values inside SpaceMarine() constructor', () =>{
  //   spaceMar.levelUp(hpGain, defGain, dodgeGain, atkGain);
  //   expect(hitpoints).toEqual(20);
  //   expect(def).toEqual(3);
  //   expect(dodge).toEqual(25);
  //   expect(attackDamage).toEqual(5);
  // });
});