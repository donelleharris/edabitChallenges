// Not all challenges have tests

describe('addition', function (){
    it('should be a defined function', function () {
        expect(addition()).toBeDefined();
    });
    it('should return the sum of two numbers', function () {
        expect(addition(2, 3)).toBe(5);
    });
    it('should return the sum of two numbers', function () {
        expect(addition(-3, -6)).toBe(-9);
    });
});
describe('convert', function (){
    it('should be a defined function', function () {
        expect(convert()).toBeDefined();
    });
    it('should return the product of 6 & 60', function () {
        expect(convert(6)).toBe(360);
    });
    it('should return the product of 4 & 60', function () {
        expect(convert(4)).toBe(240);
    });
});
describe('addition2', function (){
    it('should be a defined function', function () {
        expect(addition2()).toBeDefined();
    });
    it('should return the next highest number', function () {
        expect(addition2(2)).toBe(3);
    });
    it('should return the next highest number', function () {
        expect(addition2(-9)).toBe(-8);
    });
    it('should return the next highest number', function () {
        expect(addition2(0)).toBe(1);
    });
});
describe('triArea', function () {
    it('should be a defined function', function () {
        expect(triArea()).toBeDefined();
    });
    it('should return the area of a triangle with a base of 3 and a height of 2 ', function () {
        expect(triArea(3, 2)).toBe(3);
    });
    it('should return the area of a triangle with a base of 5 and a height of 4 ', function () {
        expect(triArea(5, 4)).toBe(10);
    });
});
describe('giveMeSomething', function () {
    it('should be a defined function', function () {
        expect(giveMeSomething()).toBeDefined();
    });
    it('should return a string', function () {
        expect(typeof giveMeSomething()).toBe("string");
    });
    it('should return the string "something is cooking"', function () {
        expect(giveMeSomething("is cooking")).toBe("something is cooking")
    });
    it('should return the string "something is better than nothing"', function () {
        expect(giveMeSomething("is better than nothing")).toBe("something is better than nothing")
    });
});

describe('howManySeconds', function (){
    it('should be a defined function', function () {
        expect(howManySeconds()).toBeDefined();
    });
    it('should return the product of 6 x 60 x 60', function () {
        expect(howManySeconds(2)).toBe(7200);
    });
    it('should return the product of 4 x 60 x 60', function () {
        expect(howManySeconds(10)).toBe(36000);
    });

});

describe('getFirstValue', function (){
    it('should be a defined function', function () {
        expect(getFirstValue([1, 2, 3])).toBeDefined();
    });
    it('should return 0 when passed arr=[1, 2, 3]', function () {
        expect(getFirstValue([1, 2, 3])).toBe(1);
    });
    it('should return 80 when passed arr=[80, 5, 100]', function () {
        expect(getFirstValue([80, 5, 100])).toBe(80);
    });

});
describe('nextEdge', function () {
    it('should be a defined function', function () {
        expect(nextEdge()).toBeDefined();
    });
    it('should return the maximum range of a triangle\'s third edge', function () {
        expect(nextEdge(5,4)).toBe(8);
    });
    it('should return the maximum range of a triangle\'s third edge', function () {
        expect(nextEdge(7, 9)).toBe(15);
    });
});
describe('findPerimeter', function () {
    it('should be a defined function', function () {
        expect(findPerimeter()).toBeDefined();
    });
    it('should take two parameters (length and width) and finds the perimeter of a rectangle', function () {
        expect(findPerimeter(6, 7)).toBe(26);
    });
    it('should take two parameters (length and width) and finds the perimeter of a rectangle', function () {
        expect(findPerimeter(20, 10)).toBe(60);
    });
});

describe('remainder', function () {
    it('should be a defined function', function () {
        expect(remainder()).toBeDefined();
    });
    it('should take two parameters (length and width) and finds the perimeter of a rectangle', function () {
        expect(remainder(7, 2)).toBe(1);
    });
    it('should take two parameters (length and width) and finds the perimeter of a rectangle', function () {
        expect(remainder(3, 4)).toBe(3);
    });
    it('should take two parameters (length and width) and finds the perimeter of a rectangle', function () {
        expect(remainder(-9, 45)).toBe(-9);
    });
});
describe('footballPoints', function () {
    it('should be a defined function', function () {
        expect(footballPoints()).toBeDefined();
    });
    it('should take the number of wins, draws and losses and calculates the number of points a football team has obtained so far', function () {
        expect(footballPoints(3, 4, 2)).toBe(13)
    });
    it('should take the number of wins, draws and losses and calculates the number of points a football team has obtained so far', function () {
        expect(footballPoints(5, 0, 2)).toBe(15)
    });
});
describe('animals', function () {
    it('should be a defined function', function () {
        expect(animals()).toBeDefined();
    });
    it('should return the total number of legs given 5 chickens, 2 cows and 8 pigs', function () {
        expect(animals(5, 2, 8)).toBe(50)
    });
    it('should return the total number of legs given 3 chickens, 4 cows and 7 pigs', function () {
        expect(animals(3, 4, 7)).toBe(50)
    });
});
describe('stringInt', function () {
    it('should be a defined function', function () {
        expect(stringInt()).toBeDefined();
    });
    it('should return a number', function () {
        expect(typeof stringInt()).toBe(`number`)
    });
    it('should return 4 when passed the string "4"', function () {
        expect(stringInt("4")).toBe(4)
    });
});

describe('acceptIntoMovie', function () {
    it('should be a defined function', function () {
        expect(typeof acceptIntoMovie()).toBeDefined();
    });
    it('should return a boolean value', function () {
        expect(typeof acceptIntoMovie(15, true)).toBe("boolean")
    });

});
//returns the opposite of the given boolean, as a number
describe('flipBool', function () {
    it('should be a defined function', function () {
        expect(flipBool()).toBeDefined();
    });
    it('should return the opposite of the given boolean, as a number', function () {
        expect(flipBool(false)).toBe(1)
    });
});

// returns the total number of arguments passed in
describe('numberArgs', function () {
    it('should be a defined function', function () {
        expect(numberArgs()).toBeDefined();
    });
    it('should return a number', function () {
        expect(typeof numberArgs()).toBe("number");
    });
    it('should return the number of arguments passed into the function (i.e. (a, b, c) should return "3"', function () {
        expect(numberArgs("a", "b", "c")).toBe(3);
    });
});

// returns Kinetic Energy in joules given mass and velocity
describe('kineticEnergy', function () {
    it('should be a defined function', function () {
        expect(kineticEnergy()).toBeDefined();
    });
    it('should return a whole number', function () {
        expect(typeof kineticEnergy(60, 3)).toBe("number")
    });
    it('should return 270 when passed the values 60 & 3', function () {
        expect(kineticEnergy(60, 3)).toBe(270)
    });
});

// returns the number of individual stickers that are needed to cover a Rubic's cube
describe('howManyStickers', function (){
    it('should be a defined function', function () {
        expect(howManyStickers()).toBeDefined();
    });
    it('should return a whole number', function () {
        expect(typeof howManyStickers(1)).toBe("number");
    });
    it('should return a positive number', function () {
        expect(howManyStickers(2)).toBeGreaterThan(0);
    });
});

// return whether two arrays have the same values in the first and last indexes.
describe('hasSameBread', function (){
    it('should be a defined function', function () {
        expect(hasSameBread(["white bread", "chicken", "white bread"], ["white bread", "chicken", "white bread"])).toBeDefined();
    });
    it('should return a boolean value', function () {
        expect(hasSameBread(["white bread", "chicken", "white bread"], ["white bread", "chicken", "white bread"])).toBeTruthy();
    });
    it('should return true when passed the following arrays: ["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]', function () {
        expect(hasSameBread(["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"])).toBe(true);
    });
    it('should return false when passed the following arrays: ["brown bread", "chicken", "brown bread"], ["white bread", "chicken", "white bread"]', function () {
        expect(hasSameBread(["brown bread", "chicken", "brown bread"], ["white bread", "chicken", "white bread"])).toBe(false);
    });
});

// given a set number of passengers (n) return how many cars are needed to seat everyone comfortably.
describe('carsNeeded', function () {
    it('should be a defined function', function () {
        expect(carsNeeded(15)).toBeDefined();
    });
    it('should return a number', function () {
        expect(typeof carsNeeded(10)).toBe("number");
    });
    it('should return 1 when passed the value 4', function () {
        expect(carsNeeded(4)).toBe(1);
    });
    it('should return 4 when passed the value 16', function () {
        expect(carsNeeded(16)).toBe(4);
    });
});

// given 3 parameters (total # of slices, number of recipients, & slices per person) determine if it is possible to split a pie fairly.
describe('equalSlices', function () {
    it('should be a defined function', function () {
        expect(equalSlices(8, 3, 2)).toBeDefined();
    });
    it('should return a boolean value', function () {
        expect(equalSlices(8, 3, 2)).toBeTruthy();
    });
    it('should return true when passed the values (8, 3, 2)', function () {
        expect(equalSlices(8, 3, 2)).toBe(true);
    });
    it('should return false when passed the values (5, 6, 1)', function () {
        expect(equalSlices(5, 6, 1)).toBe(false);
    });
});

// function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s"
describe('isPlural', function () {
    it('should be a defined function', function () {
        expect(isPlural("dudes")).toBeDefined();
    });
    it('should return a boolean value', function () {
        expect(isPlural("dudes")).toBeTruthy();
    });
    it('should return true when passed the string "dudes"', function () {
       expect(isPlural("dudes")).toBe(true);
    });
    it('should return false when passed the string "mood"', function () {
        expect(isPlural("mood")).toBe(false);
    });
})