// three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers
describe('bitwiseAND', function () {
    it('should be a defined function', function () {
        expect(bitwiseAND(7, 12)).toBeDefined();
    });
    it('should return a number', function () {
        expect(typeof bitwiseAND(7, 12)).toBe("number");
    });
    it('should return 4 when passed the values 7 & 12', function () {
        expect(bitwiseAND(7, 12)).toBe(4);
    });
    it('should return 0 when passed the values 32 & 17', function () {
        expect(bitwiseAND(32, 17)).toBe(0);
    });
});
describe('bitwiseOR', function () {
    it('should be a defined function', function () {
        expect(bitwiseOR(7, 12)).toBeDefined();
    });
    it('should return a number', function () {
        expect(typeof bitwiseOR(7, 12)).toBe("number");
    });
    it('should return 15 when passed the values 7 & 12', function () {
        expect(bitwiseOR(7, 12)).toBe(15);
    });
    it('should return 49 when passed the values 32 & 17', function () {
        expect(bitwiseOR(32, 17)).toBe(49);
    });
});
describe('bitwiseXOR', function () {
    it('should be a defined function', function () {
        expect(bitwiseXOR(7, 12)).toBeDefined();
    });
    it('should return a number', function () {
        expect(typeof bitwiseXOR(7, 12)).toBe("number");
    });
    it('should return 11 when passed the values 7 & 12', function () {
        expect(bitwiseXOR(7, 12)).toBe(11);
    });
    it('should return 49 when passed the values 32 & 17', function () {
        expect(bitwiseXOR(32, 17)).toBe(49);
    });
});
// function that stutters a word as if someone is struggling to read it
describe('stutter', function () {
    it('should be a defined function', function () {
        expect(stutter("incredible")).toBeDefined();
    });
    it('should return a string', function () {
        expect(typeof stutter('incredible')).toBe("string");
    });
    it('should return "in... in... incredible?" when passed the string "incredible"', function () {
        expect(stutter("incredible")).toBe("in... in... incredible?")
    });
    it('should return "ou... ou... outstanding?" when passed the string "outstanding"', function () {
        expect(stutter("outstanding")).toBe("ou... ou... outstanding?");
    });
});
// function that returns the number of arguments it was called with
describe('numArgs', function () {
    it('should be a defined function', function () {
        expect(numArgs('foo')).toBeDefined();
    });
    it('should return a number', function () {
        expect(typeof numArgs("foo")).toBe("number");
    });
    it('should return 0 when no arguments are passed into the function', function () {
        expect(numArgs()).toBe(0);
    });
    it('should return 2 when passed 2 arguments', function () {
        expect(numArgs("foo", "bar")).toBe(2);
    });
});

// function that returns the number of matchsticks in a row of a given number of matchstick houses
describe('matchHouses', function () {
    it('should be a defined function', function () {
        expect(matchHouses(5)).toBeDefined();
    });
    it('should return a number', function () {
        expect(typeof matchHouses(5)).toBe('number');
    });
    it('should return "6" when passed the value "1"', function () {
        expect(matchHouses(1)).toBe(6)
    });
    it('should return "86" when passed the value "17"', function () {
        expect(matchHouses(17)).toBe(86)
    });
    it('should return "496" when passed the value "99"', function () {
        expect(matchHouses(99)).toBe(496)
    });
});

// Create a function that takes an array of two numbers and checks if the square
// root of the first number is equal to the cube root of the second number.
describe('checkSquareAndCube', function (){
    it('should be a defined function', function () {
        expect(typeof checkSquareAndCube([4, 8])).toBeDefined();
    });
    it('should return a boolean value', function () {
        expect(typeof checkSquareAndCube([4, 8])).toBe('boolean');
    });
    it('should return true when passed arr = [4, 8]', function () {
        expect(checkSquareAndCube([4, 8])).toBe(true);
    });
    it('should return false when passed arr = [5, 10]', function () {
        expect(checkSquareAndCube([5, 10])).toBe(false);;
    });
})

//Create a function that takes a number as an argument. Add up all the numbers from 
// 1 to the number you passed to the function. For example, if the input is 4 then 
// your function should return 10 because 1 + 2 + 3 + 4 = 10.
describe('addUp', function (){
    it('should be a defined function', function () {
        expect(addUp(5)).toBeDefined();
    });
    it('should return a number', function () {
        expect(typeof addUp(5)).toBe('number');
    });
    it('should return 10 when passed the value 4', function () {
        expect(addUp(4)).toBe(10);
    });
    it('should return 91 when passed the value 13', function () {
        expect(addUp(13)).toBe(91);
    });
    it('should return 428275 when passed the value 925', function () {
        expect(addUp(925)).toBe(428275);
    });
});

// Create a function that takes a string and returns the concatenated first and last character.
describe('firstLast', function (){
    it('should be a defined function', function () {
        expect(firstLast("adgesh")).toBeDefined();
    });
    it('should return a string', function () {
        expect(typeof firstLast("adgesh")).toBe('string');
    });
    it('should return "gh" when passed the string "ganesh"', function () {
        expect(firstLast("ganesh")).toBe("gh");
    });
    it('should return "ki" when passed the string "kali"', function () {
        expect(firstLast("kali")).toBe('ki');
    });
})