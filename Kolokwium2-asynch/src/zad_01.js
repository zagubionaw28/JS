const axios = require("axios");


function axiosId(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((res) => {
      return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res2) => {
        return res2.data.reduce((acc) => {
          return {...acc,
            userId: res.data.id,
            name: res.data.name,
            posts: res2.data.reduce((acc2, curr2) => {
              return [...acc2, {
                postsId: curr2.id,
                title: curr2.title,
                body: curr2.body
              }];
            }, [])
          };
        }, {});
      });
  })
  .catch(`Nie znaleziono użytkownika o id ${id}`);
}

axiosId(3).then((res) => console.log(res));
