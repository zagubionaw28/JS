// Napisz funkcję, która zwraca trzy najczęściej występujące słowa we wszystkich pytaniach, wraz z liczbą ich wystąpień. Możesz założyć, że słowa są oddzielone spacjami i występują tylko w treści pytania, a nie w innych polach. Rozwiązanie nie może opierać się na użyciu funkcji forEach(), ani na użyciu zewnętrznych bibliotek lub pakietów. Pamiętaj, aby utworzyć brakujące typy.

// Fragment kodu do uzupełnienia
// import { questionsChatGpt } from "./data/questions-chat-gpt";
const _ = require('lodash');
const questions = require('./questions-chat-gpt.js').questionsChatGpt;

// function topThreeWords(questionsChatGpt) {
//   // const three = questionsChatGpt.reduce((acc, curr) => {

//   // }, []);
// }

// const topThree = topThreeWords(questions);
// console.log(topThree);

// Oczekiwany output
[
  { word: 'Jakie', count: 18 },
  { word: 'są', count: 18 },
  { word: 'najlepsze', count: 17 }
];

const array = [
  { word: 'Jakie ludzie mają pomysły są czy nie są słonice', count: 18 },
  { word: 'są to słonice polskie', count: 18 },
  { word: 'najlepsze polskie sandały ale że Jakie?', count: 17 }
];

// console.log(array[0].word.split(' '));
const reducing = array.reduce((acc, curr) => {
  return [...acc, ...curr.word.split(' ')];
}, [])
.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(reducing);

// const three = reducing.reduce((acc, curr) => {
//   acc[curr] = reducing.reduce((acc2, curr2) => {
//     if (curr === curr2) {
//       acc2 = acc2 + 1;
//     } return acc2;
//   }, 0);
//   return acc;
// }, {});

const three = reducing.reduce((acc, curr) => {
  return [...acc, {
    word: curr,
    count: reducing.reduce((acc2, curr2) => {
          if (curr === curr2) {
            acc2 = acc2 + 1;
          } return acc2;
        }, 0)
  }];
}, []);

console.log(three);

const maxFirst = three.reduce((acc, curr) => {
  return [...acc, curr.count];
}, []).sort((a, b) => {
  return a > b ? -1 : 1;
});
console.log(maxFirst);

// const uniqueArray = _.uniqBy(three, 'word', 'count');
// console.log(uniqueArray);
const result = three.reduce((acc, curr) => {
  if (curr.count === maxFirst[0]) return [...acc, curr];
  if (curr.count === maxFirst[1]) return [...acc, curr];
  if (curr.count === maxFirst[2]) return [...acc, curr];
  return acc;
}, []);

console.log(result);

// testuje

const array2 = [1, 2, 3, 4, 2, 3, 5, 1, 6];

// Użycie metody filter() i indexOf() do odrzucenia powtarzających się elementów
// const uniqueArray = three.filter((value, index, arr) => {
//   return arr.indexOf(value) === index;
// });

// console.log(uniqueArray);
// Output: [1, 2, 3, 4, 5, 6]