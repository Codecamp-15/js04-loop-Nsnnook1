//progrzm-1 : Input User-1

// let ansNumber = prompt("Enter your magic number"); // null, string : "",...................

//  ansNumber === null || ansNumber.trim() === "" || isNaN(ansNumber); แบบย่อ
// แบบเต็ม
// let isNull = ansNumber === null;
// let isEmpty = ansNumber.trim() === ""; // ไม่ทำงาน เพราะค่าเป็น null
// let isNan = isNan(ansNumber);

// let isValid = ansNumber == null || ansNumber.trim() === "" || isNan(ansNumber);
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRaange = Number(ansNumber) >= 1 && Number(ansNumber) <= 99;

// if (isValid) {
//   alert("Invalid Input");
// } else if (outOfRange) {
//   alert("Invalid Range");
// } else if (isInRaange) {
//   alert("Try to guess number"); //Program : player 2
// }

//V2 : รับ input ได้เรื่อยๆจนกว่าจะพิมพ์ถูก / แต่ให้กด esc เพือจบโปรแกรมได้

let ansNumber = "";
let isEmpty;
let isNan;
let outOfRange;
do {
  ansNumber = prompt("Enter Your Magic Number") || "";

  isEmpty = ansNumber.trim() === "";
  isNan = isNaN(ansNumber);
  outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
  if (isEmpty || isNan) {
    alert("Invalid Input. Try 1-99");
  } else if (outOfRange) {
    alert("Invalid Range. Try 1-99");
  }
} while (isEmpty || isNan);

//Program 2 :Guess
//ทายซ้ำ
//Hint OutOfRange
//Hint Invalid Range
//Hint too high, too low
//alert Correct
let guessNumber = "";
do {
  guessNumber = prompt("Enter Your Answer") || "";
  isEmpty = guessNumber.trim() === "";
  isNan = isNaN(guessNumber);
  outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
  if (isEmpty || isNan) {
    alert("Invalir Imput. Try 1-99");
  } else if (outOfRange) {
    alert("Invalid Range. Try 1-99");
  } else if (+guessNumber > +ansNumber) {
    alert("TooHigh");
  } else if (+guessNumber < +ansNumber) {
    alert("TooLow");
  } else if (+guessNumber === +ansNumber) {
    alert("Correct");
  }
} while (+guessNumber != +ansNumber); // + ทำให้เป็นตัวเลข เหมือน NUmber()
