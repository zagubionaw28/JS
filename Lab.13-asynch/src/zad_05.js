// Nie korzystając z Promise.all uzupełnij funkcję razem, która przyjmuje tablicę promise'ów. Funkcja ta ma uruchamiać wszystkie promisy równolegle i po wykonaniu wszystkich, uruchomić funkcję, która została przekazana jako callback.

const array = [];
function razem(promisesTab, callback){
  for (let i = 0; i < promisesTab.length; i++) {
    promisesTab[i].then((res) => {
      array.push(res);
      if (array.length === promisesTab.length) {
        callback();
      }
    });
  }
}

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

function func3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Artur <3");
      res(3);
    }, 500);
  });
}

function cb() {
  console.log("Pinacolada");
}

razem([func1(), func2(), func3()], cb);