 const poKolei = (funTab, cb) => (n) => {
  let tmpFunTab = funTab;
  const help = (arg) => {
      tmpFunTab[0](arg).then((res) => {
        if (tmpFunTab.length > 1) {
          tmpFunTab = tmpFunTab.slice(1);
          help(res);
        } else cb(res);
      });
    };
  help(n);
 };

function func1(n) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Hello");
      res(n + 1);
    }, 2000);
  });
}

function func2(n) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("It's");
      res(n + 1);
    }, 2000);
  });
}

function func3(n) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("me");
      res(n + 1);
    }, 2000);
  });
}

function cb(res) {
  console.log(res);
}

poKolei([func1, func2, func3], cb)(1);