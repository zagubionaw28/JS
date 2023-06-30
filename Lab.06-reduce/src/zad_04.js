// W pliku books.js znajduje się tablica książek. Posegreguj podane książki względem gatunku. Jeśli książka posiada więcej gatunków niż jeden, powinna znaleźć się pod każdym z tych gatunków. Dodatkowo usuń wszystkie pola oprócz tytułu i autora. Użyj wyłącznie funkcji wbudowanych, for zdecydowanie odpada.

const books = require('./books.js').booksArray;

const genreArray = books.reduce((acc, curr) => {
  if (typeof curr.genre !== 'object') {
    return [...acc, {
      title: curr.title,
      author: curr.author,
      genre: [curr.genre],
      readers: curr.readers
    }];
  } return [...acc, curr];
}, []);

const types = genreArray.reduce((acc, curr) => {
  return [...acc, ...curr.genre.reduce((acc2, curr2) => {
    return [...acc2, curr2];
  }, [])];
}, []);

console.log(types);

const result = types.reduce((acc, curr) => {
  const key = curr;
  acc[key] = acc[key] || [];
  acc[key] = genreArray.reduce((acc2, curr2) => {
    return [...acc2, ...curr2.genre.reduce((acc3, curr3) => {
      if (curr === curr3) {
        return [...acc3, {
          title: curr2.title,
          author: curr2.author
        }];
      } return acc3;
    }, [])];
  }, []);
  return acc;
}, {});

// console.dir(genreArray, { depth: null });
console.dir(result, { depth: null });

// // Oczekiwany output
// {
//   'fantasy': [
//     { title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
//     { title: 'Harry Potter', author: 'J.K. Rowling' },
//     // ...
//   ],
//   'fiction': [
//     { title: 'The Borthers Karamazov', author: 'Fyodor Dostoyevsky' },
//     // ...
//   ],
//   // ...
// }
