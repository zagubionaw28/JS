// "use strict";
const { default: axios } = require("axios");
/*
Zadanie 1.1

Stwórz projekt i dołącz do niego bibliotekę axios.

Następnie wykonaj zapytanie metodą GET za pomocą dodanej biblioteki pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200).
Jeśli tak - zwróć response, w przeciwnym wypadku - wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    if (res.status === 200) {
      return res;
    }
  })
  .then((res) => {
    const data = res.data;
    const headers = res.headers;
    console.log(data, headers);
  })
  .catch((error) => console.log(error));
/*
Zadanie 1.2
Stwórz funkcje, która przyjmuje jako parametr obiekt w postaci:
*/
const king = {
  idUser: 28,
  title: "King Arthur",
  completed: true,
};
/*
Następnie wysyła taki obiekt za pomocą funkcji POST z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetl w konsoli komunikat 'Dodano' i id dodanego obiektu. W przeciwnym wypadku wypisz błąd.
*/

function posting(objectKing) {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", objectKing)
    .then((res) => {
      console.log("Dodano", res.data.id);
    })
    .catch((error) => console.log(error));
}

posting(king);
