let n = +prompt("Input your number");

let count = 0;
let sum = 0;

// if( n<0 ) n = -n; 

while (n) {
  let remainder = n % 10;
  n = (n - remainder) / 10;
  sum += remainder;
  count++;
}
console.log(count, sum);
