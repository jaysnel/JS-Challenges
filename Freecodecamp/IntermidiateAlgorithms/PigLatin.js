function translatePigLatin(str) {

  let regexValue = /^[^aeiou]+/;
  let theConstanants = str.match(regexValue);

  if(theConstanants === null) {return `${str}way`}
  else {
    let newStr = str.substr(theConstanants[0].length);
    return `${newStr}${theConstanants}ay`;
  }
}

translatePigLatin("algorithm");
