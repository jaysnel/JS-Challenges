function destroyer(arr) {
  let args = arguments;
  let initialArr = null;
  let argumentsSearched = [];

  for(let i = 0; i <= args.length - 1; i++) {
    if(i === 0) {
      initialArr = args[i]; //get first argument which is the array
    } else {
      argumentsSearched.push(args[i]) //get the rest of the arguments for the spots to be removed
    }
  }

  let filtered = initialArr.filter(
    function(e) {
      return this.indexOf(e) < 0
    }, argumentsSearched)

  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
