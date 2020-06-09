// https://www.hackerrank.com/challenges/compare-the-triplets/problem

const list1 = [5,6,7];
const list2 = [6,4,8];

function compareTriplets(a, b) {

  if(a.length != b.length) return false;

  const arrayLength = a.length;
  const winner = [0,0];

  for(let i =0; i <= arrayLength; i++) {
    if(a[i] > b[i]) winner[0]++;
    if(a[i] < b[i]) winner[1]++;
  }
  return winner;
}

compareTriplets(list1, list2);
