function frankenSplice(arr1, arr2, n) {
  let newarr1 = arr1.map(el => { return el });
  let newarr2 = arr2.map(el => { return el });
  newarr1.reverse();
  newarr1.forEach(el => {
    newarr2.splice(n, 0, el)
  });
  return newarr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
