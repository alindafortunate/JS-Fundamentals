const process = require('process')

process.argv[2]
if (process.argv[2] / 1 ) {
    console.log('My number: ' + process.argv[2])
} else{
    console.log('Not a number')
}