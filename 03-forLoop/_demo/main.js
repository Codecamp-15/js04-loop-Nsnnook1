console.log("learn counting loop");
console.log("starting......");
//() = parenthesis
//{} = bracket
//[] = square bracket

// for (let i = 0; i < 3; i++) {
//   console.log("Hello");
//   console.log("codecamp");
// }

// for (let i = 1; i <= 20; i = i + 1)
//   if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);

// i++;

//EX3 : Skip Fizz

// for (let i = 1; i <= 20; i = i + 1)
//   if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else if (i % 3 == 0) continue;
//   else console.log(i);

//EX3.1
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) console.log("i");
//   else continue; //เริ่ม run Loop รอบถัดไป
//   console.log("even");
// }

//EX4 : Concat String
// let str = "";
// for (let i = 1; i <= 10; i++) {
//   if (i % 3 == 0) continue;
//   str += i;
// }

//EX5 : remov vowel(a,e,i,o,u)

// let src = "codecamp";
// let res = ""; //cdcmp

// ------1------
// for (let i = 0; i < src.length; i++) {
//   let c = src[i];
//   let isVowel = c == "a" || c == "e" || c == "i" || c == "o" || c == "u";
//   if (isVowel) continue;
//   else res = res + src[i];

//   ----2-----
//   if (
//     src[i] == "a" ||
//     src[i] == "e" ||
//     src[i] == "i" ||
//     src[i] == "o" ||
//     src[i] == "u"
//   )
//   continue;
//   res = res + src[i];
// }
//'' + src[0] == '' + 'c' => 'c'
//'' + src[1] == 'c' + 'o' => 'co'

// console.log(res);

//ADVANCE : Nested Loop;
//Multiplication Table
// แม่ (2-12)
for (let i = 2; i <= 12; i++) {
  //   console.log(`${i} * 1 = ${i * 1}`); //ต้องเขียน12บรรทัด!

  console.log["เริ่มท่องสูตรคูณแม่ ${i}"];
//  1-12
  for (let j = 1; j <= 12; j++) {
    console.group(`${i} * ${j} = ${i * j}`);
  }
  console.log["/n"];
}
console.log("end....");
