function spinalCase(str) {
  
  let adjustedStr = str.split("");
  let newStr = [];

  adjustedStr.forEach((el, index) => {
    if(el === el.toUpperCase()) if(index != 0) newStr.push("-") //push "-" before push currnent item to force pattern we want
    newStr.push(adjustedStr[index])
  });

  let finalStr = newStr.join("").replace(/[^\w\s]/gi, '-').replace(/ |_|-/g, "-").replace(/\-{2,}/g, "-").toLowerCase(); //lots of replaces, not sure how to get around that with regex just yet

  return finalStr;
}

spinalCase("Teletubbies say Eh-oh");
