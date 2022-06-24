var userOperation = prompt("What operation would you like to perform? Enter Choice: +,-,/,*: ");
var num1 = parseFloat(prompt("Enter First Number: "));
var num2 = parseFloat(prompt("Enter Second number: "));


var result;

if (userOperation == '+'){ //perform addition
    result = num1 + num2;
} else if (userOperation == '-'){ //perform subtraction
    result = num1 - num2;
} else if (userOperation == '/'){ //perform division
    result == num1 / num2;
} else if (userOperation == '*'){ //perform Multiplication
    result = num1 * num2;
} else{ //An error is gotten when running it
    result = 'Invalid Operation Entered! Refresh Page and Try Again ';  
}
alert(result)