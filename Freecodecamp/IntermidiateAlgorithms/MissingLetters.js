function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let splitAlphabet = alphabet.split("");
  let testArr = [];
  let final = null;
  let i = 0;

  while(i <= splitAlphabet.length - 1) {
    testArr.push(splitAlphabet[i])

    if(testArr.length === str.length) {
      //Need testArr length and str length to match for best matching scenario
      //Getting difference between current testArr and str
      //If less than 2, than I know that most of the string matches, so I can be sure I am in the general area before trying to match elemtns
      let splitStr = str.split("");
      let difference = testArr.filter(x => !splitStr.includes(x)).concat(splitStr.filter(x => !testArr.includes(x)));

      //Getting list of differences, first element is the first difference, so will be the on that I need
      if(difference.length <= 2) {
        let intersection = difference.filter(x => !splitStr.includes(x))
        final = intersection[0];
      }
    }
    
    if(testArr.length >= str.length) {
      testArr.shift();
    }

    i++;
  }
  return final;
}

fearNotLetter("bcdf");
