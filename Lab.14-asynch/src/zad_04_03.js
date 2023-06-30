// Napisz funkcję obliczeniaSekwencyjne, która przyjmuje tablicę asynchronicznych funkcji i zwraca wynik po sekwencyjnym wykonaniu tych funkcji. Funkcja powinna przyjąć dwa argumenty:

//     funTab – tablica asynchronicznych funkcji (funkcje muszą być przygotowane na przyjęcie wyniku poprzedniej funkcji jako argumentu)
//     cb – funkcja zwrotna (callback) przyjmująca jeden argument – wynik po sekwencyjnym wykonaniu funkcji

// Funkcja obliczeniaSekwencyjne powinna zapewnić, że funkcje z tablicy funTab wykonają się sekwencyjnie, czyli kolejna funkcja będzie wywoływana dopiero po zakończeniu poprzedniej funkcji. Po wykonaniu wszystkich funkcji z tablicy, funkcja obliczeniaSekwencyjne powinna przekazać wynik ostatniej funkcji do funkcji zwrotnej cb.

// Fragment kodu do uzupełnienia

const obliczeniaSekwencyjne = (funTab, cb) => {
  let funArray = funTab;
  const help = (arg) => {
    if (funArray.length > 1) {
      funArray = funArray.slice(1);
      funArray[0](arg, help);
    } else {
      cb(arg);
    }
  };

  funArray[0](1, help);
};

const fun1 = (arg, cb) => {
  setTimeout(() => {
    console.log("Love");
    cb(arg + 2);
  }, 2000);
};

const fun2 = (arg, cb) => {
  setTimeout(() => {
    console.log("You");
    cb(arg * 3);
  }, 1000);
};

const fun3 = (arg, cb) => {
  setTimeout(() => {
    console.log("Artur");
    cb(arg - 1);
  }, 1500);
};

obliczeniaSekwencyjne([fun1, fun2, fun3], (wynik) => {
  console.log('Wynik sekwencyjnych obliczeń:', wynik);
});