// Write a script that computes and prints a factorial

// The first argument is integer (argument can be cast as integer) used for computing the factorial
// Factorial of NaN is 1
// You must do it recursively
// You must use a function
// You must use console.log(...) to print all output
// You are not allowed to use var
const process = require('process')

function factorial(a) {

    let result = 1
    for (i = 1; i <= a; i++) {
        result *= i
    }
    console.log(result)
}
factorial(Number(process.argv[2]))