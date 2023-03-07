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

//Grab Divs & Buttons to Colour
const calculator_container = document.getElementById('calculator-container');
const btnRound = document.querySelectorAll('.btn-round');
const btnPill = document.querySelectorAll('.btn-pill');
const btnHeart = document.querySelectorAll('.btn-heart');
const btnPrevious = document.querySelector('#P-COLOUR');
const btnNext = document.querySelector('#N-COLOUR');
let id = 0; 

//Rollover Function
const rollOver = function () {
   for (i = 0; i < btnRound.length; i++) {
      btnRound[i].style.background = "#2b2b2b82";
   }
   for (i = 0; i < btnPill.length; i++) {
      btnPill[i].style.background = "#2b2b2b82";
   }
   for (i = 0; i < btnHeart.length; i++) {
      btnHeart[i].style.backgroundImage = "url('heart_hover.svg')"
   }
}

//Colour Functions
const grey = function () {
   calculator_container.setAttribute('style', 'background-color: #ccccccff;');
   for (i = 0; i < btnRound.length; i++) {
      btnRound[i].style.background = "#999999ff";
   }
   for (i = 0; i < btnPill.length; i++) {
      btnPill[i].style.background = "#999999ff";
   }
   for (i = 0; i < btnHeart.length; i++) {
      btnHeart[i].style.backgroundImage = "url('heart.svg')"
   }
   id = 0;
}

const pink = function () {
   calculator_container.setAttribute('style', 'background-color: #ffe1ed;');
   for (i = 0; i < btnRound.length; i++) {
      btnRound[i].style.background = "#ff90be";
   }
   for (i = 0; i < btnPill.length; i++) {
      btnPill[i].style.background = "#ff90be";
   }
   for (i = 0; i < btnHeart.length; i++) {
      btnHeart[i].style.backgroundImage = "url('heart_pink.svg')"
   }
   id = 1;
}

const rufous = function () {
   calculator_container.setAttribute('style', 'background-color: #fcc9c2ff;');
   for (i = 0; i < btnRound.length; i++) {
      btnRound[i].style.background = "#f33315ff";
   }
   for (i = 0; i < btnPill.length; i++) {
      btnPill[i].style.background = "#f33315ff";
   }
   for (i = 0; i < btnHeart.length; i++) {
      btnHeart[i].style.backgroundImage = "url('heart_rufous.svg')"
   }
   id = 2;
}

const orange = function () {
   calculator_container.setAttribute('style', 'background-color: #ffe2dd;');
   for (i = 0; i < btnRound.length; i++) {
      btnRound[i].style.background = "#fd9885";
   }
   for (i = 0; i < btnPill.length; i++) {
      btnPill[i].style.background = "#fd9885";
   }
   for (i = 0; i < btnHeart.length; i++) {
      btnHeart[i].style.backgroundImage = "url('heart_orange.svg')"
   }
   id = 3; 
}

const green = function () {
   calculator_container.setAttribute('style', 'background-color: #d1f0e5;');
   for (i = 0; i < btnRound.length; i++) {
      btnRound[i].style.background = "#2ecaa9";
   }
   for (i = 0; i < btnPill.length; i++) {
      btnPill[i].style.background = "#2ecaa9";
   }
   for (i = 0; i < btnHeart.length; i++) {
      btnHeart[i].style.backgroundImage = "url('heart_green.svg')"
   }
   id = 4;
}

const purple = function () {
   calculator_container.setAttribute('style', 'background-color: #f5e4fa;');
   for (i = 0; i < btnRound.length; i++) {
      btnRound[i].style.background = "#e09dec";
   }
   for (i = 0; i < btnPill.length; i++) {
      btnPill[i].style.background = "#e09dec";
   }
   for (i = 0; i < btnHeart.length; i++) {
      btnHeart[i].style.backgroundImage = "url('heart_purple.svg')"
   }
   id = 5;
}

const blue = function () {
   calculator_container.setAttribute('style', 'background-color: #d0eff9;');
   for (i = 0; i < btnRound.length; i++) {
      btnRound[i].style.background = "#00c6f2";
   }
   for (i = 0; i < btnPill.length; i++) {
      btnPill[i].style.background = "#00c6f2";
   }
   for (i = 0; i < btnHeart.length; i++) {
      btnHeart[i].style.backgroundImage = "url('heart_blue.svg')"
   }
   id = 6;
}


//Changes to previous colour
btnPrevious.addEventListener('click', () => {
   if (id === 0) {
      blue();
   } else if (id === 6) {
      purple();
   } else if (id === 5) {
      green();
   } else if (id === 4) {
      orange();
   } else if (id === 3) {
      rufous();
   } else if (id === 2) {
      pink();
   } else {
      grey();
   }
})

//Changes to next colour
btnNext.addEventListener('click', () => {
   if (id === 0) {
      pink();
   } else if (id === 1) {
      rufous();
   } else if (id === 2) {
      orange();
   } else if (id === 3) {
      green();
   } else if (id === 4) {
      purple();
   } else if (id === 5) {
      blue();
   } else {
      grey();
   }
})

//Buttons
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
      if (num1 === 0 || num2 === 0) {
         total = "I can't let you do that, Dave!";
        } else {
        total = num1 / num2;
        }
    }
    if (total % 1 !== 0) {
      display.innerText = total.toFixed(1);
    } else {
      display.innerText = total;
    }
 };


