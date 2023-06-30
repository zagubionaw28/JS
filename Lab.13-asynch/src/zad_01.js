// Napisz funkcję (nie korzystając z mechanizmu async/await ani Promise'ów):

const poKolei = (fun1, fun2, cb) => {
  let funTab = [fun1, fun2];
  const help = (res) => {
    console.log(funTab);
    if (funTab.length <= 1) {
      cb(res);
    } else {
      funTab = funTab.slice(1);
      funTab[0](res, help);
    }
  };
  funTab[0](1, help);
 };

function func1(arg, cb) {
  setTimeout(() => {
    // console.log("Love");
    cb(arg + 1);
  }, 2000);
}

function func2(arg, cb) {
  setTimeout(() => {
    // console.log("Arthur");
    cb(arg + 2);
  }, 1000);
}

poKolei(func1, func2, (res) => console.log(res));
// taką, że:

//     jej dwoma pierwszymi argumentami są funkcje asynchroniczne – możesz założyć, że funkcje te muszą być przygotowane na przyjęcie określonej listy argumentów, z których korzystać będzie poKolei
//     funkcja poKolei powinna zapewnić, że fun2 wykona się zawsze po fun1, a wyniki wygenerowane przez fun1 zostaną przekazane do fun2.
//     trzecim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez fun2
