// While loop example:
//     while (i < 10) {
//         text += "The number is " + i;
//         i++;
//     }
var testBox = document.querySelector('#test-box');


// function whileLoopMultiplyByTwo() {
//     // return "Hello from inside the function!"
//     var i = 2;
//     var text = "";
//     while(i < 20) {
//         console.log("Number is " + i);
//         testBox.innerHTML =text = "<br>Number is " + i;
//         // i += i;
//         // i += i * 2;
//         // i *= 2;
//         i = i + i;
//
//     }
//     return text;
//
//
// }
//
// whileLoopMultiplyByTwo();
//
// testBox.innerHTML = whileLoopMultiplyByTwo();


function whileLoop2(){
    var i = 2;
    while(i < 70000){
        // console.log(i);
        // i+=3;
        // i = (i + 3);
        i = i + i;
    }
}

// whileLoop2();

// ====

// While Loop 3- Practice

var m = 0;

while (m < 100){
    document.querySelector('#test-box1').innerHTML = [m] + ' Count ' + m;
    // console.log(m);
    m++;
}



// ====== Do While Loop 1 - Practice

// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
//     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones







// function iceCreamShop() {
//     var text = "";
//     var i = 0;
//     do {
//         text += "<br>The iteration is " + i;
//         i++;
//     }
//     while (i < 10);
//     document.querySelector('#demo').innerHTML = text;
//
// }
//
// iceCreamShop();

function iceCreamShop() {
    var text = "";

    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;

    do {
        // This expression will generate a random number between 1 and 5
        var userPurchase = Math.floor(Math.random() * 5) + 1;

        text += "<br>Mom says we can't go home until we sell " + allCones + "<br> <br>";

        if (allCones >= userPurchase){
            allCones = allCones - userPurchase;
            console.log(allCones);
            text += "Customer purchased " + userPurchase + " Total cones left " + allCones;
            console.log("Customer purchased " + userPurchase + " Total cones left " + allCones);

        }else{
            text += "Sorry! I only have " + allCones + "." + " I can't sell you " + userPurchase;
            console.log("Sorry! I only have " + allCones + " I can't sell you " + userPurchase);

        }
    }
    while (allCones > 0);
    text += "<br> Yes! I sold all my Cones! Mom says I can go home now!";
    console.log("Yes! I sold all my Cones! Mom says I can go home now!");

    document.querySelector('#demo').innerHTML = text;

}

// iceCreamShop();








