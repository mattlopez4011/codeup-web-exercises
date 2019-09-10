// // const numbers = ['A', 'B', 'C', 'D', 'E'];
// const numbers = [1, 2, 3, 4, 5];
//
//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     // return accumulation + currentNumber;
//     console.log('Accumulation ' + accumulation);
//     console.log('Current number ' + currentNumber);
//     return accumulation
//
// }, 0);
//
// console.log(sum);


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let threePlusLanguages = users.filter(function (user) {
    return user.languages.length >= 3

});

// console.log(threePlusLanguages);
// =====================================


// Use .map to create an array of strings where each element is a user's email address
let userEmails = users.map((user) =>  user.email);

// console.log(userEmails);
// ==============================

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalYearsExperience = users.reduce(function (totalYears, user) {
    return (totalYears += user.yearsOfExperience)
}, 0) / users.length;

// console.log(totalYearsExperience);


// Use .reduce to get the longest email from the list of users.
let longestUserEmail = users.reduce(function (longest, user) {
    // email = user.email;
    // console.log(email);
    if( user.email.length > longest.length  ){
        return user.email;
    }
    else{
        return longest;
    }
    return longest

}, '');


// console.log(longestUserEmail);
// ====================================

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let usersName = users.reduce( function(finalString, user, index) {
    if(index === users.length -1){
        return finalString + `and ${user.name}. `
    }
    else{
        return finalString + `${user.name}, `
    }
}, 'Your instructors are: ');



// console.log(usersName);


// Bonus 🏆
// Use .reduce to get the unique list of languages from the list of users.
const uniqueLangs = users.reduce((listOfLangs, user) => {
    for(const lang of user.languages){
        if(listOfLangs.indexOf(lang) === -1){
            listOfLangs.push(lang);
        }

    }
    return listOfLangs
},[] );

// console.log(uniqueLangs);



// ==============================
// Justin's Bonuses

<!-- Custom JS -->


const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];

// PROBLEM 1 - create an array of the first letters of each fruit
let firstLetterOfFruitNames = fruits.map(function (fruit) {
    return fruit.charAt(0)
    
});

// console.log(firstLetterOfFruitNames, typeof firstLetterOfFruitNames);

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
let userNameAndAge = customers.map(function (customer) {

    return {name: customer.name, age: customer.age }


});

// console.log(userNameAndAge);

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
let civilServants = customers.filter(function (customer) {
    // return customer.name
    if(customer.occupation === 'Teacher'){
        return customer
    }else if(customer.occupation === 'Police Officer'){
        return customer
    }

});

console.log(civilServants);

// PROBLEM 4 - determine the average age of customers

// PROBLEM 5 - create a function makeSuperPet() that takes in the pets array as input and returns a single pet object
// with the following shape...
/*

    {
        name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
        age: THE_TOTAL_OF_ALL_PET_AGES,
        breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
    }

 */

// PROBLEM 6 - take in an array of pets and return an array of the length of first names for pugs only
// your output for the given input should be [3, 6] for 'Bud' and 'Bowser'


// PROBLEM 7 - create a function getFemaleFamilyMembers() that when given the family variable as an argument,
// returns an array of female family member names

// PROBLEM 8 - create a function makeLongPetString() that when given the variable of pets,
// returns a string of all property values with dashes separating each property value

// PROBLEM 9 - create a function that when given an array of first names, returns an array of the same names with a last name of Smith

// input = ['Sally', 'Fred', 'Steve']
// output = ['Sally Smith', 'Fred Smith', 'Steve']


// PROBLEM 10 - create a function that when given an array of numbers, returns the sum of even numbers

// PROBLEM 11 - create a function that when given an array of numbers, returns the sum of all numbers evenly divisible by 10

// PROBLEM 12 - create a function that when given an array of names, returns a string of all the first letters of each name

// PROBLEM 13 - create a function that when given an array of values, returns an array of only the truthy values

// PROBLEM 14 - create a function that when given an object, returns the property values as an array of elements

// PROBLEM 15 - create a function that when given an object, returns the property values as an array of elements

// PROBLEM 16 - create a function that when given three arguments: a min num, a max num, an array
// of nums will return the array of nums that are only between the min and max values, inclusive

// PROBLEM 17 - create a function that when given an array of strings, returns an array of objects
// with properties for the given string value and the length of the string and the string without vowels (not including y)











