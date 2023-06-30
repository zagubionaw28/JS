class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  diff(vector) {
    this.x = this.x - vector;
    this.y = this.y - vector;
  }

  multiplyBy(number) {
    return this.x * this.y * number;
  }

  toString() {
    console.log(`x: ${this.x} y: ${this.y}`);
  }
}

class Ship extends Vector2 {
  constructor(faction, position, strength, health) {
    super(position);
    this.faction = faction;
    this.strength = strength;
    this.health = health;
  }

  getDistance(enemyShip) {
    if (enemyShip.position - this.position >= 0) {
      enemyShip.x - this.x;
      enemyShip.y - this.y;
    } else if (this.position - enemyShip.position >= 0) {
      this.x - enemyShip.x;
      this.y - enemyShip.y;
    } else {
      console.log("Nie da się obliczyć dystansu pomiędzy tymi statkami");
    }
  }

  checkHealth() {
    if (this.health < 0) {
      console.log("Statek został zniszczony");
    }
  }

  getDamage(amount) {
    this.health = this.health - amount;
    this.checkHealth();
  }

  makeDamage(enemyShip) {
    enemyShip.health = enemyShip.health - this.strength;
  }
}

class RebelShip extends Ship {
  constructor(position, strength, health) {
    super(position, strength, health);
    this.faction = "Rebel Allicance";
  }

  hyperspeed() {
    this.position = undefined;
  }
}

class DeathStar extends Ship {
  constructor(position) {
    super(position);
    this.faction = "Empire";
    this.deathRayAvailable = true;
  }

  makeDamage(enemyShip) {
    return new Promise((resolve, reject) => {
      if (this.deathRayAvailable === true) {
        this.makeDamage(enemyShip);
        this.deathRayAvailable = false;
        setTimeout(() => {
          this.deathRayAvailable = true;
          resolve(true);
        }, 5000);
      } else {
        reject("Promień gwiazdy śmierci jest niedostępny");
      }
    });
  }
}

const statekRebeli = new RebelShip((3, 4), 8, 10);
const gwiazdaSmierci = new DeathStar(5, 5);

gwiazdaSmierci.makeDamage(statekRebeli).catch((error) => console.log(error));
