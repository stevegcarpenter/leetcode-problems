'use strict';

module.exports = (numbers, sum) => {
  // store current index in lookup table using the value needed to equal sum
  // as the key value. When looking in the lookup table use the current value
  // and know that that was the previous index.
  let lookup = {};

  for (let i = 0; i < numbers.length; i++) {
    if (lookup[numbers[i]] !== undefined)
      return [lookup[numbers[i]], i];
    else
      lookup[sum - numbers[i]] = i;
  }

  return [];
};
