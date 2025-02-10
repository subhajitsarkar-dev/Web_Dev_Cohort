// polyfill for forEach

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    const currentArr = this;

    for (let i = 0; i < currentArr.length; i++) {
      userFn(currentArr[i], i);
    }
  };
}

const arrforEach = [1, 2, 3, 4];

// Signature of forEach - No return, function input, value, index

// call my function for every value

arr.forEach(function (value, index) {
  console.log(`Value of Index  ${index} is ${value}`);
});

arr.myForEach(function (value, index) {
  console.log(`My forEach Value of Index  ${index} is ${value}`);
});
