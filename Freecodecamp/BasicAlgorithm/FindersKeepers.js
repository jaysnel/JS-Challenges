function findElement(arr, func) {
  return arr.find(func);
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
