const process = require('process')
let x = process.argv[2]
let value = 'X'
if (x / 1) {
    for (i = 0; i < x; i++) {
        if (i < x) {
            console.log(value++)
        }
    }
} else {
    console.log('Missing size')
}