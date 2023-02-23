const operate = function(num1, num2, sign) {
    let total = 0;
    if (sign === '+') {
        return total = num1 + num2; 
    } else if (sign === '-') {
        return total = num1 - num2;
    } else if (sign === '*') {
        return total = num1 * num2;
    } else {
        return total = num1 / num2;
    }
};

console.log(operate(8, 7, '/'));