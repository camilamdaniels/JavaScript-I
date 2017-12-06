// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const newObj = {};
  const valueList = Object.values(obj);
  const keyList = Object.keys(obj);
  for (let i = 0; i < keyList.length; i++) {
    newObj[keyList[i]] = cb(valueList[i]);
  }
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return Object.entries(obj);
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObj = {};
  const valueList = Object.values(obj);
  const keyList = Object.keys(obj);
  for (let i = 0; i < keyList.length; i++) {
    newObj[valueList[i]] = keyList[i];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  // const valueList = Object.values(obj);
  // const valueDefaultList = Object.values(defaultProps);
  // const keyList = Object.keys(obj);
  // const keyDefaultList = Object.keys(defaultProps);
  // for (let i = 0; i < keyList.length; i++) {
  //   let currProperty = valueList[i];
  //   for (let j = 0; j < keyDefaultList.length; j++) {
  //     if (currProperty === undefined && keyList[i] === keyDefaultList[i]) {
  //       currProperty = valueDefaultList[i];
  //     }
  //   }
  // }
  // for (var key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     if (obj[key] !== undefined) {
  //       defaultProps[key] = obj[key];
  //     }
  //   }
  // }
  // return obj;
  Object.keys(defaultProps).forEach((key) => {
    if (!(key in obj)) {
      obj[key] = defaultProps[key];
    }
  });
  return obj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
