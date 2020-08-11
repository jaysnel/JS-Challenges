function uniteUnique(arr) {
  let array = [];
  let args = arguments;

  for(let element of args) {
    let unique = element.filter((item, i, ar) => ar.indexOf(item) === i);
    unique.forEach(el => {
      array.push(el);
    })
  }

  let finalArray = array.filter((item, i, ar) => ar.indexOf(item) === i);

  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
