// https://www.hackerrank.com/challenges/plus-minus/problem

let arrayList = [-4,3,-9,0,4,1];

function plusMinus(arr) {
  let arrayLength = arr.length;
  let pos = 0;
  let neg = 0;
  let net = 0;
  let finalArray = [];

  arr.forEach(el => {  return (el == 0) ? net++ : (el < 0) ? neg++ : pos++ });
  
  finalArray.push((pos / arrayLength).toFixed(6));
  finalArray.push((neg / arrayLength).toFixed(6));
  finalArray.push((net / arrayLength).toFixed(6));

  console.log(finalArray.join('\n'));
}

plusMinus(arrayList);
