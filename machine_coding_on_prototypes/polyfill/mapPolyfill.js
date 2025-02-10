if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
      newArray.push(userFn(this[i], i));
    }

    return newArray;
  };
}

const arr = [1, 2, 3, 4, 5];

// Signature of map - New Array return, function input, value, index

const arrOfMap = arr.map((e) => e * 5);
const arrOfMyMap = arr.myMap((e) => e * 5);
console.log(arrOfMap);
console.log(arrOfMyMap);
