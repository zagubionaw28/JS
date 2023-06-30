class Creature {
  constructor(name, age, gender, energy, mood) {
    this.name = name;
    if (age >= 0) {
      this.age = age;
    }
    this.gender = gender;
    if (energy >= 0 && energy <= 10) {
      this.energy = energy;
    } else {
      this.energy = 5;
    }
    if (typeof mood === String) {
      this.mood = mood;
    } else {
      this.mood = "relaxed";
    }
  }
}


class Person extends Creature {
  constructor(name, age, gender, energy, mood) {
    super(name, age, gender, energy, mood);
  }
}

class Animal extends Creature {
  constructor(name, age, gender, energy, mood, type) {
    super(name, age, gender, energy, mood);
    this.type = type;
  }

  eat() {
    this.energy = this.energy + 2;
    console.log(`${this.name} is eating!`);
  }

  drink() {
    this.energy = this.energy + 2;
    console.log(`${this.name} is drinking!`);
  }

  run() {
    this.energy = this.energy - 2;
    this.mood = "happy";
    console.log(`${this.name} is running!`);
  }

  sleep() {
    if (this.energy <= 5) {
      this.energy = this.energy + 5;
    } else this.energy = 10;
    console.log(`${this.name} is go to sleep!`);
  }
}

class Child extends Person {
  constructor(name, age, gender, energy, mood, happiness) {
    super(name, age, gender, energy, mood);
    // this.happieness = happieness;
    if (happiness <= 10 && happiness >= 0) {
      this.happiness = happiness;
    }
  }

  learn() {
    this.energy = this.energy - 1;
    console.log(`${this.name} is learning!`);
  }

  play() {
    this.energy = this.energy - 1;
    console.log(`${this.name} is playing!`);
    if (this.happiness !== 10) {
      this.happiness = this.happiness + 1;
    } else this.happiness;
    this.mood = "happy";
  }

  sleep() {
    console.log(`${this.name} is sleeping!`);
    if (this.energy <= 5) {
      this.energy = this.energy + 5;
    } else this.energy = 10;
  }
}

class Adult extends Person {
  constructor(name, age, gender, energy, mood) {
    super(name, age, gender, energy, mood);
  }

  work() {
    console.log(`${this.name} is working!`);
    this.energy = this.energy - 1;
    this.mood = "tired";
  }

  rest() {
    console.log(`${this.name} has a rest!`);
    this.mood = "relaxed";
  }

  cook() {
    console.log(`${this.name} is cooking!`);
  }

  eat() {
    console.log(`${this.name} is eating!`);
  }
}

const creature1 = new Creature("Artur", 19, "mężczyzna");
console.log(creature1);

const child1 = new Child("Adam", 11, "mężczyzna", 5, 7, 8);
// console.log(child1);
// child1.learn();
// console.log(child1);
// child1.play();
// console.log(child1);
child1.sleep();
console.log(child1);

const adult1 = new Adult("Paweł", 20, "mężczyzna", 6);

adult1.work();
adult1.rest();
adult1.cook();
adult1.eat();
console.log(adult1);

const animal1 = new Animal("Kowalski", 25, "mężczyzna", 5, "fascinated", "penguin");

animal1.eat();
animal1.sleep();
console.log(animal1);


