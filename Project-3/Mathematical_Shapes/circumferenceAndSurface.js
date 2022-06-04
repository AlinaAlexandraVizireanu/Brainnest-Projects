//----------------------------First approach-----------------------------------

// const PI = 3.14;
// let radius = 4;
// let area = 0;
// let circumference = 0;

// area = PI * radius ** 2;   //50.24
// circumference = 2 * PI * radius; //25.12

//----------------------------Second approach-----------------------------------

// function areaOfCircle(radius) {
//     const PI = 3.14;

//     area = PI * Math.pow(radius, 2);

//     return area;
// }

// function circumferenceOfCircle(radius) {
//     const PI = 3.14;

//     circumference = 2 * PI * radius;

//     return circumference;
// }

//----------------------------Third approach-----------------------------------
const PI = 3.14;
const areaOfCircle = radius => (
    area = PI * Math.pow(radius, 2)
)

const circumferenceOfCircle = radius => (
    circumference = 2 * PI * radius
)