// Napisz funkcję zlicz, która przyjmuje tablicę asynchronicznych funkcji i zwraca liczbę funkcji, które zwróciły wynik większy niż zadana wartość threshold. Funkcja zlicz powinna przyjąć dwa argumenty:

//     funTab – tablica asynchronicznych funkcji zwracających liczbę
//     threshold – wartość graniczna, wyniki funkcji muszą być większe niż ta wartość

// Funkcja zlicz powinna zapewnić, że wszystkie funkcje w tablicy funTab wykonają się równolegle. Po otrzymaniu wyników z funkcji, funkcja zlicz powinna policzyć liczbę funkcji, których wynik był większy niż threshold i zwrócić tę liczbę.

// Fragment kodu do uzupełnienia

const zlicz = (funTab, threshold) => {
  const array = [];
  const help = (arg) => {
      array.push(arg);
      if (array.length === funTab.length) {
        const result = array.reduce((acc, curr) => {
          if (curr > threshold) {
            return [...acc, curr];
          }
          return acc;
        }, []);
        console.log('Liczba funkcji z wynikiem powyżej progu:', result);
      }
  };

  const reducing = funTab.reduce((acc, curr) => {
    return [...acc, curr(help)];
  }, []);
};

const fun1 = (cb) => {
  setTimeout(() => {
    cb(7);
  }, 2000);
};

const fun2 = (cb) => {
  setTimeout(() => {
    cb(4);
  }, 1000);
};

const fun3 = (cb) => {
  setTimeout(() => {
    cb(9);
  }, 1500);
};

const result = zlicz([fun1, fun2, fun3], 5);
