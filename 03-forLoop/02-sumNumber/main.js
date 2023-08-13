let sum = 0;
let even = 0;
let odd = 0;
let Even_pow = 0;
let Odd_pow = 0;
let Sum_pow = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}

for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0) even = even + i;
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) odd = odd + i;
}

for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0)
    Even_pow = Even_pow + (i**2);
  }
  
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) Odd_pow = Odd_pow + (i**2);
  }

  Sum_pow = Even_pow - Odd_pow;
//   console.log(Sum_pow);


console.log(sum); //ผลรวมเลขทุกตัว 5050
console.log(even);//ผลรวมเฉพาะเลขคู่ 2550
console.log(odd); //ผลรวมเฉพาะเลขคี่ 2500
console.log(Even_pow); // ผลรวมของเลขที่หาร 2 ลงตัว ยกกำลัง 2
console.log(Odd_pow); // ผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 
console.log(Sum_pow);

