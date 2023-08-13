//สูตร 2.5 % 100

let deposit = 100000;
let interestRate = 2.5 / 100;
let interest = 0;

for (let i = 1; i <= 10; i++) {
  interest = deposit * interestRate;
  deposit += interest;
}
console.log( ` เมื่อครบ 10 ปี จะมียอดเงินฝากสะสม = ${deposit.toFixed(2)}`);


