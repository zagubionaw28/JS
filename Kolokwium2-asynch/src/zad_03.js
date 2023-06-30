const porownaj = (fun1, fun2, cb) => {
  const arrayResult = [];
  const funTab = [fun1, fun2];
  funTab.map((el) => {
    el().then((res) => {
      arrayResult.push(res);
      if (arrayResult.length === 2) {
        if (arrayResult[0] === arrayResult[1]) cb(true);
        else cb(false);
      }
    });
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
    }, 1000);
  });
}

function func3() {
  return new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 500);
  });
}

function cb(res) {
  console.log(res);
}
// Przykładowy output
porownaj(func1, func2, cb); // Wynik porównania: false
porownaj(func1, func3, cb); // Wynik porównania: true