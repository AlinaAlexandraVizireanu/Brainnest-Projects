//----------------------------First approach-----------------------------------
/// Declaring a and b so that the user has the possibility to chose which value prefer
// let a = prompt('Enter a value for a:');
// let b = prompt('Enter a value for b:');

// if (a > b) {
//     console.log(a);
// } else if (b > a) {
//     console.log(b);
// }
//----------------------------Second approach-----------------------------------

// function theLargerOfTheTwo(a, b) {
//     return Math.max(a, b);            ///Returns the largest number between a and b
// }

//----------------------------Third approach-----------------------------------

const theLargerOfTheTwo = (a, b) => a > b ? a : b; // The main logic was written with ternary operator syntax
                                                   // which is the short form of else if