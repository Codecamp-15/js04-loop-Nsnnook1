// let src = "*";
// let src_wrapper = " ";

// console.log("Hello");

// for (i = 1; i <= 5; i++) {
//   for (j = 1; j <= i; j++) {
//     src_wrapper = `${src_wrapper}` + " " + `${src}`;
//   }
//   console.log(src_wrapper);
//   console.log("\n");
// }

let str = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    if (j <= i) str += "*";
  }
  str += "\n";
}
console.log(str);
