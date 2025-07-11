const process = require('process')
x = process.argv[2]

let argument = 'C is fun'
if (x / 1) {
    for (i = 0; i < x; i++) {
        console.log(argument)
    }
} else {
    console.log('Missing number of occurrences')
}
