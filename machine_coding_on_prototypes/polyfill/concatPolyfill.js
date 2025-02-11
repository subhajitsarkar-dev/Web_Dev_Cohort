if (!Array.prototype.myConcat) {
  Array.prototype.myConcat = function (userArray) {
    let newArray = [...this];

    for (let i = 0; i < userArray.length; i++) {
      newArray.push(userArray[i]);
    }

    return newArray;
  };
}

// Signature of forEach - New Array return, merge two or more arrays

let arr1 = [1, 2, 3, 4, 5];

let arr2 = [6, 7, 8, 9, 10, 11, 12];

let newArrConcat = arr1.concat(arr2);
let newArrOfMyConcat = arr1.myConcat(arr2);

console.log(newArrConcat);
console.log(newArrOfMyConcat);
