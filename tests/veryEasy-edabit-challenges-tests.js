describe('hello', function (){
    it('should be a defined function', function () {
        expect(hello()).toBeDefined();
    });
    it('should return the string "hello edabit.com"', function () {
        expect(hello()).toBe("hello edabit.com");
    });
});
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
        expect(getFirstValue()).toBeDefined();
    });
    it('should return the first element in an array', function () {
        expect(getFirstValue([1, 2, 3])).toBe(1);
    });
    it('should return the first element in an array', function () {
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
        expect(acceptIntoMovie()).toBeDefined();
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