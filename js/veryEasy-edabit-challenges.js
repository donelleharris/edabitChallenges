// Return the Sum of Two Numbers challenge:
function addition(a, b) {
    return a + b;
}

//  Convert Minutes into Seconds challenge:
function convert(minutes) {
    return minutes * 60;
}

//  Return the Next Number from the Integer Passed challenge:
function addition2(num) {
    return num + 1;
}

//  Area of a Triangle challenge:
function triArea(base, height) {
    return base * height / 2;
}

//  Return Something to Me! challenge:
function giveMeSomething(a) {
    return "something " + a;
}

//  Convert Hours into Seconds challenge:
function howManySeconds(hours) {
    return hours * 60 * 60;
}
//  Return the First Element in an Array challenge:
function getFirstValue(arr) {
    return arr[0];
}

//  Maximum Edge of a Triangle challenge:
function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}

//  Find the Perimeter of a Rectangle challenge:
function findPerimeter(length, width) {
    return (length * 2) + (width * 2)
}

//  Return the Reminder from Two Numbers challenge:
function remainder(x, y) {
    return x % y;
}

//  Football Points challenge:
function footballPoints(wins, draws, losses) {
    losses = 0
    return wins * 3 + draws + losses;
}

//  the Farm Problem challenge:
function animals(chickens, cows, pigs) {
    return chickens * 2 + cows * 4 + pigs * 4;
}

// Convert string to Number challenge:
function stringInt(str) {
    return Number(str);
}

// Movie Theater Admittance challenge:
function acceptIntoMovie(age, isSupervised){
    return (age >= 15) || isSupervised;
}
// function acceptIntoMovie(age, isSupervised) {
//     return (age >= 15) || isSupervised;
// }

// Flip the Boolean challenge:
function flipBool(b) {
    b = !b
    return Number(b);
}

// Using Ternary Operators:
function yeah_nope(bool) {
    return bool === true ? 'yeah' : `nope`;
}

// Find the Index challenge:
function findIndex(arr, str) {
    return arr.indexOf(str);
}

// To the Power of ____ challenge: Create a function that takes a
// base number and an exponent number and returns the calculation.
function calculateExponent(num, exp) {
    return Math.pow(num, exp);
}

// Find the Index (Part 2) challenge: Create a function that searches
// for the index of a given item in an array. If the item is present,
// it should return the index, otherwise, it should return -1.
function search(arr, item) {
    if (arr.includes(item)) {
        return arr.indexOf(item)
    } else return -1
}

function check(arr, el) {
    return arr.includes(el);
}

function concatinate(arr1, arr2) {
    return  arr1.concat(arr2);
}

function hasSpaces(str) {
    return str.includes(" ");
}

// Word without First Character challenge: Create a function that takes
// a word and returns the new word without including the first character.
function newWord(str) {
    return str.substring(1);
}

// Volume of a Box challenge: Create a function that takes an object argument
// sizes (contains width, length, height keys) and returns the volume of the box.
function volumeOfBox(sizes) {
    return Multiplication(sizes);
}

// Convert an Array to a String challenge: Create a function that takes an
// array of numbers or letters and returns a string.
function arrayToString(arr) {
    return arr.join("");
}

// Luke, I Am Your ... challenge: Luke Skywalker has family and friends.
// Help him remind them who is who. Given a string with a name, return the
// relation of that person to Luke.
function relationToLuke(name) {
    // if (name === "Darth Vader"){
    //     return "Luke, I am your father."
    // } else if (name === "Leia"){
    //     return "Luke, I am your sister."
    // } else if (name === "Han"){
    //     return "Luke, I am your brother in law."
    // } else return "Luke, I am your droid."
    switch (name) {
        case "Darth Vader":
            return "Luke, I am your father."
        case "Leia":
            return "Luke, I am your sister."
        case "Han":
            return "Luke, I am your brother in law."
        default:
            return "Luke, I am your droid."
    }
}

// Nth Star Number challenge: Crate a function that takes a positive integer
// and returns the nth "star number".
function starNumber(n) {
    return (6 * n * (n - 1) + 1);
}

// Total Number of Parameters challenge: Create a function that returns
// the total number of arguments passed in.
function numberArgs(args) {
    return arguments.length;
}

// Kinetic Energy challenge: Return the Kinetic Energy in Joules, given
// the mass and velocity (round answers to nearest integer).
function kineticEnergy(m, v){
    return Math.round(0.5 * m * (Math.pow(v, 2)));
}

// Number of Stickers challenge: Given an n * n * n Rubik's cube, return
// the number of individual stickers that are needed to cover the whole cube.
function howManyStickers(n){
    return (n * n) * 6
}

// Similar Bread challenge: Given two arrays, which represent two sandwiches,
// return whether both sandwiches use the same type of bread. The bread will
// always be found at the start and end of the array.
function hasSameBread(arr1, arr2){
    return (arr1[0] === arr2[0]) && (arr1[2] === arr2[2]);
}

// Four Passengers and a Driver challenge: A typical car can hold four passengers
// and one driver, allowing five people to travel around. Given n number of people,
// return how many cars are needed to seat everyone comfortably.
function carsNeeded(n) {
    return Math.ceil(n / 5);
}

// Slice of Pie challenge: Create a function that determines whether or not it's possible
// to split a pie fairly given these three parameters:
                // Total number of slices.
                // Number of recipients.
                // How many slices each person gets.
function equalSlices(total, people, each) {
    return (people * each <= total);
}

// Is the Word Singular or Plural? challenge: Create a function that takes in a word and
// determines whether or not it is plural. A plural word is one that ends in "s".
function isPlural(word) {
    return word.slice(-1) === "s";
}

