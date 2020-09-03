// Bitwise Operations challenge: Write three functions to calculate the
// bitwise AND, bitwise OR and bitwise XOR of two numbers.
function bitwiseAND(n1, n2) {
    return (n1 & n2)
}

function bitwiseOR(n1, n2) {
    return (n1 | n2)
}

function bitwiseXOR(n1, n2) {
    return (n1 ^ n2)
}

// Stuttering Function challenge: Write a function that stutters a word as
// if someone is struggling to read it. The first two letters are repeated
// twice with an ellipsis ... and space after each, and then the word is
// pronounced with a question mark ?.
function stutter(word) {
    return word.substr(0, 2) + "... " + word.substr(0, 2) + "... " + word + "?";
}

// Count the Arguments challenge: Create a function that returns the number
// of arguments it was called with.
function numArgs(){
    return arguments.length;
}

// Count the Syllables challenge: Create a function that returns the number
// of syllables in a simple string. The string is made up of short repeated
// words like "Lalalalalalala" (which would have 7 syllables).
function countSyllables(){
    return str.length / 2;
}

// function that returns the number of matchsticks in a row of a given number
// of matchstick houses
function matchHouses(step) {
    if(step === 0){
        return 0
    } else return 5 * step + 1;
}

// Create a function that takes an array of two numbers and checks if the square
// root of the first number is equal to the cube root of the second number.
function checkSquareAndCube(arr) {
    return Math.sqrt(arr[0]) === Math.cbrt(arr[1])
}

//Create a function that takes a number as an argument. Add up all the numbers from
// 1 to the number you passed to the function. For example, if the input is 4 then
// your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
    var add = 0;
    for (i = 0; i <= num; i++){
        add += i;
    }
    return add
}

// Create a function that takes a string and returns the concatenated first and last character.
function firstLast(name) {
    return name.charAt(0) + name.charAt(name.length-1);
}

