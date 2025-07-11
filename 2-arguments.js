let result = ['No argument', 'Argument found', 'Arguments found']

if (process.argv[3]) {

    console.log(result[2])

} else if (process.argv[2]) {

    console.log(result[1])

} else {
    console.log(result[0])

}