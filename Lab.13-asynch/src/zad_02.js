// Napisz funkcję (nie korzystając z mechanizmu async/await ani Promise'ów):

const array = [];
const razem = (fun1, fun2, cb) => { 
  const funTab = [fun1, fun2];
  const help = (res) => {
    array.push(res);
    if (array.length === 2) {
      cb(array);
    }
  };

  for (let i = 0; i < funTab.length; i ++) {
    funTab[i](help);
  }
 };

 function func1(cb) {
  setTimeout(() => {
    console.log("Love");
    cb(1);
  }, 2000);
}

function func2(cb) {
  setTimeout(() => {
    console.log("Arthur");
    cb(2);
  }, 1000);
}
function cb(res) {
  console.log(res);
}

razem(func1, func2, cb);
// taką, że:

//     jej dwoma pierwszymi argumentami są funkcje asynchroniczne – ponownie możesz założyć, że funkcje te muszą być przygotowane na przyjęcie określonej listy argumentów, z których korzystać będzie razem
//     funkcja razem powinna zapewnić, że fun1 oraz fun2 będą wykonywać się „równolegle”, a wyniki przez nie wygenerowane zostaną przekazane – jako tablica [wynik1, wynik2] do funkcji cb.
//     trzecim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwróconych przez fun1 i fun2.
