const removeFromArray = function(array, removeItems) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] !== removeItems) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
