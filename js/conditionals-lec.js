
// If Statement
// var  isRaining = true;
//
// if (isRaining){
//     alert("It's raining today!")
// }
//
// console.log();

// If Statement
// var  weather = true;
//
// if (weather === true){
//     alert("It's sunny today!")
// }
//

// ====== If else statement
// var numberOfLives = 3;
//
// if (numberOfLives = 0){
//     alert("Sorry! Game Over!")
// }else{
//
// }

// If Else statement practice
// var lightStatus =  true;
//
// if (lightStatus === true){
//     alert("Lights are on.")
//
// }else{
//     alert("Lights are off.")
// }

// if else if else statement

// if(condition1){
//
// }else if(condition2){
//
// }else{
//
// }

// ========If/Else If/Else Example =======
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }


// ========= If/Else If/Else practice ====



// function currentTrafficLightColor(lightColor) {
//     if (lightColor === "green" ){
//         return "Traffic light color is green. Go!";
//
//     } else if (lightColor === "yellow"){
//         return "Traffic light color is yellow. Slow down!";
//     }
//     else {
//         return "Traffic light color is red. Stop!";
//     }
// }
//
// console.log(currentTrafficLightColor("green"));


// ========= Ternary practice ====

function currentTrafficLightColor(lightColor) {
    switch (lightColor) {
        case "green":
            return "Traffic light color is green. Go!";
            break;
        case "yellow":
            return "Traffic light color is yellow. Slow down!";
            break;
        default:
            return "Traffic light color is red. Stop!";
            break;
    }

}
console.log(currentTrafficLightColor("yellow"));


// ============ Ternary Operator (Shorthand If/Else)

// 'use strict';

// var message;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }

// the above if/else can be re-written as:
// var success = false;
// var message = (success) ? "Operation was successful." : "Oops, something went wrong.";
// console.log(message);

// ==================
function shoppingComplete(boxChecked) {
    if (boxChecked === true ) {
        return "Child has earned $10 this week.";
    }else {
        return "Child has earned $5 this week."
    }
    }

    console.log(shoppingComplete(false));









