// Wykorzystując asynchroniczną funkcję getNum (używającą pomocniczej funkcji getRand):

const getRand = () => {
  return Math.floor(Math.random() * 1000);
};

const getNum = (cb) => {
  setTimeout(() => {
    cb(getRand());
  }, getRand() * 5);
};

// zdefiniuj funkcje, która równolegle uruchamia dim-kopii funkcji getNum, a otrzymane wyniki (liczby) sortuje malejąco i tak otrzymaną tablicę zwraca jako wynik końcowy.
const arrayDimKopii = [];
const asyncSort = (dim) => {
  const help = (arr) => arr;

  if (arrayDimKopii.length < dim) {
    for (let i = 0; i < dim; i++) {
      getNum(res => {
        arrayDimKopii.push(res);
        // console.log(arrayDimKopii);
        if (arrayDimKopii.length === dim) help(arrayDimKopii.sort());
      });
    }
  }


};
asyncSort(3);


// W rozwiązaniu nie używaj mechanizmu async/await ani Promise'ów.