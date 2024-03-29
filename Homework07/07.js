/* [Bài tập] Tìm mảng con thỏa mãn điều kiện
1. Mục tiêu
Luyện tập sử dụng mảng.
2. Mô tả
Viết chương trình khai báo mảng số nguyên gồm nhiều số bất kỳ, yêu cầu người dùng nhập vào một số bất kỳ, tìm ra mảng con đầu tiên từ mảng ban đầu có tổng các phần tử bằng với số vừa nhập. Nếu không tìm thấy thì hiển thị “Không có mảng con thỏa mãn”. Ví dụ: có mảng [1,5,6,3,2,1,1,5,6,7] nhập vào số 14 sẽ hiển thị mảng con [5,6,3].
 */
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
