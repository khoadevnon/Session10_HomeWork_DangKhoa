let a = parseInt(prompt("Enter a: "));
let b = parseInt(prompt("Enter b: "));
let arr = [];
if (a > b) {
  for (let i = 1; i <= a; i++) {
    if (i % b === 0) {
      arr.push(i);
    }
  }
}
if (a < b) {
  for (let i = 1; i <= b; i++) {
    if (i % a === 0) {
      arr.push(i);
    }
  }
}
console.log(arr);
