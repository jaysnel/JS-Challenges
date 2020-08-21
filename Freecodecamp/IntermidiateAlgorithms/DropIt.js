function dropElements(arr, func) {
  let finalArr = [];
  arr.forEach(el=> { finalArr.push(el); }); //creating a new array to manipulate data correctly

  for(let i = 0; i < arr.length; i++) {
    if(!func(arr[i])) {
      finalArr.shift();
    } else {
      break;
    }
  }

  return finalArr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
