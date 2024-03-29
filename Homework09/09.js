/* [Bài tập] Tìm phần tử dương nhỏ nhất còn thiếu
1. Mục tiêu
Luyện tập sử dụng vòng lặp.
2. Mô tả
Viết chương trình khai báo mảng số nguyên bất kỳ, in ra phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng. Ví dụ:
Khai báo mảng [1,2,5,7] thì in ra 3
Khai báo mảng [10,5,7] thì in ra 1
 */
let arr = [1, 2, 5, 7];
let newArr = [];
let min = 1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    newArr.push(arr[i]);
  }
}
newArr.sort((a, b) => a - b);
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] === min) {
    min++;
  } else {
    break;
  }
}
console.log(min);
