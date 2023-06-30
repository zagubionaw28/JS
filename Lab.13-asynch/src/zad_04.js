// Napisz funkcję:

const connect = (funTab, fun) => {
  Promise.all(funTab).then((res) => {
  const result = res.reduce((acc, curr) => {
      return [...acc, [curr, fun(curr)]];
    }, []);
    if (result.lentgh === funTab.lentgh) console.log(result);
  });
 };

 function func1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Love");
      res(1);
    }, 2000);
  });
}

function func2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("You");
      res(2);
    }, 1000);
  });
}

function cb(res) {
  return res + 1;
}

connect([func1(), func2()], cb);

// spełaniającą poniższe warunki:

//     Pierwszym argumentem funkcji connect jest tablica funkcji asynchronicznych, zwracających wartość liczbową.
//     Drugim argumentem connect jest funkcja asynchroniczna, której jedynym argumentem jest wartość liczbowa, a wynikiem również wartość liczbowa.
//     Funkcja connect powinna zapewnić, że wszystkie funkcje przekazane w parametrze funTab będą wykonywać się „równolegle”.
//     Funkcja connect powinna zwracać pogrupowane wyniki w formacie:

//     [
//       [ wyn_1, fun(wyn_1) ],
//       [ wyn_2, fun(wyn_2) ],
//       [ wyn_3, fun(wyn_3) ],
//       [ wyn_4, fun(wyn_4) ],
//       [ wyn_5, fun(wyn_5) ],
//       // ....
//     ]

//     gdzie wyn_i oznacza funTab[i]().
