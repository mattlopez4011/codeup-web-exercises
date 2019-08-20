// Make a function named isNumeric(input) that returns if the input is a number like 5 or 2.3 or a string containing only a number like "2". Example isNumeric(3) is - true. isNumeric("banana") should return false.
function isNumeric(input) {
    return !isNaN(parseFloat(input));

}

// console.log(isNumeric("banana"));

//     Make a function named isEqual(input1, input2) that returns if both inputs have the same value. areEqual
function isEqual(input1, input2) {
    return input1 === input2;

}

// console.log(isEqual(2, 2));

// Make a function named isIdentical(input1, input2) that returns if both inputs are same value and data type.
function isIdentical(input1, input2) {
    return input1 === input2;

}

// console.log(isEqual("2", 2));


//  Make a function named not(input) returns the input with a flipped boolean
function not(input) {
    return input + " " + !input;

}

// console.log(not(false));

// Make a function named isOdd(number) that returns true if the number is odd
function isOdd(input) {
    console.log(input % 2 === 1);

}

// isOdd(3); //true
// isOdd(4); //false
// isOdd(5); //true
// isOdd(10); //false
// isOdd(49); //true
// Make a function named isEven(number) that returns true if the number is even or zero
function isEven(input) {
    return input % 2 === 0 || input === 0;

}

// console.log(isEven(2)); //true
// console.log(isEven(3)); //false
// console.log(isEven(15)); //false
// console.log(isEven(0)); //true


// Make a function named isPositive(number) that returns true if the provided input is a positive number. False for zero or any other number or data type.
function isPositive(input) {
    return parseFloat(input) > 0;

}

// console.log(isPositive(0)); //false
// console.log(isPositive(2)); //true
// console.log(isPositive(-2)); //false
//     Make a function named isNegative(number) that returns true if the provided input is a negative number. False for zero or any other number or data type.
function isNegative(input) {
    return parseFloat(input) < 0;

}

// console.log(isNegative(-1)); //
//     Make a function named identity(input) that returns the input exactly as provided.



//     Make a function named isFive(input)
function isFive(input) {
    return parseFloat(input) === 5;

}

// console.log(isFive(6)); //false
// console.log(isFive(5)); //true
// console.log(isFive("5")); //true

// Make a function named addFive(input) that adds five to some input.
function addFive(input) {
    return parseFloat(input) + 5;

}

// console.log(addFive(5)); // 10
// console.log(addFive(-5)); // 0
// console.log(addFive('2')); // 7


//     Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input) {
    return parseFloat(input) % 5 === 0;

}

console.log(isMultipleOfFive(5)); //true
console.log(isMultipleOfFive(10)); //true
console.log(isMultipleOfFive(8)); //false

// Make a function named isThree(input)
function isThree(input) {
    return parseFloat(input) === 3;

}

// console.log(isThree(3));// true
// console.log(isThree(2));// false
// console.log(isThree('5'));// false
// console.log(isThree('3'));// true


// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input) {
    return parseFloat(input) % 3 === 0;

}

// console.log(isMultipleOfThree(3)); //true
// console.log(isMultipleOfThree("3")); //true
// console.log(isMultipleOfThree(6)); //true
// console.log(isMultipleOfThree(2)); //false

// Make a function named isMultipleOfThreeAndFive(input)

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// Make a function named isTrue(boolean)
// Make a function named isFalse(boolean)
// Make a function named isTruthy(input) // remember that values other than true will behave like true. you may need to lookup truthy/falsy values in JavaScript
// Make a function named isFalsy(input) // remember that values other than false behave like false
// Make a function named isVowel(letter)
// Make a function named isConsonant(letter)
// Make a function named isCapital(letter)
// Make a function named isLowerCase(letter)
// Make a function named hasLowerCase(string) that returns if a string has any lower cased
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named isZero(number)
// Make a function named notZero(input) that returns true if the input is any number except for zero.
//                                                                                                  Write a function named lowerCase(string)
// Write a function named double(n) that returns a number times two
// Write a function named triple(n) that returns a number times 3
// Write a function named quadruple(n) that returns a number times 4
// Write a function named half(n) that returns 1/2 of the provided input
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// Write a function named cube(n) that returns n * n * n
// Write a function named squareRoot(n) that returns the square root of the input
// Make a function named absoluteValue(number) that returns the absolute value of a number.
//     Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//     Write a function named cubeRoot(n) that returns the cube root of the input
// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
// Write a function named degreesToRadians(number)
// Write a function named radiansToDegrees(number)
// Make a function named trim(string) that removes empty spaces before and after the input.
//     Make a function named notNot(input) that the negation of the negation of the input.
//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and - including the number of sides.