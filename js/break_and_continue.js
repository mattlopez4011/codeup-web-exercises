// Instructions:
// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

function oddNumbersBetween1And50(){
    var userNum = +prompt("Enter odd number between 1 and 50");
    var i = 0;

    while (i <= 50) {
        console.log("loop iteration " + i );
        i++;
        // i = i * 2;
        if (userNum % 2 === 0){
            // console.log(userNum);
            var userNum = +prompt("Enter odd number between 1 and 50");
            continue;
            // break;
        }else{
            // console.log(userNum);
            alert("Congrats! You entered an ODD number" + " " + userNum + "!");
            break;
        }
    }
}

oddNumbersBetween1And50();

// ==David's solution===
while(true){
    var num = prompt("Give me an odd number between 0 and 50.");
    if (num % 2 !== 0 && num > 0 && num < 51){
        break;
    }
}



function outputOddNumbersUpTo50ExceptUserNum() {
    console.log(" ");
    var userNum = +prompt("Enter odd number between 1 and 50");
    console.log("Number to skip is: 27");
    for (var i = 0; i <= 50; i++){

        // Skip any even numbers
        if (i % 2 === 0){
            continue;
        }

        if(i === userNum) {
            console.log("Yikes! Skipping number: " + userNum);
        } else{
            console.log("Here is an odd number: " + i);
        }
    }


}
// outputOddNumbersUpTo50ExceptUserNum();

// Expected Output:
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49


