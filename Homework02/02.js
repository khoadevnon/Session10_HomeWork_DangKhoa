const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isExist = false;
let userInput = parseInt(prompt("Enter a number: "));
for (let i = 0; i < arr.length; i++) {
  if (userInput === arr[i]) {
    console.log(i);
    isExist = true;
  }
}

if (!isExist) {
  console.log("phần tử không tồn tại");
}
