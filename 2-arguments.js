function no_Argument() {
    console.log('No argument')
}
function one_Argument(argument) {
    console.log('Argument found')
}
function found_Argument(argument1, argument2) {
    console.log('Argument found')
}

if (no_Argument()) {
    console.log('No argument')
} else if (one_Argument('hello')) {
    console.log('Argument found')

} else {
    console.log('Argument found')
}
