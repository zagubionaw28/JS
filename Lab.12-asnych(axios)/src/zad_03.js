//  (kolokwium 2022) Napisz funkcję (nie korzystając z mechanizmu async/await):

const poKolei = (fun1, fun2, fun3, cb) => {
  let rezultat = 0;
  fun1()
    .then((res) => {
      rezultat = res;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      fun2(rezultat)
        .then((res) => {
          rezultat = res;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          fun3(rezultat)
            .then((res) => {
              rezultat = res;
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              cb(rezultat);
            });
        });
    });
};

function func1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
    }, 2000);
  });
}

function func2(x) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(x + 1);
    }, 2000);
  });
}

function func3(x) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(x + 1);
    }, 2000);
  });
}

function cb(x) {
  console.log(x * x);
}

poKolei(func1, func2, func3, cb);

// taką, że:

//     Jej trzema pierwszymi argumentami są funkcje zwracające promise – możesz założyć, że funkcje te muszą być przygotowane na przyjęcie określonej listy argumentów, z których korzystać będzie poKolei.
//     Funkcja poKolei powinna zapewnić, że fun3 wykona się po fun2, która wykona się zawsze po fun1. Wyniki wygenerowane przez fun1 zostaną przekazane do fun2, a wynik fun2 zostanie przekazany do fun3.
//     Czwartym argumentem funkcji jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez fun3.
//     Jeżeli którykolwiek z promise'ów zakończy się porażką, funkcja ma dalej kontynuować swoje zadanie.
