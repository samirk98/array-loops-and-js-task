/**
 *  Ilk natural ededin cemi
 */

const N = 10;

let sum = 0;

for (let i = 0; i <= N; i++) {
  sum += i;
}
console.log(`from 0 to 10 sum of numbers are ${sum}`);

/**
 * 1-den n-e  qeder nece sade eded oldugnu tapin
 */

let count = 0;
for (let number = 1; number <= N; number++) {
  let isPrime = true;
  for (let k = 2; k < number; k++) {
    if (number % k == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    count++;
    console.log(`${number} is prime number`);
  }
}
console.log(`1 den ${N} e qeder ${count} eded var`);

/**
 * faktorial tap
 */

const m = 10;


let prod = 1;
for (let i = 1; i < m; i++){
    m *= i;
1   
}

console.log(`${prod}! = ${prod}`);
