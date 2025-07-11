let result = ['No argument', 'Argument found', 'Arguments found']

if (result[0] === process.argv[0]) {
    console.log('No argument')
} else if (result[1] === process.argv[1]) {
    console.log('Argument found')
} else {
    console.log('Arguments found')
}