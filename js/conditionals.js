"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */

function askUserForNumber() {
    var askForNumber = confirm("Would you like to enter a number?");


    if (askForNumber === true){
         var usersNumber = +prompt("Enter your number:");

         if (isNaN(usersNumber)){
             alert("You did not enter a number value. Please enter a number. Thanks!");

         } else {
             if (usersNumber % 2 === 0){
                 alert("Your number is an EVEN number!");
             } else if (usersNumber % 1 === 0){
                 alert("Your number is an ODD number!");
             }

             if(usersNumber < 0){
                 alert("Your number is an negative number!");
             } else if(usersNumber > 0){
                 alert("Your number is an positive number!");
             }

             if (usersNumber){
                 var usersNumberPlus100 = usersNumber + 100;
                 alert("Your number " + usersNumber + " " + "plus 100 is = " + usersNumberPlus100 );
             }
         }
    }
};
// ======End of askUserForNumber function=======

// Calling the function
// askUserForNumber();


// === Refactored code ===
var askForNumber = confirm("Would you like to enter a number?");


function askUserForNumber(userInput) {
    if(userInput === true){
        return Number(prompt("Enter your number here"));
    } else {
        alert("No Problem! Have great day!")
    }
};
// //===== Calling userNumber variable with function value
// var userNumber = askUserForNumber(askForNumber);
// console.log(userNumber);
//
// // === 3 alerts Start===
// function isNumberEvenOrOdd(numberFromUser) {
//     if (numberFromUser % 2 === 0){
//         alert("Your number is an EVEN number!");
//         return "Your number is an EVEN number!"
//
//     } else if (numberFromUser % 1 === 0) {
//         alert("Your number is an ODD number!");
//         return "Your number is an ODD number!"
//     }
// }
// isNumberEvenOrOdd(userNumber);
//
//
// function isNumberPositiveOrNegative(numValue) {
//     if(numValue < 0){
//         alert("Your number is an negative number!");
//         return "Your number is an negative number!";
//     }   else if(numValue > 0){
//         alert("Your number is an positive number!");
//         return "Your number is an positive number!";
//     }
// }
// isNumberPositiveOrNegative(userNumber);
//
// // === 3 alerts End===
//
//
//
//
//
// function isEnteredValueANumber(userValue) {
//     if(isNaN(userValue)){
//         alert("You did not enter a number value. Please enter a number. Thanks!");
//     } else{
//         alert(userNumber);
//         isNumberEvenOrOdd();
//         isNumberPositiveOrNegative();
//
//     }
// }
//
// isEnteredValueANumber(userNumber);
//
//


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(rColor) {
    if (rColor === "blue"){
        alert("blue is the color of the sky");
    } else if (rColor === "red"){
        alert("Strawberries are red");
    }else if (rColor === "cyan"){
        alert("I don't know anything about cyan");
    }else{
        alert("Your color " + rColor +  " is not one of the favorite");
    }

}

// analyzeColor('blue') // returns "blue is the color of the sky"
// analyzeColor('red') // returns "Strawberries are red"
// analyzeColor('cyan') // returns "I don't know anything about cyan"
// analyzeColor(randomColor, randomColor)// returns "Your color is not one of the favorite"


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
// console.log(analyzeColor(randomColor), randomColor);


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var diffColor = randomColor;
//
// switch(diffColor) {
//     case "blue":
//         alert("blue is the color of the sky");
//         break;
//     case "red":
//         alert("Strawberries are red");
//         break;
//     case "cyan":
//         alert("I don't know anything about cyan");
//         break;
//     default:
//         alert("The color " + diffColor +  " is not one of the favorite");
//         break;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
// var userInputColor = prompt("Enter color here");
// analyzeColor(userInputColor);


/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(userLuckyNumber, userTotalAmount){
    if (userLuckyNumber === 0 ){
        return userTotalAmount;
        // alert("Sorry! No discount this time!")
    }else if (userLuckyNumber === 1){
        var totalAmountAfterDiscount = userTotalAmount - (userTotalAmount * 0.1);

    }else if (userLuckyNumber === 2){
        var totalAmountAfterDiscount = userTotalAmount - (userTotalAmount * 0.25);
        // alert("You win a 25% discount! Yay!")
    }else if (userLuckyNumber === 3){
        var totalAmountAfterDiscount = userTotalAmount - (userTotalAmount * 0.35);
        // alert("You win a 35% discount! Yay!")
    }else if (userLuckyNumber === 4){
        var totalAmountAfterDiscount = userTotalAmount - (userTotalAmount * 0.50);
        // alert("You win a 50% discount! Yay!")
    }else if (userLuckyNumber === 5){
        var totalAmountAfterDiscount = userTotalAmount - (userTotalAmount * 1);
        // alert("You get all your items for FREE! Yay!")
    }
    alert("Your lucky number was " + userLuckyNumber + "\n" + "Total bill before discount is $" + userTotalAmount + "\n" + "Your total bill after discount is $" + totalAmountAfterDiscount );
    return totalAmountAfterDiscount;
}

// console.log(calculateTotal(1, 100)); // returns 90
// console.log(calculateTotal(0, 100)); // returns 100
// console.log(calculateTotal(4, 100)); // returns 50
// console.log(calculateTotal(5, 100)); // returns 0

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

// var userTotalBill = +prompt("What is your total bill?");
//Note======= luckynumber, price before discount, price after discount.

// calculateTotal(luckyNumber , Number(prompt("What is your total bill?")));