class Tile {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  getTileInfo() {
    console.log(`${this.x} ${this.y} ${this.type}`);
  }
}

class Grid{
  constructor() {
    this.array = [];
  }

  generate(height, width) {
    this.height = height;
    this.width = width;
    let wiersz = [];
    for (let i = 0; i < height; i++) {
      // console.log(wiersz);
      for (let j = 0; j < width; j++) {
        // wiersz.push(`x: ${j+1}, y: ${i+1}, `);
        wiersz.push( new Tile(j+1, i+1, ["LAND", "WATER", "ICE"][Math.floor(Math.random() * ["LAND", "WATER", "ICE"].length)]));
      }
      this.array.push(wiersz);
      wiersz = [];
    }
    // console.log(this.array); --------------------------
    // console.log(this.array);
  }

  generatePredefined(height, width, predefinedTile) {
    this.height = height;
    this.width = width;
    let wiersz = [];
    for (let i = 0; i < height; i++) {
      // console.log(wiersz);
      for (let j = 0; j < width; j++) {
        // wiersz.push(`x: ${j+1}, y: ${i+1}, `);
        if ((predefinedTile.length !== 0)&&(predefinedTile[0].x === j+1)&&(predefinedTile[0].y === i+1)) {
          wiersz.push(predefinedTile[0]);
          predefinedTile = predefinedTile.slice(1);
        } else {
          wiersz.push( new Tile(j+1, i+1, ["LAND", "WATER", "ICE"][Math.floor(Math.random() * ["LAND", "WATER", "ICE"].length)]));
        }
      }
      this.array.push(wiersz);
      wiersz = [];
    }
    // console.log(this.array); ------------------
  }

  getTile(x, y){
      this.x = x;
      this.y = y;
    // if (this.array[0].x === x) {

    // }
    for (let i=0; i<this.height; i++) {
      for (let j=0; j<this.width; j++) {
        if (this.array[i][j].x === x && this.array[i][j].y === y) {
          return this.array[i][j];
        }
      }
    }
    return null;
  }
}

class Ship {
  constructor(x, y, direction, grid){
    this.direction = direction;
    this.x = x;
    this.y = y;
    this.grid = grid;
    if (this.grid.ships === undefined){
      this.grid.ships = [];
    }
    if (this.grid.array[y-1][x-1].type === "WATER"){
      this.grid.ships.push(this);
    } else {
      console.log("błąd");
    }
  }

  turn(leftRight){
    if (leftRight === "P") {
      console.log("Statek obrócony o 90 st. w prawo");
      if (this.direction === "E") {
        this.direction = "S";
      } else if (this.direction === "S") {
        this.direction = "W";
      } else if (this.direction === "W") {
        this.direction = "N";
      } else this.direction = "E";
    } else {
      console.log("Statek obrócony o 90 st. w lewo");
      if (this.direction === "E") {
        this.direction = "N";
      } else if (this.direction === "N") {
        this.direction = "W";
      } else if (this.direction === "W") {
        this.direction = "S";
      } else this.direction = "E";
    }
  }

  sail(){
    // szukanie statków w tablicy
    const indexShip = this.grid.ships.findIndex((element) => element === this);
    // rozpatrzenie wszystkich przypadków przesunięć
    if (this.direction === "N"){
      if (this.y === 1) console.log("Statek napotkał koniec planszy");
      else if (this.grid.array[this.y - 2][this.x - 1].type === "ICE") console.log("Statek napotkał lód, pozostał w miejscu");
      else if (this.grid.array[this.y - 2][this.x - 1].type === "LAND") console.log("Statek napotkał na ląd, pozostał w miejscu");
      else {
        let czyNaTymMiejscuStoiStatek = false;
        //czy na miejscu gdzie chcemy się poruszyć stoi inny statek
        // console.log(this.grid.ships);
        let otherShip = undefined;
        for (let i = 0; i < this.grid.ships.length; i++) {
          otherShip = this.grid.ships[i];
          if (otherShip.x === this.x && otherShip.y === this.y - 1) {
            czyNaTymMiejscuStoiStatek = true;
            console.log("Statek trafił na inną łódź");
          }
        }
        if (!czyNaTymMiejscuStoiStatek){
          this.y = this.y - 1;
          this.grid.ships[indexShip] = this;
          console.log("Statek przemieścił się na północ");
        }
      }
    } else if (this.direction === "E") {
      if (this.x === this.grid.width) console.log("Statek napotkał koniec planszy");
      else if (this.grid.array[this.y - 1][this.x].type === "ICE") console.log("Statek napotkał lód, pozostał w miejscu");
      else if (this.grid.array[this.y - 1][this.x].type === "LAND") console.log("Statek napotkał na ląd, pozostał w miejscu");
      else {
        let czyNaTymMiejscuStoiStatek = false;
        //czy na miejscu gdzie chcemy się poruszyć stoi inny statek
        // console.log(this.grid.ships);
        let otherShip = undefined;
        for (let i = 0; i < this.grid.ships.length; i++) {
          otherShip = this.grid.ships[i];
          if (otherShip.x === this.x + 1 && otherShip.y === this.y) {
            czyNaTymMiejscuStoiStatek = true;
            console.log("Statek trafił na inną łódź");
          }
        }
        if (!czyNaTymMiejscuStoiStatek){
          this.x = this.x + 1;
          this.grid.ships[indexShip] = this;
          console.log("Statek przemieścił się na wschód");
        }
      }
    } else if (this.direction === "S") {
      if (this.y === this.grid.height) console.log("Statek napotkał koniec planszy");
      else if (this.grid.array[this.y][this.x - 1].type === "ICE") console.log("Statek napotkał lód, pozostał w miejscu");
      else if (this.grid.array[this.y][this.x - 1].type === "LAND") console.log("Statek napotkał na ląd, pozostał w miejscu");
      else {
        let czyNaTymMiejscuStoiStatek = false;
        //czy na miejscu gdzie chcemy się poruszyć stoi inny statek
        // console.log(this.grid.ships);
        let otherShip = undefined;
        for (let i = 0; i < this.grid.ships.length; i++) {
          otherShip = this.grid.ships[i];
          if (otherShip.x === this.x && otherShip.y === this.y + 1) {
            czyNaTymMiejscuStoiStatek = true;
            console.log("Statek trafił na inną łódź");
          }
        }
        if (!czyNaTymMiejscuStoiStatek){
          this.y = this.y + 1;
          this.grid.ships[indexShip] = this;
          console.log("Statek przemieścił się na południe");
        }
      }
    } else {
      if (this.x === 1) console.log("Statek napotkał koniec planszy");
      else if (this.grid.array[this.y - 1][this.x - 2].type === "ICE") console.log("Statek napotkał lód, pozostał w miejscu");
      else if (this.grid.array[this.y - 1][this.x - 2].type === "LAND") console.log("Statek napotkał na ląd, pozostał w miejscu");
      else {
        let czyNaTymMiejscuStoiStatek = false;
        //czy na miejscu gdzie chcemy się poruszyć stoi inny statek
        // console.log(this.grid.ships);
        let otherShip = undefined;
        for (let i = 0; i < this.grid.ships.length; i++) {
          otherShip = this.grid.ships[i];
          if (otherShip.x === this.x - 1 && otherShip.y === this.y) {
            czyNaTymMiejscuStoiStatek = true;
            console.log("Statek trafił na inną łódź");
          }
        }
        if (!czyNaTymMiejscuStoiStatek){
          this.x = this.x - 1;
          this.grid.ships[indexShip] = this;
          console.log("Statek przemieścił się na zachód");
        }
      }
    }
    // console.log(this.grid.array);
  }

  getShipInfo() {
    console.log(`kierunek: ${this.direction}, koordynaty: x: ${this.x}, y: ${this.y}`);
  }
}

class IcebreakerShip extends Ship {
  constructor(x, y, grid){
    super(x, y, "N", grid);
    if (this.grid.ships === undefined){
      this.grid.ships = [];
    }
    if (this.grid.array[y-1][x-1].type === "WATER"){
      this.grid.ships.push(this);
    } else {
      console.log("błąd");
    }
  }

  turn() {
     // console.log(this.grid);
     if (this.direction === "N") {
      console.log("Statek obrócił się o 180 st. na południe");
      this.direction = "S";
     } else if (this.direction === "E") {
      console.log("Statek obrócił się o 180 st. na zachód");
      this.direction = "W";
     } else if (this.direction === "S") {
      console.log("Statek obrócił się o 180 st. na północ");
      this.direction = "N";
     } else {
      console.log("Statek obrócił się o 180 st. na wschód");
      this.direction = "E";
     }
  }

  sail() {

    const indexShip = this.grid.ships.findIndex((element) => element === this);

    if (this.direction === "N"){
      if (this.y === 1) console.log("Statek napotkał koniec planszy");
      else if (this.grid.array[this.y - 2][this.x - 1].type === "LAND") {
        console.log("Statek napotkał na ląd, pozostał w miejscu");
        super.turn("P");
      } else {
        let czyNaTymMiejscuStoiStatek = false;
        //czy na miejscu gdzie chcemy się poruszyć stoi inny statek
        // console.log(this.grid.ships);
        let otherShip = undefined;
        for (let i = 0; i < this.grid.ships.length; i++) {
          otherShip = this.grid.ships[i];
          if (otherShip.x === this.x && otherShip.y === this.y - 1) {
            czyNaTymMiejscuStoiStatek = true;
            console.log("Statek trafił na inną łódź");
          }
        }
        if (!czyNaTymMiejscuStoiStatek){
          if (this.grid.array[this.y - 2][this.x - 1].type === "ICE") {
            console.log("Statek napotkał lądolód, przedarł się przez niego");
          }
          this.y = this.y - 1;
          this.grid.ships[indexShip] = this;
          console.log("Statek przemieścił się na północ");
        }
      }
    } else if (this.direction === "E") {
      if (this.x === this.grid.width) console.log("Statek napotkał koniec planszy");
      else if (this.grid.array[this.y - 1][this.x].type === "LAND") {
        console.log("Statek napotkał na ląd, pozostał w miejscu");
        super.turn("P");
      } else {
        let czyNaTymMiejscuStoiStatek = false;
        //czy na miejscu gdzie chcemy się poruszyć stoi inny statek
        // console.log(this.grid.ships);
        let otherShip = undefined;
        for (let i = 0; i < this.grid.ships.length; i++) {
          otherShip = this.grid.ships[i];
          if (otherShip.x === this.x + 1 && otherShip.y === this.y) {
            czyNaTymMiejscuStoiStatek = true;
            console.log("Statek trafił na inną łódź");
          }
        }
        if (!czyNaTymMiejscuStoiStatek){
          if (this.grid.array[this.y - 1][this.x].type === "ICE") {
            console.log("Statek napotkał lądolód, przedarł się przez niego");
          }
          this.x = this.x + 1;
          this.grid.ships[indexShip] = this;
          console.log("Statek przemieścił się na wschód");
        }
      }
    } else if (this.direction === "S") {
      if (this.y === this.grid.height) console.log("Statek napotkał koniec planszy");
      else if (this.grid.array[this.y][this.x - 1].type === "LAND") {
        console.log("Statek napotkał lód, pozostał w miejscu");
        super.turn("P");
      } else {
        let czyNaTymMiejscuStoiStatek = false;
        //czy na miejscu gdzie chcemy się poruszyć stoi inny statek
        // console.log(this.grid.ships);
        let otherShip = undefined;
        for (let i = 0; i < this.grid.ships.length; i++) {
          otherShip = this.grid.ships[i];
          if (otherShip.x === this.x && otherShip.y === this.y + 1) {
            czyNaTymMiejscuStoiStatek = true;
            console.log("Statek trafił na inną łódź");
          }
        }
        if (!czyNaTymMiejscuStoiStatek){
          if (this.grid.array[this.y][this.x - 1].type === "ICE") {
            console.log("Statek napotkał lądolód, przedarł się przez niego");
          }
          this.y = this.y + 1;
          this.grid.ships[indexShip] = this;
          console.log("Statek przemieścił się na południe");
        }
      }
    } else {
      if (this.x === 1) console.log("Statek napotkał koniec planszy");
      else if (this.grid.array[this.y - 1][this.x - 2].type === "LAND") {
        console.log("Statek napotkał na ląd, pozostał w miejscu");
        super.turn("P");
      } else {
        let czyNaTymMiejscuStoiStatek = false;
        //czy na miejscu gdzie chcemy się poruszyć stoi inny statek
        // console.log(this.grid.ships);
        let otherShip = undefined;
        for (let i = 0; i < this.grid.ships.length; i++) {
          otherShip = this.grid.ships[i];
          if (otherShip.x === this.x - 1 && otherShip.y === this.y) {
            czyNaTymMiejscuStoiStatek = true;
            console.log("Statek trafił na inną łódź");
          }
        }
        if (!czyNaTymMiejscuStoiStatek){
          if (this.grid.array[this.y - 1][this.x - 2].type === "ICE") {
            console.log("Statek napotkał lądolód, przedarł się przez niego");
          }
          this.x = this.x - 1;
          this.grid.ships[indexShip] = this;
          console.log("Statek przemieścił się na zachód");
        }
      }
    }
  }

  printGrid() {
    console.log(this.grid.array);
    const result = this.grid.array.reduce(
      (acc, curr) => {
        return [...acc, curr.reduce(
          (acc2, curr2) => {
            if (curr2.type === "WATER") {
              acc2.push("~");
            } else if (curr2.type === "LAND") {
              acc2.push("o");
            } else acc2.push("x");
            return acc2;
          }, []
        )];
      }, []
    );
    this.grid.ships.reduce(
      (_, curr) => {
        // console.log(curr);
        result[curr.y][curr.x] = curr.direction;
        return _;
      }, []
    );
    // console.log(result);
    const result2 = result.reduce(
      (acc, curr) => {
        return `${acc} ${curr.join(" ")} \n`;
      }, ""
    );
    console.log(result2);
  }
}

// Funkcja losująca typ kafelka:
const types = ["LAND", "WATER", "ICE"];

const itemType = types[Math.floor(Math.random() * types.length)];

const result = new Tile(7, 6, itemType);
// const result2 = new Grid(7, 6);
result.getTileInfo();
// result2.generate(2, 3, itemType);
// console.log(result);

// Przykład użycia:
const grid = new Grid();
// grid.generate(10, 10); // generuje planszę o wymiarach 10 x 10
// console.log(grid.getTile(2, 2).getTileInfo());// 2,2 LAND
// grid.generate(10, 5); // na nowo generuje planszę o wymiarach 10 x 5

const predefTiles = [
  // najpierw porządkujemy po y, a potem po x
  new Tile(1, 2, "LAND"),
  new Tile(2, 2, "WATER"),
  new Tile(3, 2, "LAND"),
  new Tile(2, 3, "LAND"),
  new Tile(4, 3, "LAND"),
  new Tile(1, 4, "LAND"),
  new Tile(2, 4, "WATER"),
  new Tile(3, 4, "LAND"),
];

grid.generatePredefined(5, 5, predefTiles);
grid.getTile(2, 2).getTileInfo();// 2,2 WATER
// console.log(grid);
// const ship2 = new Ship(2, 2, "N", grid);
const ship = new Ship(2, 4, "E", grid);
// const ship2 = new Ship(1, 2, "N", grid); // błąd

// ship.turn("P"); // Statek obrócony o 90 st. w prawo
// console.log(ship);
ship.sail();
ship.sail();
ship.sail();
ship.sail();
ship.sail();

ship.getShipInfo();


const iceShip = new IcebreakerShip(2, 1, grid);

iceShip.turn();
iceShip.turn();
// console.log(ship);

// Przykład użycia:
const icebreaker = new IcebreakerShip(3, 3, grid);
console.log(icebreaker.getShipInfo());
icebreaker.sail(); // Statek napotkał lądolód, przedarł się przez niego
console.log(icebreaker.getShipInfo()); // "N", 3,6
icebreaker.sail();
console.log(icebreaker.getShipInfo());
icebreaker.sail();
console.log(icebreaker.getShipInfo());
icebreaker.printGrid();
