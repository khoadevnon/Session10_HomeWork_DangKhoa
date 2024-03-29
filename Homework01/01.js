/* 1. Mục tiêu
Luyện tập sử dụng mảng.
2. Mô tả
Viết chương trình khai báo 1 mảng gồm các phần tử bất kỳ, Tiến hành in ra các phần tử là số nguyên trong mảng, nếu không có số nguyên nào thì hiển thị “Trong mảng không tồn tại số nguyên” lên màn hình console.
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isExist = false;
for (let i = 0; i < arr.length; i++) {
  if (Number.isInteger(arr[i])) {
    console.log(arr[i]);
    isExist = true;
  }
}
if (!isExist) {
  console.log("Trong mảng không tồn tại số nguyên");
}
