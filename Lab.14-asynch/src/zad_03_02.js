// Napisz funkcję:

// taką, że:

//     pierwszym argumentem jest tablica funkcji asynchronicznych – załóż, że funkcje te muszą być przygotowane na przyjęcie argumentu n, z którego korzysta funkcja poKolei
//     funkcja poKolei powinna zapewnić, że następna funkcja np. fun2 wykona się zawsze po poprzedniej np. fun1, a wyniki wygenerowane przez fun1 zostaną przekazane do fun2.
//     trzecim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez ostatnią funkcję w tablicy

const poKolei = (funTab, cb) => (n) => {
  return funTab
  .reduce((acc, curr) => {
    return acc.then((res) => curr(res));
  }, Promise.resolve(n))
  .then((res) => cb(res));
 };

function func1(n) {
  return new Promise((res) => {
    setTimeout(() => {
      res(n);
    }, 2000);
  });
}

function func2(n) {
  return new Promise((res) => {
    setTimeout(() => {
      res(n + 1);
    }, 2000);
  });
}

function func3(n) {
  return new Promise((res) => {
    setTimeout(() => {
      res(n + 1);
    }, 2000);
  });
}

function cb(res) {
  console.log(res);
}

poKolei([func1, func2, func3], cb)(1);
