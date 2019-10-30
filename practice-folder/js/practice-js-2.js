
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
var uppercaseWords = [];

function upperCaseFirstLetter() {

for (var i = 0; i < words.length; i++){
    var word = words[i];
    var firstLetter = word[0].toUpperCase(); // Uppercase first letter
    var restOfWord = word.slice(1);
    console.log("Word: " + i + " " + firstLetter + restOfWord);
    uppercaseWords.push(firstLetter + restOfWord);

}
return uppercaseWords;
}

console.log(upperCaseFirstLetter());
