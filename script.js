const display = document.getElementById('calculator-display');
//Sets initial value, and displays it to the calculator
let a = 0;
display.innerText = a;

//Erases content
const CA = document.getElementById('CA').addEventListener('click', () => {
    a = 0;
    display.innerText = a; 
})

//Erases single character
const C = document.getElementById('C').addEventListener('click', () => {
   a = a.slice(0, -1);
   display.innerText = a;
})

//Buttons
const percent = document.getElementById('percent').addEventListener('click', () => {
   showDisplay('%');
})

const seven = document.getElementById('7').addEventListener('click', () => {
   showDisplay('7');
});

const eight = document.getElementById('8').addEventListener('click', () => {
    showDisplay('8');
 });

 const nine = document.getElementById('9').addEventListener('click', () => {
    showDisplay('9');
 });

 const four = document.getElementById('4').addEventListener('click', () => {
    showDisplay('4');
 });

 const five = document.getElementById('5').addEventListener('click', () => {
    showDisplay('5');
 });

 const six = document.getElementById('6').addEventListener('click', () => {
    showDisplay('6');
 });

 const one = document.getElementById('1').addEventListener('click', () => {
    showDisplay('1');
 });

 const two = document.getElementById('2').addEventListener('click', () => {
    showDisplay('2');
 });

 const three = document.getElementById('3').addEventListener('click', () => {
    showDisplay('3');
 });

 const zero = document.getElementById('0').addEventListener('click', () => {
    showDisplay('0');
 });

 const decimal = document.getElementById('.').addEventListener('click', () => {
    showDisplay('.');
 });

 const plus = document.getElementById('plus').addEventListener('click', () => {
   showDisplay(' + ');
 })

 const subtract = document.getElementById('subtract').addEventListener('click', () => {
   showDisplay(' - ');
 })

const multiply = document.getElementById('multiply').addEventListener('click', () => {
   showDisplay(' × ');
})

const divide = document.getElementById('divide').addEventListener('click', () => {
   showDisplay(' ÷ ');
})

const equals = document.getElementById('equals').addEventListener('click', () => {
   convertString(a);
})

//Displays data
let showDisplay = function(num) {
    if (a === 0) {
        a = num;
    } else {
        a += num;
    }
    display.innerText = a;
}

//Splits and converts string
let convertString = function(num) {

   //Get variable num + split string into an array
   let list = num.split(" "); 

   //Break apart array with let [x, y] = num
   let [num1, sign, num2] = list;

   //Use parseFloat to turn strings into numbers
   num1 = parseFloat(num1);
   num2 = parseFloat(num2);

   operate(num1, num2, sign);
}

//Perform the math
const operate = function(num1, num2, sign) {
    let total = 0;
    if (sign === '+') {
        total = num1 + num2; 
    } else if (sign === '-') {
        total = num1 - num2;
    } else if (sign === '×') {
        total = num1 * num2;
    } else {
        total = num1 / num2;
    }
    total = total.toFixed(2);
    display.innerText = total;
 };


