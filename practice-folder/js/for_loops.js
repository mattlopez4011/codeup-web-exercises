// For loop example
function forLoopExample() {
    for (i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
    }

}
// Output:
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70


function showMultiplicationTable(input) {
    var text = "";

    for (i = 1; i <= 10; i++){
        text += "<br>" + input + " x " + [i] + " = " + (input*i) + "<br>";

    }

    document.querySelector('#demo').innerHTML = text;

}

var randomNumber = Math.floor(Math.random() * 10) + 1;

// showMultiplicationTable(randomNumber);


// ==============
// For Loop 2 Example

// Output example:
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd

function randomNumberIsOddOrEven() {
    var text = "";


    for (i = 1; i <= 10; i++){
        var randomNumber = Math.floor(Math.random() * (200 - 20)) + 1;

        if(randomNumber % 2 === 0){
            text += "<br>" + randomNumber + " is " + "even <br>";

        }else{
            text += "<br>" + randomNumber + " is " + "odd" + "<br>";
        }
    }

    // text += randomNumber + " is " + ;
    console.log(randomNumber);

    document.querySelector('#demo').innerHTML = text;
    
}

// randomNumberIsOddOrEven();


// =======================

// For Loop 3 Example

function numberPyramid(){
    var text = "";
    for (i = 1; i < 10; i++){
        console.log(i);
        text += i + "<br>";

        for (a = 1; a < 10; a++){

            var movingNumber = '';
            text += i + 1

            text += i = i * a + "<br>";

        }


    }

    document.querySelector('#demo').innerHTML = text;
}

// numberPyramid();
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


function numPyramid() {
    var text = "";
    for (var i = 1; i <= 9; i++){

        console.log(i.toString().repeat(i));
        text +=  i.toString().repeat(i) + "<br>";

    }
    document.querySelector('#demo').innerHTML = text;
}
// numPyramid();