// https://www.hackerrank.com/challenges/mini-max-sum/problem

const array = [1,3,5,7,9];

function miniMaxSum(arr) {
  let removeFirstValue = arr.sort().slice(1).reduce((a,b) => a + b,0);
  let removeLastValue = arr.sort().slice(0,-1).reduce((a,b) => a + b,0);

  console.log(removeLastValue, removeFirstValue);
}

miniMaxSum(array);
