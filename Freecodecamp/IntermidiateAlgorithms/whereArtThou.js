function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source);
    return collection.filter(fit => {
        return sourceKeys.every(el => {
            return fit.hasOwnProperty(el) && fit[el] === source[el]
        })
    })
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
