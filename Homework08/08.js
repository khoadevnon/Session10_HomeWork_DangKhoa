let arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
let sum = parseInt(prompt("Enter a number: "));
let newArr = [];
let isExist = false;
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i]);
  let total = 0;
  for (let j = 0; j < newArr.length; j++) {
    total += newArr[j];
  }
  if (total === sum) {
    console.log(newArr);
    isExist = true;
    break;
  }
  if (total > sum) {
    newArr.shift();
    i--;
  }
}
if (!isExist) {
  console.log("Không có mảng con thỏa mãn");
}
