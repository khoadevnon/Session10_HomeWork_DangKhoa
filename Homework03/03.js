const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;
let userInput = parseInt(prompt("Enter a number: "));
for (let i = 0; i < arr.length; i++) {
  if (userInput === arr[i]) {
    count++;
  }
}
console.log(count);
