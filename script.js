const display = document.getElementById('calculator-display');
//Sets initial value, and displays it to the calculator
let a = 0;
display.innerText = a;

//Erases content
const CA = document.getElementById('CA').addEventListener('click', () => {
    a = 0;
    display.innerText = a; 
})


//Displays value of button that user clicks on 
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

let showDisplay = function(num) {
    if (a === 0) {
        a = num;
    } else {
        a += num;
    }
    display.innerText = a;
}
