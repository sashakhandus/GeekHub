
let btnSum = document.querySelector('.sum');
let btnSub = document.querySelector('.sub');
let btnPow = document.querySelector('.pow');
let btnSin = document.querySelector('.sin');
let btnCos = document.querySelector('.cos');
let btnSqrt = document.querySelector('.sqrt');
let btnFact = document.querySelector('.fact');
let btnRes = document.querySelector('.reset');

let res = document.querySelector('.result');

function reset() {
  document.querySelector('#num1').value = '';
  document.querySelector('#num2').value = '';
  res.innerHTML = `Result: `;
}

function sum() {
 let num1 = document.querySelector('#num1').value;
  num1 = parseInt(num1);

  let num2 = document.querySelector('#num2').value;
  num2 = parseInt(num2);

  let result = num1 + num2;
  res.innerHTML = `Result: ${result}`;
}

function sub() {
  let num1 = document.querySelector('#num1').value;
  num1 = parseInt(num1);

  let num2 = document.querySelector('#num2').value;
  num2 = parseInt(num2);

  let result = num1 - num2;
  res.innerHTML = `Result: ${result}`;
}


function pow() {
  let num1 = document.querySelector('#num1').value;
  num1 = parseInt(num1);

  let num2 = document.querySelector('#num2').value;
  num2 = parseInt(num2);

  if (num2 === 0) {
    let result = 1;
  } else if (num2 === 1) {
    let result = num1;
  } else if (num2 > 1 ){
    for (i = 2; i <= num2; i++) {
      let result = result * num1;
    }
  }

  res.innerHTML = `Result: ${result}`;
}

function sin() {
  let num1 = document.querySelector('#num1').value;
  num1 = parseInt(num1);
  console.log(num1);

  let result = Math.sin(num1 * Math.PI / 180);
  res.innerHTML = `Result: ${result}`;
}


function cos() {
  let num1 = document.querySelector('#num1').value;
  num1 = parseInt(num1);
  console.log(num1);

  let result = Math.cos(num1 * Math.PI / 180);
  res.innerHTML = `Result: ${result}`;
}

function sqrt() {
  let num1 = document.querySelector('#num1').value;
  num1 = parseInt(num1);

  let result = Math.sqrt(num1);
  res.innerHTML = `Result: ${result}`;
}


function factorial(num) {
  if (num === 0) {
    return 1;
  } return num * factorial(num - 1);
}

function getFactorial() {
  let num1 = document.querySelector('#num1').value;
  num1 = parseInt(num1);
  console.log(num1);

  let result = factorial(num1);
  res.innerHTML = `Result: ${result}`;
}



btnSum.addEventListener('click', sum);
btnSub.addEventListener('click', sub);
btnPow.addEventListener('click', pow);
btnSin.addEventListener('click', sin);
btnCos.addEventListener('click', cos);
btnSqrt.addEventListener('click', sqrt);
btnFact.addEventListener('click', getFactorial);
btnRes.addEventListener('click', reset);