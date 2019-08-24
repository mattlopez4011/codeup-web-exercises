"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
//
// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
//
// isNegative(-1) // true
// isNegative(-5) // true
// isNegative(0) // false
// isNegative(6) // false
function isNegative(input) {
    var inputNum = parseFloat(input);
    return inputNum < 0;

}

// Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.
//
// isTen(1) // false
// isTen(10) // true
// isTen('10') // false
function isString(input){

    return typeof input === 'string'
}

function isTen(input) {
    // return parseFloat(input) === 10


    if(isString(parseFloat(input)) === 10){
        return parseFloat(input) === 10
    }else if(input === 10){
        return true;
    }else{
        return false
    }

}

// Write a function named double that accepts a number and returns the number doubled.
//
// double(5) // 10
// double(20) // 40
function double(input) {
    return ( parseFloat(input) + parseFloat(input) )

}

// Write a function named remove9s that accepts an array of numbers and returns an array with all the same numbers except for 9.
//
//     remove9s([7, 8, 9, 10]) // [7, 8, 10]
// remove9s([1, 2, 3])     // [1, 2, 3]
// remove9s([9, 9, 9])     // []

function remove9s(input) {


    for( var i = 0; i < input.length; i++){
        if ( input[i] === 9) {
            input.splice(i, 1);
            i--;
        }
    }
    // console.log(input);
    return input

}

// Write a function named average
// that accepts an array of numbers
// and returns the average of those numbers.
//
// average([1, 2, 3]) // 2
// average([4, 6, 8, 10, 12]) // 8
// average([1, 2]) // 1.5
function average(input) {
    var inputNum0 = parseInt(input[0].toFixed(1));
    var inputNum1 = parseInt(input[1].toFixed(1));
    var inputNum2 = parseInt(input[2].toFixed(1));

    // round(1.005, 2); // 1.01

    // console.log(inputNum0);
    // console.log(inputNum1);
    // console.log(inputNum2);

    // console.log((inputNum0 + inputNum1 + inputNum2) / 3);
    return (inputNum0 + inputNum1 + inputNum2) /3;


}


// Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
//
// countOdds([1, 2, 3]) // 2
// countOdds([4, 6, 8, 10]) // 0
// countOdds([1, 2, 1, 1]) // 3

function countOdds(numsArray){

    var counter = {
        odds : 0,
        negatives : 0,
        avg : 0,
        median : 0
    }

    for(var i = 0; i < numsArray.length; i++) {

        if(numsArray[i] % 2 === 1) {
            counter.odds++ }

        if(numsArray[i] < 0) {
            counter.negatives++ }
    }

    // console.log(counter.odds);
    return counter.odds

}



// Write a function named convertNameToObject
// that accepts a string
// that contains a first name and last name separated by a space character,
// and returns an object with properties firstName and lastName.
//
// convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}

function convertNameToObject(input) {
    var namesArray = input.split( ' ');

    // console.log(namesArray[0] + namesArray[1]);

    var fullName = {
        firstName: namesArray[0],
        lastName: namesArray[1]
    };

    // console.log(fullName);
    return fullName;

}



// Write a function named capitalizeName
// that accepts a string
// that is a first and last name separated by a space,
// and returns a string that that has the first and last names capitalized.
//
//     For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.
//
// capitalizeName('ron weasley') // "Ron Weasley"

function capitalizeName(input) {
    var namesArray = input.split( ' ');

    // console.log(namesArray[0] + namesArray[1]);

    // console.log(namesArray);
    // console.log(namesArray[0].charAt(0).toUpperCase() + namesArray[0].slice(1) + " " + namesArray[1].charAt(0).toUpperCase() + namesArray[1].slice(1)  );



    // console.log(fullName);
    return namesArray[0].charAt(0).toUpperCase() + namesArray[0].slice(1) + " " + namesArray[1].charAt(0).toUpperCase() + namesArray[1].slice(1) ;

}



// Write a function named capitalizeAllNames
// that accepts an array of strings
// where each string is in the format described in the previous problem,
// and returns an array of strings
// where each string contains a capitalized named.
//
// capitalizeAllNames(['ron weasley', 'harry potter', 'hermione granger'])
// // ['Ron Weasley', 'Harry Potter', 'Hermione Granger']
function capitalizeAllNames(input) {
    // console.log(input);
    // console.log(input[0]);
    // console.log(input[0].charAt(0).toUpperCase()+ input[0].slice(1));
    // console.log(input[0].charAt(0).toUpperCase() + input[0].slice(1) + " " + input[1].charAt(0).toUpperCase() + input[1].slice(1));
    // var splitArray = input.join(',');

    // console.log(splitArray);
    // console.log(splitArray[0]);



}
//



// Write a function named countVowels that accepts a string and returns the number of vowels in that string. (Don't worry about or count "y" as a vowel)
//
// countVowels('Hello, Codeup!') // 5




// Write a function named averageSales
// that accepts an array of objects
// where each object represents a person, and has a sales property.
// The function should return the average of every object's sales property.
//
// averageSales([
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ])
// // 100

function averageSales(input) {
    console.log(input);
    // console.log(input[0].sales + input[1].sales + input[2].sales + input[3].sales );

    if(input.length === 3){
        console.log(input[0].sales);

        console.log( (input[0].sales + input[1].sales + input[2].sales + input[3].sales ) /3 );
        return  (input[0].sales + input[1].sales + input[2].sales + input[3].sales ) /3 ;

    }else if(input.length === 4){
        return (input[0].sales + input[1].sales + input[2].sales + input[3].sales + input[4].sales ) /3;
    }

}

function averageSales(salesPeople) {
    var sales = [];
    salesPeople.forEach(function (salesPerson) {
        sales.push(salesPerson.sales);

    });
    // return average(sales);

    var total = 0;
    sales.forEach(function (num) {
        total += num;

    });
    return total / sales.length;

}


// Write a function named analyzeWord. It should take in a string and return an object with information about the input word. The object returned should have the following properties:
//
//     word: the original word that was passed into the function
// numberOfLetters: the number of letters in the word
// numberOfVowels: the number of vowels in the word
// analyzeWord('codeup')
// // { word: 'codeup', numberOfLetters: 6, numberOfVowels: 3 }

function analyzeWord(word) {
    return {
        word: word,
        numberOfLetters: word.length,
        numberOfVowels: countVowels(word)
    }

}


// Write a function named analyzeAllWords. It should take in an array of strings, and return an array where each element contains an object with the same analysis of the word as described in the previous problem.
//
// analyzeAllWords(['html', 'css', 'javascript'])
// /**
//  * [
//  *   {word: 'html', numberOfLetters: 4, numberOfVowels: 0},
//  *   {word: 'css', numberOfLetters: 3, numberOfVowels: 0},
//  *   {word: 'javascript', numberOfLetters: 10, numberOfVowels: 3}
//  * ]
//  */

function analyzeAllWords(words){
    var arr = [];
    words.forEach(function (word) {
        arr.push(analyzeWord(word))

    });
    return arr;

}