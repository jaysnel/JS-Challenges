function pairElement(str) {

  let splitStr = str.split("");
  const pairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  };
  let finalArr = splitStr.map(el => [el, pairs[el]]);

  return finalArr;
}

pairElement("ATCGA");
