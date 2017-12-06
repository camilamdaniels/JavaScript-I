// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i], i));
  }
  return newArray;
};

const reduce = (elements, cb, startingValue) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  // if (startingValue === undefined) {
  //   startingValue = elements[0];
  // }

  // let memo;

  // for (let i = startingValue; i < elements.length; i++) {
  //   memo = cb(startingValue, elements[i + 1]);
  // }

  // return elements.reduce(memo);

  // ACTUAL SOLUTION
  const newElements = elements.slice();
  if (startingValue === undefined) {
    startingValue = newElements.shift();
  }
  let memo = startingValue;
  each(newElements, (el) => {
    memo = cb(memo, el);
  });
  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
  return undefined;
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const filtered = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      filtered.push(elements[i]);
    }
  }
  return filtered;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // const newArray = [];
  // for (let i = 0; i < elements.length; i++) {
  //   let isArray = true;
  //   let checker = elements[i];
  //   while (isArray) {
  //     if (!Array.isArray(checker)) {
  //       newArray.push(checker);
  //       isArray = false;
  //     } else {
  //       for (let j = 0; j < checker.length; j++) {
  //         checker = checker[i];
  //       }
  //     }
  //   }
  // }
  // return newArray;
  let output = [];
  each(elements, (num) => {
    if (Array.isArray(num)) {
      output = output.concat(flatten(num));
    } else {
      output.push(num);
    }
  });
  return output;
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};

// const sumUp = (...rest) => {
//   console.log(rest);
//   let outPut = 0;
//   rest.forEach((param) => {
//     outPut += param;
//   });
//   return outPut;
// };
