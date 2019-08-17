function isBoolean(input) {
    return typeof input == "boolean";
}


// ===========
// === isNumeric
function isNumeric(input) {
    if (input === true || input === false || input === null){
        return false;
    }else{
        return !isNaN(input);
    }
}

///Lemon solution
function isNumeric(val) {
    return !isNaN(parseFloat(val));
}

// Davids solution
function isNumeric(input) {
    return !isNaN(parseFloat(input));
}

// ==============
// ==== isString
function isString(input) {
    return value === String(input);

}

function isString(input) {


}

// ========
// isArray
function isArray(input) {
    return Array.isArray(input);

}

// ===============
// isNegative
function isNegative(input) {
    return input < 0;
}

// ==========
// isPositive
function isPositive(input) {
    if (!isNumeric(input)){
        return false
    }  else {
        return input > 0;
    }
}

function isPositive(input) {
    return parseFloat(input) > 0;
}


// =================
// increment
function increment(input) {
    if (isNumeric(input)){
        return input + 1;
    } else {
        return false;
    }
}

// ================
// decrement
function decrement(input) {
    if (isNumeric(input)){
        return input - 1;
    } else {
        return false;
    }
}

// ================
// Square
function decrement(input) {
    var numIsNumeric = isNumeric(input);
    console.log(numIsNumeric);
    if (numIsNumeric){
        // return input * 1;
        // return Math.pow(input, 2);
    } else {
        return false;
    }
};

  // ===========
// upperCase
function upperCase(input) {
    if (typeof input === "string"){
        input = input.toUpperCase();
        return input;

    } else{
        return false;
    }


}

// ====Davids solution
function upperCase(input) {
    if (isString(input) && !isNumeric(input)){
        return input.toUpperCase();
    } else{
        return false;
    }

}

// ===========
// isPalindrome

// Source: https://medium.com/sonyamoisset/reverse-a-string-in-javascript-a18027b8e91c
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}


function isPalindrome(input) {
    if (isString(input)) {
        return reverseString(upperCase(input)) === upperCase(input);
    } else {
        return false;
    }
}

// ==============
// getHighestNumber
function getHighestNumber(num1, num2, num3) {
    if(!isNumeric(num1) || !isNumeric(num2) || !isNumeric(num3)
    {
        return false;
    }
    var max = parseFloat(num1);

    if(parseFloat(num2) > max){
        max = parseFloat(num2)
    }

    if(parseFloat(num3) > max){
        max = parseFloat(num2)
    }
    return max;
}


// ======Mark solution
function getHighestNumber(num1, num2, num3) {
    if(!isNumeric(num1) || !isNumeric(num2) || !isNumeric(num3)
    {
        return false;
    } else{
        return Math.max(num1,num2,num3)
    }

}

// =============
// containsVowel

function containsVowel(input) {
    if (!isString(input)){
        return false;
    }
    var caseInsensitive = upperCase(input);
    if (caseInsensitive.indexOf("A") > -1 ||
        caseInsensitive.indexOf("E") > -1 ||
        caseInsensitive.indexOf("I") > -1 ||
        caseInsensitive.indexOf("O") > -1 ||
        caseInsensitive.indexOf("U") > -1)
    {
        return true;
    } else{
        return false;
    }

}


// -==============
// add
function add(num1, num2) {
    if (isNumeric(num1) && isNumeric(num2)){
        return parseFloat(num1) + parseFloat(num2);
    }else{
        return false;
    }

}

// ============
// multiply

function multiply(num1, num2) {
    if (isNumeric(num1) && isNumeric(num2)){
        return parseFloat(num1) * parseFloat(num2);
    }else{
        return false;
    }

}


// =================
// sumOfSquares

function sumOfSquares(num1, num2) {
//     if (isNumeric(num1) && isNumeric(num2)){
//         return (num1 * num1) * (num2 * num2);
//     }else{
//         return false;
//     }
//
// }

function sumOfSquares(num1, num2) {
    if (isNumeric(num1) && isNumeric(num2)){
        return add(square(num1), square(num2));
    }else{
        return false;
    }

};

