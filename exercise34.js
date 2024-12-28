/* 


[Exercise] Subclassing Monsters
Question
Now that you have a monster created, create a subclass of the Monster called Snake.

The Snake should have a bite method. The only argument to this method is another instance of a Snake.
The instance of Snake that is passed in should have their health deducated by 10.
*/

(() => {
  class Monster {
    constructor(name, level, power) {
      this.health = 100;
      this.name = name;
      this.level = level;
      this.power = power;
    }
  }

  class Snake extends Monster {
    bite(target) {
      target.health -= 10;
    }
  }

  const newMonster = new Monster("Octosaurus Max", "Intermediate", "Claws");

  const newSnake = new Snake("Fierce", "difficult", "teeth");
  newSnake.bite(newMonster);
  console.log(newSnake);
  console.log(newMonster);
})();
