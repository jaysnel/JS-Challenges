function sumPrimes(num) {
  let arr = [];
  let primeArr = [];

  //push first array which are all values that I need
  for(let i = 1; i <= num; i++) {
    if(isPrime(i)) primeArr.push(i);
  }
  //check if isPrime function
  function isPrime(value) {
      for(let i = 2; i < value; i++) {
          if(value % i === 0) {
              return false;
          }
      }
      return value > 1;
  }

  let final = primeArr.reduce((a, b) => a + b);
  return final;
}

sumPrimes(10);
