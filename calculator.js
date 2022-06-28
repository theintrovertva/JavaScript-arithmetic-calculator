const num1 = parseFloat(prompt('Please enter your first number:'));
const operator = prompt('Choose Operation:(+,-,/,*');
const num2 = parseFloat(prompt('Enter your second number:'));

let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('Wrong Input! Refresh the page and provide detail')
}
else if(operator== '+'){
        result = num1 + num2;
    }
else if(operator == '-'){
        result = num1 - num2;
    }
else if(operator == '/'){
        result = num1 / num2;
    }
else if(operator == '*'){
        result = num1 * num2;
    }
alert(num1 + operator + num2 + '=' + result);