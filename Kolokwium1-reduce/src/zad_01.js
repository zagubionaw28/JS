const questionsChatGpt = require('./questions-chat-gpt.js').questionsChatGpt;
// const users = require('./users.js').users;

function result(array) {
  const namesArray = array.reduce((acc, curr) => {
    return [...acc, curr.user.name];
  }, []).sort((a, b) => {
    return a > b ? 1 : -1;
  });
  return namesArray.reduce((acc, curr) => {
    const key = curr.toLowerCase();
    acc[key] = acc[key] || {};
    acc[key] = array.reduce((acc2, curr2) => {
      if (curr === curr2.user.name) {
        const key2 = "count";
        acc2[key2] = array.reduce((acc3, curr3) => {
          if (curr3.user.question === curr2.user.question && curr3.user.name === curr2.user.name) {
            acc3 = acc3 + 1;
          } return acc3;
        }, 0);
        const key3 = "questions";
        acc2[key3] = acc2[key3] || [];
        acc2[key3] = array.reduce((acc4, curr4) => {
          if (curr4.user.question === curr2.user.question && curr4.user.name === curr2.user.name) {
            return [...acc4, curr4.question];
          } return acc4;
        }, []);
      } return acc2;
    }, {});
    return acc;
  }, {});
}

console.log(result(questionsChatGpt));