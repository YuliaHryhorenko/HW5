let sum = 0;

for (let num = 1; num <= 100; num++) {
  if (num % 3 !== 0) {
    sum = sum + num;
  }
}
console.log(sum);
