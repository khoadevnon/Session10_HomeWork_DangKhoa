let arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
let newArr = [];
let isExist = false;
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i]);
  let count = 0;
  for (let j = 0; j < newArr.length; j++) {
    if (arr[i] === newArr[j]) {
      count++;
    }
  }
  if (count > 1) {
    console.log(arr[i]);
    isExist = true;
  }
}
if (!isExist) {
  console.log("Không có phần tử trùng lặp");
}
