
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
var uppercaseWords = [];

function upperCaseFirstLetter() {

for (var i = 0; i < words.length; i++){
    var word = words[i];
    var firstLetter = word[0].toUpperCase(); // Uppercase first letter
    var restOfWord = word.slice(1);
    // console.log("Word: " + i + " " + firstLetter + restOfWord);
    uppercaseWords.push(firstLetter + restOfWord);

}
return uppercaseWords;
}

// console.log(upperCaseFirstLetter());


// ============================================================================================

var h1Element = document.querySelector(".one");
h1Element.insertAdjacentHTML('afterend', "Yaaaaayyyy!");
h1Element.style.color = 'red';

var h2Element = document.querySelector(".two");
// h2Element.css("background", "black").css("color", "blue");
h2Element.style.backgroundColor = "black";
h2Element.style.color = "blue";
h2Element.style.display = "inline-block";