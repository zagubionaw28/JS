// Napisz funkcję:

const razemTab = (funTab, cb) => {
  const funtab = funTab.map((el) => el());
  Promise.all(funtab).then(res => {
    cb(res);
  });
 };

function func1() {
  return new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 2000);
  });
}

function func2() {
  return new Promise((res) => {
    setTimeout(() => {
      res(2);
    }, 2000);
  });
}

function func3() {
  return new Promise((res) => {
    setTimeout(() => {
      res(3);
    }, 2000);
  });
}

function cb(res) {
  console.log(res);
}
razemTab([func1, func2, func3], cb);
// taką, że:

//     pierwszym argumentem jest tablica funkcji asynchronicznych
//     funkcja razemTab powinna zapewnić, że wszystkie funkcje będą wykonywać się „równolegle”, a wyniki przez nie wygenerowane zostaną przekazane – jako tablica [wynik1, wynik2, ...] do funkcji cb.
//     drugim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwróconych przez funkcje.
