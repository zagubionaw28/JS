// Napisz funkcję:

const grupuj = (funTab1, funTab2, cb) => {
  Promise.all([Promise.all(funTab1), Promise.all(funTab2)]).then(([res1, res2]) => {
    const help = (res, tab) => {
      if (res > 0) tab.push(0);
      else {
        res--;
        help(res, tab);
      }
    };
    if (res1.length < res2.length) help(res2.length - res1.length, res1);
    else if (res1.length > res2.length) help(res1.length - res2.length, res2);
    const result = res1.reduce((acc, curr, i) => {
      return [...acc, res2.reduce((acc2, curr2, j) => {
        if (i === j) {
          return [curr, curr2];
        }
        return acc2;
      }, [])];
    }, []);
    cb(result);
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

function func11() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Artur <3");
      res(11);
    }, 500);
  });
}
function func12() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Remember this");
      res(12);
    }, 1000);
  });
}

function cb(res) {
  console.log(res);
}

grupuj([func1(), func2()], [func11(), func12()], cb);
// spełaniającą poniższe warunki:

//     Dwoma pierwszymi argumentami funkcji grupuj są tablice funkcji asynchronicznych zwracające wartość liczbową.
//     Funkcja grupuj powinna zapewnić, że wszystkie funkcje z obu tablic będą wykonywać się „równolegle”.
//     Funkcja grupuj powinna wywoływać funkcję cb, która przyjmuje jako parametr pogrupowane wyniki z wszystkich funkcji w formacie:

//     [
//       [ wynik_funkcji_1_z_funTab1, wynik_funkcji_1_z_funTab2 ],
//       [ wynik_funkcji_2_z_funTab1, wynik_funkcji_2_z_funTab2 ],
//       [ wynik_funkcji_3_z_funTab1, wynik_funkcji_3_z_funTab2 ],
//       [ wynik_funkcji_4_z_funTab1, wynik_funkcji_4_z_funTab2 ],
//       [ wynik_funkcji_5_z_funTab1, wynik_funkcji_5_z_funTab2 ],
//       // ...
//     ]

//     i drukuje je w konsoli w dowolny sposób.
//     Jeżeli liczba funkcji w obu tablicach nie jest równa, to funkcja grupuj powinna uzupełniać brakujące wyniki wartością 0.
