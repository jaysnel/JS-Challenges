function sumAll(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  let largest = Math.max(...sortArr);
  let smallest = Math.min(...sortArr);
  let count = 0;

  for(let i = smallest; i <= largest; i++) {
    count += i;
  }
  return count;
}

sumAll([1, 4]);
