// Write a script that prints a square

// The first argument is the size of the square
// If the first argument can’t be converted to an integer, print “Missing size”
// You must use the character X to print the square
// You must use console.log(...) to print all output
// You are not allowed to use var
// You must use a loop (while, for, etc.)

const process = require('process')
let x = process.argv[2]
let value = ''

if (x / 1) {
    for (i = 0; i < x; i++) {
        value += "X"

    }
    for (j = 0; j < x; j++) {
        console.log(value)
    }

} else {
    console.log('Missing size')
}