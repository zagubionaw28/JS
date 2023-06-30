const axios = require("axios");

const numberArray = [0, 0, 0, 0, 0].reduce((acc) => {
  return [...acc, Math.floor(Math.random() * 99)];
}, []);

console.log(numberArray);

const commentsArray = [];
const postsArray = numberArray.reduce((acc, curr) => {
  commentsArray.push(
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + curr + "/comments")
      .then((res) => res.data)
  );
  return [
    ...acc,
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + curr)
      .then((res) => res.data),
  ];
}, []);

// console.log(commentsArray);
// console.log(postsArray);

Promise.all([Promise.all(postsArray), Promise.all(commentsArray)]).then(
  ([posts, comments]) => {
    const result = posts.reduce((acc, curr, i) => {
      const objects = comments.reduce((acc2, curr2, j) => {
        if (i === j) {
          // acc2["entry"] = acc2["entry"] || {};
          acc2["entry"] = {
            title: curr.title,
            body: curr.body,
          };
          acc2["comments"] = acc2["comments"] || [];
          acc2["comments"] = curr2.reduce((acc3, curr3) => {
            return [
              ...acc3,
              {
                name: curr3.name,
                email: curr3.email,
                body: curr3.body,
              },
            ];
          }, []);
        }
        return acc2;
      }, {});
      acc.push(objects);
      return acc;
    }, []);
    console.dir(result, { depth: null });
  }
);
