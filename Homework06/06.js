function sortArray(arr) {
  let arrNegative = [];
  let arrPositive = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arrNegative.push(arr[i]);
    } else {
      arrPositive.push(arr[i]);
    }
  }
  return arrNegative.concat(arrPositive);
}

let arr = [1, 2, 3, -1, -2, -3];
console.log(sortArray(arr)); // [-1, -2, -3, 1, 2, 3]
