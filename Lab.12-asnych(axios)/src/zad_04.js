// console.log(czasSukces); // Wywołanie musi być zawarte poza funkcją checkTime
let czasSukces = 0;

const checkTime = (arg, maxTries) => {
  const checkForTime = setInterval(() => {
    if (new Date() >= arg) {
      console.log("Czas upłynął");
      czasSukces = new Date();
      clearInterval(checkForTime);
    } else console.log("Sprawdzam ponownie");
  }, 1000);

  setTimeout(() => {
    if (czasSukces) return;
    clearInterval(checkForTime);
    console.log("Limit prób przekroczony");
    checkTime(arg - 60 * 1000, maxTries);
  }, 1000 + maxTries * 1000);
};

const desiredTime = new Date(2023, 5, 4, 00, 39, 00);
checkTime(desiredTime, 5);

const checking = setInterval(() => {
  if (czasSukces !== undefined) {
    console.log(czasSukces);
    clearInterval(checking);
  }
}, 1000);

// czasSukces = `Czas upłynął '${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}'!`;
