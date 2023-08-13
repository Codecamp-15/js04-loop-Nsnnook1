console.log("learn while loop");

// ประเภทของ Loop
// 1. Conditions Loop ตัดสินใจว่าจะรันต่อมั้ย จาก Boolean
// 2. Counting Loop “—————————“     จากตัวเลข
// 3. List Loop “———————————-”    จาก จน.ของรายการ eq.เช็ค stock สินค้า

console.log("starting..");

let i = 1;

while (i <= 20) {
  //Loop Block (number 1-100)
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
  i++;
}
console.log("end..");


// let i= 2;
//  while(i <= 100){
//   if (i%2 === 0){
//     console.log(i)
//   }
//   i++
//  }