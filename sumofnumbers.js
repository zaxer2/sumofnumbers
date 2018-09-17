function sumFor(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function sumWhile(array) {
  let sum = 0;

  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

function sumRecursion(array, index) {
  if (index < array.length) {
    return array[index] + sumRecursion(array, index + 1);
  }
  return 0;
}

function sumTheSimpleWay(array) {
  return _.reduce(array, function reduce(con, obj) { return con + obj; }, 0)
}

console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4], 0));
console.log(sumTheSimpleWay([1, 2, 3, 4]));
