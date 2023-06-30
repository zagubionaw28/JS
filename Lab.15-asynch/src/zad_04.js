const obliczeniaSekwencyjne = (funTab, cb) => {
  let tempFunTab = funTab;

  const help = (arg = 0) => {
      console.log(arg);
      if (tempFunTab.length === 0) {
          cb(arg);
          return;
      }
      tempFunTab[0](arg, help);
      tempFunTab = tempFunTab.slice(1); // .tail
  };
  help();
};

const fun1 = (arg, cb) => {
  setTimeout(() => {
    cb(arg + 2);
  }, 2000);
};

const fun2 = (arg, cb) => {
  setTimeout(() => {
    cb(arg * 3);
  }, 1000);
};

const fun3 = (arg, cb) => {
  setTimeout(() => {
    cb(arg - 1);
  }, 1500);
};

obliczeniaSekwencyjne([fun1, fun2, fun3], (wynik) => {
  console.log('Wynik sekwencyjnych obliczeń:', wynik);
});