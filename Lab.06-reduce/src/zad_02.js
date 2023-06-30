// Pobierz plik ships.js, a następnie wykorzystując programowanie funkcyjne (i funkcję reduce) uzupełnij poniższe rozwiązanie tak, aby:

// - W outpucie uwzględniamy tylko obiekty, które nie zostały zniszczone.
// - Kluczem każdego z obiektów w obiekcie powinna być wartość manufacturer.
// - Pod każdym kluczem manufacturer powinna znajdować się tablica statków.
// - Każdy statek powinien być obiektem zawierającym wysokość statku i maksymalną prędkość.

const ships = require('./ships.js').shipsArray;

const result = ships.reduce((acc, curr) => {
  if (curr.destroyed !== true) {
    const key = curr.manufacturer;
    acc[key] = acc[key] || [];
    acc[key] = ships.reduce((acc2, curr2) => {
      if (curr2.manufacturer === curr.manufacturer) {
        return [...acc2, {[curr2.model]: {height: curr2.height, maximumSpeed: curr2.maximumSpeed}}];
      } return acc2;
    }, []);
  }
  return acc;
}, {});

console.dir(result, { depth: null });

// Oczekiwany output:
// {
//   'Corellian Engineering':
//     { 'Millenium Falcon': { height: 7.8, maximumSpeed: 1200 } }
//   ],
//   'Sienar Fleet Systems': [
//     { 'Tie Fighter': { height: 7.5, maximumSpeed: 1200 } },
//     { 'Lambda class T-4a shuttle': { height: 120, maximumSpeed: 850 } }
//   ],
//   'Kuat Drive Yards': [
//     { 'Executor Star Dreadnought': { height: 345, maximumSpeed: 60000 } },
//     { 'Venator Star Destroyer': { height: 268, maximumSpeed: 975000 } }
//   ],
//   // ...
// }