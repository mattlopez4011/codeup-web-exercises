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
let userEmails = users.map(function (user) {
    return user.email

});

// console.log(userEmails);
// ==============================

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalYearsExperience = users.reduce(function (totalYears, user) {
    return (totalYears += user.yearsOfExperience)
}, 0) / users.length;

// console.log(totalYearsExperience);


// Use .reduce to get the longest email from the list of users.

let longestUserEmail = users.reduce(function (email, user) {
    if()
    // return email = user.email
    console.log(email);
}, '');






