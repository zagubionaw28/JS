// Napisz funkcję, która za pomocą reduce obliczy średnią. Funkcja powinna przyjmować dwa parametry: tablicę obiektów i oznaczenie zmiennej, z której ma być wyliczana średnia.

// Przykład listy
const arr = [{
  x: 4,
  y: 2
},
{
  x: 1,
  y: 8
},
{
  x: 4,
  y: 2
} ];

function average(array, variable) {
  return array.reduce((acc, curr) => {
    return (variable === 'x') ? acc + curr.x : acc + curr.y;
  }, 0);
}

console.log(average(arr, 'y'));
