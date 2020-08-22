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