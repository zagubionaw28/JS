const zliczPoKolei = (funTab, threshold, cb) => {
  let i = 0;
  const array = [];

  function help(res) {
    array.push(res);
    i++;
    if (array.length === funTab.length) {
      const result = array.reduce((acc, curr) => {
        if (curr > threshold) return acc+1;
        return acc;
      }, 0);
     cb(result);
    } else {
      funTab[i](help);
    }
  }
  funTab[i](help);
 };

function func1(cb) {
  setTimeout(() => {
    cb(1);
  }, 2000);
}

function func2(cb) {
  setTimeout(() => {
    cb(12);
  }, 1000);
}

function func3(cb) {
  setTimeout(() => {
    cb(3);
  }, 500);
}

function cb(res) {
  console.log(res);
}

zliczPoKolei([func1, func2, func3], 2, cb);