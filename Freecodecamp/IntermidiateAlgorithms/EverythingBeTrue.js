function truthCheck(collection, pre) {
  let validation = true;
  collection.forEach(el => { if(!el[pre]) validation = false; });
  return validation;
}

truthCheck([{"single": "double"}, {"single": undefined}, {"double": undefined}], "single");
