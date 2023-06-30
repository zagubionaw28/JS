const zlicz = (funTab, threshold) => {
  return new Promise((res) => {
    const array = [];

    const help = (arg) => {
      array.push(arg);
      if (array.length === funTab.length) {
        res(array.reduce((acc, curr) => {
          return curr > threshold ? [...acc, curr] : acc;
        }, []));
      }
    };

    const reducing = funTab.reduce((acc, curr) => {
      return [...acc, curr(help)];
    }, []);
  });
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

zlicz([fun1, fun2, fun3], 5).then((res) => {
  console.log('Liczba funkcji z wynikiem powyżej progu:', res);
});
