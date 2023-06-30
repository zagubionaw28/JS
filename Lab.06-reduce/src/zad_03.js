// Pobierz plik ships.js, a następnie wykorzystując zawarte w nim dane, zwróć stringa zawierającego wypisane osoby z podziałem na statki, w jakich są załogą oraz manufacturer tego statku. W swoim rozwiązaniu użyj jedynie funkcji wbudowanych, a sam obiekt powinien zostać wygenerowany za pomocą reduce.

const ships = require('./ships.js').shipsArray;

const names = ships.reduce((acc, curr) => {
  return [...acc, ...curr.crew.reduce((acc2, curr2) => {
    return [...acc2, curr2];
  }, [])];
}, []);
console.log(names);

const reducing = names.reduce((acc, curr) => {
  const key = curr;
  acc[key] = acc[key] || [];
  acc[key] = ships.reduce((acc2, curr2) => {
    return [...acc2, ...curr2.crew.reduce((acc3, curr3) => {
      if (curr === curr3) {
        return [...acc3, `${curr2.model}, manufacturer: ${curr2.manufacturer}`];
      }
      return acc3;
    }, [])];
  }, []);
  return acc;
}, {});

console.log(reducing);

const result = Object.keys(reducing).reduce((acc, curr, i) => {
  return `${acc}\n${curr}\n${Object.values(reducing).reduce((acc2, curr2, j) => {
    if (i === j) {
      return `${acc2}${curr2.reduce((acc3, curr3, o) => {
        return `${acc3}${o+1}. ${curr3}\n`;
      }, "")}`;
    } return acc2;
  }, "")}`;
}, "");

console.log(result);
// // Oczekiwany output
// Han Solo
// 1. Millenium Falcon, manufacturer: Corellian Engineering
// 2. A-Wing, manufacturer: Kuat Systems Engineering
// 3. Tantive IV, manufacturer: Corellian Engineering Corporation

// Chewbacca
// 1. Millenium Falcon, manufacturer: Corellian Engineering

// Luke Skywalker
// 1. Millenium Falcon, manufacturer: Corellian Engineering
// 2. X-Wing, manufacturer: Incom Corporation

// Darth Vader
// 1. Tie Fighter, manufacturer: Sienar Fleet Systems
// 2. Executor Star Dreadnought, manufacturer: Kuat Drive Yards
// 3. Victory Star Destroyer, manufacturer: Sienar Fleet Systems
// 4. Lambda class T-4a shuttle, manufacturer: Sienar Fleet Systems

// // ...
