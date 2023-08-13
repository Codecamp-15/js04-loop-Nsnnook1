let calculate = () => {
  let sum = 0;
  let count = 0;

  while (true) {
    let input = Number(prompt("Input Number:"));

    if (input === 0) {
      console.log("ไม่รับค่า 0");
      break;
    } else if (input < 0) {
      console.log("ไม่รับค่าลบ");
      break;
    } else if (isNaN(input)) {
      console.log("ไม่รับค่า String");
      break;
    }

    sum += input;
    count++;
  }

  if (count === 0) {
    console.log("Input Number");
  } else {
    let average = sum / count;
    console.log(`ผลรวม = ${sum}`);
    console.log(`ค่าเฉลี่ย = ${average}`);
  }
};

calculate();
