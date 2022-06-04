//----------------------------First approach-----------------------------------
// const number = prompt('Enter a number:');

// // First, check if the input is a valid number
// // Then verify if the result of the division between input and 2 is equal to 0

// if (!isNaN(number)) {
//     if (number % 2 === 0) {
//         console.log('The number is EVEN');
//     } else {
//         console.log('The number is ODD');
//     }
// } else {
//     console.log(number + 'It is not a number, please enter a valid number.');
// }
//----------------------------Second approach-----------------------------------

function evenOrOdd(number){
    if (!isNaN(number)){
        if (number % 2 === 0) {
            return 'The number is EVEN';
        } else return 'The number is ODD';
    } else return number + 'It is not a number, please enter a valid number.';
}
