const zliczPoKolei = (funTab, threshold, cb) => {
  const arrayComparison = [];
  let i = 0;
  function help(res) {
    arrayComparison.push(res);
    if (arrayComparison.length === funTab.length) {
      const result = arrayComparison.reduce((acc, curr) => {
        if (curr > threshold) return acc + 1;
        return acc;
      }, 0);
      cb(result);
    } else {
      i++;
      // console.log(arrayComparison);
      funTab[i](help);
    }
  }
  funTab[i](help);
  // arrayComparison.push(funTab[i](help));
 };

function func1(cb) {
  setTimeout(() => {
    console.log("Love");
    cb(1);
  }, 2000);
}

function func2(cb) {
  setTimeout(() => {
    console.log("You");
    cb(12);
  }, 1000);
}

function func3(cb) {
  console.log("Arthur");
  setTimeout(() => {
    cb(3);
  }, 500);
}

function cb(res) {
  console.log(res);
}


zliczPoKolei([func1, func2, func3], 2, cb);