// W pliku series.js znajduje się lista seriali. Wykorzystując jedynie programowanie funkcyjne i jedynie funkcje wbudowane takie jak: reduce, sort, filter i push stwórz dwa obiekty miniseries i series, gdzie:

//     miniseries będzie tablicą zawierającą tylko miniseriale (jednosezonowe), posortowane alfabetycznie. Każdy z miniseriali powinien zawierać wyłącznie name, year i type. (Miniseriale rok rozpoczęcia i zakończenia mają taki sam)
//     series będzie trzyelementową tablicą tablic zawierającą seriale (bez miniseriali), gdzie:
//         pierwsza tablica będzie zawierała seriale rozpoczęte przed rokiem 2010
//         druga tablica będzie zawierała seriale rozpocząte między 2010 (włącznie) a 2020 rokiem
//         trzecia tablica będzie zawierała tablice rozpoczęte po 2020 (włącznie)

// Dodatkowo:

//     Seriale powinny być posortowane latami, od najstarszego tzn. wg roku rozpoczęcia, a następnie wg. roku zakończenia (jeśli serial nie ma roku zakończenia, to powinien wyświetlić się przed serialami, które rok zakończenia mają).
//     Gatunek powinien być zapisany jako string, nie jako tablica stringów:

//     ["Dramat", "Wojenny"] => "Dramat, Wojenny"

//     Między kolejnymi gatunkami, po przecinku znajduje się spacja.
//     Jeżeli serial nie ma roku zakończenia, to nie wyświetlamy go (tj. roku zakończenia) w obiekcie.


const series = require('./series.js').series;

const miniseries = series.reduce((acc, curr) => {
  if (curr.seasons === 1) {
    return [...acc, {
      name: curr.name,
      type: curr.type,
      year: curr.startYear
    }];
  }
  return acc;
}, []).sort((a, b) => {
  return (a.name > b.name) ? 1 : -1;
});

console.log(miniseries);
// // Output miniseries
// [
//   { name: "Czarnobyl", type: "Dramat", year: 2019 },
//   { name: "Gambit królowej", type: "Dramat", year: 2020 },
//   { name: "Kompania braci", type: "Dramat, Wojenny", year: 2001 },
//   { name: "Pacyfik", type: "Dramat, Wojenny", year: 2010 },
// ];

const maxseries = series.reduce((acc, curr) => {
  if (curr.seasons !== 1) {
    if (curr.startYear < 2010) {
      acc[0].push(curr);
    } else if (curr.startYear >= 2010 && curr.startYear <= 2020) {
      acc[1].push(curr);
    } else acc[2].push(curr);
  }
  return acc;
}, [[], [], []]);

const result = maxseries.reduce((acc, curr) => {
  return [...acc, curr.sort((a, b) => {
    if (a.startYear > b.startYear) {
      return 1;
    } else if (a.startYear === b.startYear) {
      if (b.endYear === null && a.endYear === null) {
        return 0;
      } else if (a.endYear === null && b.endYear !== null) {
        return -1;
      } else if (a.endYear !== null && b.endYear === null) {
        return 1;
      } else {
        if (b.endYear >= a.endYear) {
          return -1;
        } else {
          return 1;
        }
      }
    } else return -1;
  })];
}, []);

console.dir(result, { depth: null });
// // Output series
// [
//   [
//     // ...
//   ],
//   [
//     // ...
//     {
//       id: 14,
//       name: "Rick i Morty",
//       startYear: 2013,
//       type: "Komedia, Przygodowy, Sci-Fi, Animacja dla dorosłych",
//       seasons: 9,
//     },
//     {
//       id: 11,
//       name: "House of Cards",
//       startYear: 2013,
//       endYear: 2018,
//       type: "Dramat, Polityczny",
//       seasons: 6,
//     },
//     // ...
//   ],
//   [
//     // ...
//   ],
// ];