// let num = "";

// for (let i = 1; i <= 8; i++) {
//   for (let j = 1; j <= 1; j++) {
//     num = `${num}` + " " + `${i}`;
//   }
//   console.log(num);
//   console.log("\n");
// }

let num = "";
for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= i; j++) {
    if (j <= i) num += `${j}`;
  }
  num += "\n";
}
console.log(num);
