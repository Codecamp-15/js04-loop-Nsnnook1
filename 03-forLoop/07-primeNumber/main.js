let primeNumber = true;

for (let i = 2; i <= 100; i++) {
  primeNumber = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      primeNumber = false;
      break;
    }
  }
  if (primeNumber == true) {
    console.log(i);
  }
}




//เฉลยในห้อง!
// for (let n = 2; n <= 100; n++){
//   //only 1 number
//    let primeNumber = true;
// for (let divider = 2; divider < n; divider++) 
//   //divider 2,3,4,.....n-1
//   if (n % divider == 0)
//   {
//     primeNumber = false;
//     break;
//     //n=2 5/2 = 2.5 => primeNumber = true
//     //n=3 5/3 = 1.6=> primeNumber = true
//     //n=4 5/4 = 1.25 => primeNumber = true
//     //n=5
//   }
//   if (primeNumber) console.log(n);
// }
