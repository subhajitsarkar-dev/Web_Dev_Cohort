if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      const result = userFn(this[i], i);
      if (result) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  };
}

const arr = [1, 5, 8, 10, 14];

// Signature of forEach - No return, function input, true/false

let arrFilter = arr.filter((item) => item % 2 !== 0);
let arrMYFilter = arr.myFilter((item) => item % 2 !== 0);

console.log(arrFilter);
console.log(arrMYFilter);
