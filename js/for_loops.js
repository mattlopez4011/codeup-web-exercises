function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++){
        var multiply = i * 7;
        console.log("7 x " + i + " = " + multiply);

    }

    
}
// showMultiplicationTable();

// =====================================================
// 1) Generate 10 random numbers between 20 and 200.
// 2) console log if number is odd or even.
// This expression will generate a random number between 20 and 200


// == Function check if number is even or odd ===
function isNumberEvenOrOdd(numberFromUser) {
    if (numberFromUser % 2 === 0){
        return "EVEN number!"

    } else {
        return "ODD number!"

    }
}

function generateRandomNumberCheckIfEvenOrOdd() {


    for (var i = 1; i <= 10; i++){
        var randomNumberBetween20And200 = Math.floor(Math.random() * 200) + 20;
        var randomNum = randomNumberBetween20And200;
        console.log(randomNum + " is an " + isNumberEvenOrOdd(randomNum));


    }
}

// generateRandomNumberCheckIfEvenOrOdd();


function numPyramid() {
    for (var i = 1; i <= 9; i++){

        console.log(i.toString().repeat(i));

    }
    
}
// numPyramid();

//Expected output:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


// ===============================================

function multiplyByFive() {
    for (var i = 100; i >= 5; i-= 5) {
        console.log(i);

    }

}
// multiplyByFive();
// Expected Output
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// ===============================================




