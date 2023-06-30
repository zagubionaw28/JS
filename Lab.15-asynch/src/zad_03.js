const resultArray = [];
const entryArray = [];
const threshold = 5;

const zlicz = (theUndefined) => {
    if (typeof theUndefined === "number") {
        if (resultArray.length === entryArray.length - 1) console.log('Liczba funkcji z wynikiem powyżej progu:', [...resultArray, theUndefined].filter((n) => n > threshold).length)
        else resultArray.push(theUndefined);
    } else {
        // console.log(theUndefined);
        theUndefined.forEach(functions => functions(zlicz));
    }
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

entryArray.push(fun1, fun2, fun3);
zlicz(entryArray, threshold);