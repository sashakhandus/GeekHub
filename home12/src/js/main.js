const sum = (a, b) => a + b;
console.log(sum(5, 7));

const sub = (a,b) => a - b;
console.log(sub(5,7));

const pow = (a, b) => {
  let c = a;
  if (b > 1 ){
    for (i = 2; i <= b; i++) {
      c = c * a;
    }
  }
  return c;
};
console.log(pow(3,4));

const sin = degrees => Math.sin(degrees * Math.PI / 180);
console.log(sin(90));

const cos = degrees => Math.cos(degrees * Math.PI / 180);
console.log(cos(0));

const sqrt = a => Math.sqrt(a);
console.log(sqrt(81));

const factorial = a => {
  if (a === 0) {
    return 1;
  } return a * factorial(a - 1);
};
console.log(factorial(5));