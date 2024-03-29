// Exercise

// Cho 1 danh sách todoList như sau

// const todoList = ["Sleep at 12pm", "Workout 2hours per day", "Do homework"];

// Viết 1 ứng dụng quản lý các todoList
// Cho phép người dùng nhập vào 4 chữ cái C/R/U/D thông qua
// câu lệnh prompt

// - C: Khi người dùng nhập vào chữ C
// - Hiển thị lên 1 ô prompt cho phép người dùng thêm mới 1
//   todo item vào trong danh sách todoList
// - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
//   todo item theo dạng:
// - 1. Sleep at 12pm
// - 2. Workout 2hours per day
// - 3. ...

// - R: Khi người dùng nhập vào chữ R
// - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
//   todo item theo dạng:
// - 1. Sleep at 12pm
// - 2. Workout 2hours per day
// - 3. ...

// - U: Khi người dùng nhập vào chữ U
// - Hiển thị lên 1 ô prompt hỏi người dùng vị trí của todo item
//   muốn cập nhật
// - Kiểm tra xem vị trí người dùng nhập vào có hợp lệ hay không
// - Nếu hợp lệ -> Tiếp tục hiển thị ô prompt để nhập vào nội dung mới
//   cập nhật cho todo item
// - Nếu không hợp lệ -> Tiến hành quay lại bước nhập vào 4 chữ cái C/R/U/D
// - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
//   todo item theo dạng:
// - 1. Sleep at 12pm
// - 2. Workout 2hours per day
// - 3. ...

// - D: Khi người dùng nhập vào chữ D
// - Hiển thị lên 1 ô prompt hỏi người dùng vị trí của todo item
//   muốn xoá
// - Kiểm tra xem vị trí người dùng nhập vào có hợp lệ hay không
// - Nếu hợp lệ -> Tiến hành xoá todo item đó ra khỏi todoList
// - Nếu không hợp lệ -> Tiến hành quay lại bước nhập vào 4 chữ cái C/R/U/D
// - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
//   todo item theo dạng:
// - 1. Sleep at 12pm
// - 2. Workout 2hours per day
// - 3. ...

// - Chương trình lặp đi lại lại vô hạn
// cho đến khi người dùng nhập vào chữ "E"

// - Kết thúc chương trình

// Bài làm
const todoList = ["Sleep at 12pm", "Workout 2hours per day", "Do homework"];
let userInput = prompt("Enter C/R/U/D: ");
while (userInput !== "E") {
  if (userInput === "C") {
    let newItem = prompt("Enter new item: ");
    todoList.push(newItem);
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i + 1}. ${todoList[i]}`);
    }
  } else if (userInput === "R") {
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i + 1}. ${todoList[i]}`);
    }
  } else if (userInput === "U") {
    let index = Number(prompt("Enter position: "));
    if (index >= 1 && index <= todoList.length) {
      let newItem = prompt("Enter new item: ");
      todoList[index - 1] = newItem;
      for (let i = 0; i < todoList.length; i++) {
        console.log(`${i + 1}. ${todoList[i]}`);
      }
    } else {
      alert("Invalid position");
    }
  } else if (userInput === "D") {
    let index = Number(prompt("Enter position: "));
    if (index >= 1 && index <= todoList.length) {
      todoList.splice(index - 1, 1);
      for (let i = 0; i < todoList.length; i++) {
        console.log(`${i + 1}. ${todoList[i]}`);
      }
    } else {
      alert("Invalid position");
    }
  } else {
    alert("Invalid command");
  }
  userInput = prompt("Enter C/R/U/D: ");
}
console.log("End program");
