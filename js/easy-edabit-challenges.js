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