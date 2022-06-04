//----------------------------First approach-----------------------------------
// let semiperimeter = 0;
// let aria = 0;
// //  a, b and c are the lengths of its sides
// let a = 5;
// let b = 6;
// let c = 7;

// semiperimeter = (a + b + c) / 2;
// aria = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));

//----------------------------Second approach-----------------------------------

// function ariaOfTriangle(a, b, c) {
//     let semiperimeter = 0;
//     let aria = 0;

//     semiperimeter = (a + b + c) / 2;
//     aria = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));

//     return aria;
// }

//----------------------------Third approach-----------------------------------

const ariaOfTriangle = (a, b, c) => {
    let semiperimeter = 0;
    let aria = 0;

    semiperimeter = (a + b + c) / 2;
    aria = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));

    return aria;
}