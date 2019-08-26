var cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "Jane Smith",
            age: 31
        }
    }
];

// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");
// console.log("The car is " + cars[0].make + "  " + cars[0].owner.name + " Is the car owners name.");

// console.log("Here are all the features of all the cars: ");

cars.forEach(function(car) {
    car.features.forEach(function(feature) {
        // console.log(feature);

    });

});

// ====== Looping through cars array



// ====== Loop through all the car owner
var carOwner = "";

for(var i = 0; i < cars.length; i++){
   // carOwner += cars[i].owner.name + ' ';
   // carOwner += "Owner # " [i] + " is " + cars[i].owner.name;
    carOwner += cars[i].make;

}

// console.log(carOwner);


// ==================================================================
// Vivian's Loop, arrays and objects practice

var aphorisms = [

    {
        "quote": "Just keep pushing... even with life-mud in your eyes, and a major lack of understanding when it comes to the effect your efforts even have... it may pay off in ways you didn’t see coming (cause I mean, no one can really see that well through life-mud). If you just keep moving, the void has a much harder time swallowing you whole. You have the higher ground...",
        "author": "Halie Koehler"
    },
    {
        "quote": "Whether if you think you can... or if you think you can.. you're right!",
        "author": "Henry Ford"
    },
    {
        "quote": "Promise me you'll always remember: you're braver than you believe, and stronger than you seem, and smarter than you think",
        "author": "Winnie the Pooh"
    },
    {
        "quote": "Let's refine the problem statement",
        "author": "Zach Gulde"
    },
    {
        "quote": "UPDATE is a code smell",
        "author": "Zach Gulde"
    },
    {
        "quote": "It's more fun to talk with someone who doesn't use long, difficult words but rather short, easy words like 'What about lunch?'",
        "author": "Winnie the Pooh"
    },
    {
        "quote": "Mathematics is not a spectator sport",
        "author": "Polya"
    },
    {
        "quote": "The process of doing a second draft is the process of making it look like you knew what you were doing all along",
        "author": "Neil Gaiman"
    },
    {
        "quote": "Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all one's lifetime.",
        "author": "Mark Twain"
    },
    {
        "quote": "Seek mentors, mentorship, and be a mentor. Coffee has a huge ROI",
        "author": "Jason Straughan"
    },
    {
        "quote": "You were designed for accomplishment, engineered for success, and endowed with the seeds of greatness.",
        "author": "Zig Ziglar"
    },
    {
        "quote": "Whatever you are, be a good one.",
        "name": "Abraham Lincoln"
    },
    {
        "quote": "Mathematics, you see, is not a spectator sport. To understand mathematics means to be able to do mathematics. And what does it mean [to be] doing mathematics? In the first place, it means to be able to solve mathematical problems",
        "author": "Polya"
    },
    {
        "quote": "Always remember, your focus determines your reality",
        "author": "George Lucas"
    },
    {
        "quote": "You don't start out writing good stuff. You start out writing crap and thinking it's good stuff, and then gradually you get better at it. That's why I say one of the most valuable traits is persistence.",
        "author": "Octavia Butler"
    },
    {
        "quote": "In many cases, the more you try to compete, the less competitive you actually are.",
        "author": "Kathy Sierra"
    },
    {
        "quote": "If you can't solve a problem, then there is an easier problem you can solve: find it.",
        "author": "Polya"
    },
    {
        "quote": "Discipline is choosing between what you want now and what you want most.",
        "author": "unknown"
    },
    {
        "quote": "Learning a skill requires practicing that skill",
        "author": "Luis Montealegre"
    },
    {
        "quote": "Programming is more about practicing than studying: a little bit of study but a lot of practice",
        "author": "Luis Montealegre"
    },
    {
        "quote": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        "author": "Albert Einstein"
    },
    {
        "quote": "It's not what you know, it's when you know it.",
        "author": "Kathy Sierra"
    },
    {
        "quote": "A dream written down with a date becomes a goal. A goal broken down into steps becomes a plan. A plan backed by action becomes reality.",
        "author": "Greg Reid"
    },
    {
        "quote": "Test Driven Development is to software engineering what double-entry bookkeeping is to Accounting",
        "author": "Ryan Orsinger"
    },
    {
        "quote": "It's so much easier to be negative and cynical and predict doom for the world than it is to try and figure out how to make things better. We have an obligation to do the latter.",
        "author": "Jim Henson"
    },
    {
        "quote": "If you get, give. If you learn, teach",
        "author": "Maya Angelou"
    },
    {
        "quote": "I can think. I can wait. I can fast.",
        "author": "Siddhartha in Siddhartha by Herman Hesse"
    },
    {
        "quote": "There is no such thing as a failed experiment, only experiments with unexpected outcomes",
        "author": "Buckminster Fuller"
    },
    {
        "quote": "Momentum begets momentum",
        "author": "Gil Penchina"
    },
    {
        "quote": "It takes years to get years of experience",
        "author": "Retired General and USAA CEO."
    },
    {
        "quote": "Enlightenment means to lighten your load, to lighten up!",
        "author": "anonymous"
    },
    {
        "quote": "We don't make mistakes, just happy little accidents.",
        "author": "Bob Ross"
    },
    {
        "quote": "We won’t be distracted by comparison if we are captivated with purpose",
        "author": "unknown"
    },
    {
        "quote": "Let your focus be your hocus pocus!",
        "author": "Ryan Orsinger"
    },
    {
        "quote": "The first rule of magic: Get off your ass!",
        "author": "Ryan Orsinger"
    },
    {
        "quote": "Make your customers more awesome! Upgrade your user, not your product... make people better at something they want to get better at",
        "author": "Kathy Sierra"
    },
    {
        "quote": "The only way to deep happiness is to do something you love to the best of your ability",
        "author": "Richard Feynman"
    },
    {
        "quote": "Fall down seven times, get up eight.",
        "author": "Japanese Proverb"
    },
    {
        "quote": "build something 100 people love, not something 1 million people kind of like",
        "author": "Brian Chesky"
    },
    {
        "quote": "Abiding avoidant behavior in yourself is a road paved to only one thing: getting better at avoidant behavior.",
        "author": "Ryan Orsinger"
    },
    {
        "quote": "Practicing sewing/designing clothes? If all you have is expensive cloth, you'll never want to cut and learn to sew. No one learns to drive in a Ferrari on a mountain road.",
        "author": "Kathleen Dollard"
    },
    {
        "quote": "Computer science is about computers in the same way that astronomy is about telescopes. Rather than being about our tools, we're formalizing ways for discussing and designing processes.",
        "author": "Professor Gerald Jay Sussman"
    },
    {
        "quote": "If you have the words, you can more easily speak the language",
        "author": "Zora"
    },
    {
        "quote": "If it aint in source control then it doesn't exist.",
        "author": "Jason Straughan"
    },
    {
        "quote": "Success is the progressive realization of a worthy goal",
        "author": "Earl Nightengale"
    },
    {
        "quote": "The strangest secret of success: We become what we think about",
        "author": "Earl Nightengale"
    },
    {
        "quote": "Learning a skill requires practicing that skill",
        "author": "Luis Montealegre"
    },
    {
        "quote": "You can't teach a kid to ride a bike at a seminar",
        "author": "David Sandler"
    },
    {
        "quote": "Talent is a pursued interest. In other words, anything you are willing to practice, you can do.",
        "author": "Bob Ross"
    },
    {
        "quote": "Know the brain you have to get the brain you want",
        "author": "Julia Galef"
    },
    {
        "quote": "Take baby steps, just dont stop.",
        "author": "Luis Montealegre"
    },
    {
        "quote": "If at first you don't succeed, slow down and try a smaller task.",
        "author": "Ryan Orsinger"
    },
    {
        "quote": "What’s the one thing you can do, such that by doing it, everything else will be easier or unnecessary?",
        "author": "Gary Keller"
    },
    {
        "quote": "You can't buy focus. But you can rent it by paying attention to what you're doing.",
        "author": "Ryan Orsinger"
    },
    {
        "quote": "If you want to achieve greatness, stop asking for permission!",
        "author": "anonymous"
    },
    {
        "quote": "Sometimes, the best debugger is a good night's rest. Or a walk.",
        "author": "Ryan Orsinger"
    },
    {
        "quote": "When encounering a bug or something unexpected, do you find your first emotional reaction to be delight, curiosity, confusion, or irritation? Which one of those is most sustainable?",
        "author": "Ryan Orsinger"
    },
    {
        "quote": "What if the Hokey Pokey really IS what it's all about?",
        "author": "anonymous"
    },
    {
        "quote": "Never say, 'oops'. Always say, 'Ah, interesting'.",
        "author": "anonymous"
    },
    {
        "quote": "You're going to make mistakes. The real mistake is not learning from them",
        "author": "anonymous"
    },
    {
        "quote": "A ship in port is safe, but that's not what ships are built for.",
        "author": "Admiral Grace Hopper"
    }
];

//TODO: Set the array of objects equal to the variable 'aphorisms' √

//TODO: Console.log 'aphorisms'. Explore the data structure. What are some things you notice?
// console.log(aphorisms);

//TODO: How do we know this is an array of objects?
// The console log is showing the 61 objects in a array.


//TODO:How long is this array?
// 61

//TODO: Assign the first quote/author object to the variable firstQuote. Log the quote from the variable. Log the author from the variable.
var firstQuote = aphorisms[0];

// console.log(firstQuote);

//TODO: Assign the last quote/author object to the variable lastQuote. Log the quote from the variable. Log the author from the variable.
var lastQuote = aphorisms[aphorisms.length-1];
// console.log(lastQuote);

//TODO: Without using a loop, log the first 5 quotes and their author in the format "quote" + "-author"
//Example: "build something 100 people love, not something 1 million people kind of like -Brian Chesky"
// console.log(aphorisms[0].quote + " " + "-" + aphorisms[0].author);
// console.log(aphorisms[1].quote + " " + "-" + aphorisms[1].author);
// console.log(aphorisms[2].quote + " " + "-" + aphorisms[2].author);
// console.log(aphorisms[3].quote + " " + "-" + aphorisms[3].author);
// console.log(aphorisms[4].quote + " " + "-" + aphorisms[4].author);

//TODO: After doing this 'manually' why is a loop more beneficial?
// It would be more efficient and faster to use a loop, plus the loop would be more dynamic.


//TODO: Write a function named 'formatQuote' that accepts an aphorism object and returns a string containing the quote and author in the format "quote" + "-author"
//Example Input:
//      {
//         "quote": "What’s the one thing you can do, such that by doing it, everything else will be easier or unnecessary?",
//         "author": "Gary Keller"
//      }
//Example Output: What’s the one thing you can do, such that by doing it, everything else will be easier or unnecessary? -Gary Keller"
function formatQuote(aphorism) {

    return aphorism[0].quote + " -" + aphorism[0].author;

}

// console.log(formatQuote(aphorisms));


//TODO: Write a function named getRandomQuote, √
// that accepts the aphorisms array, √
// and returns a string that contains a random quote and author in the format "quote" + "-author".√

function getRandomQuote(aphorism) {
    var i = Math.floor(Math.random() * aphorism.length);  // returns a random number
    return aphorism[i].quote + " -" + aphorism[i].author;

}

// console.log(getRandomQuote(aphorisms));

//TODO: Write a function named fiveRandomQuotes, √
// that accepts the aphorisms array √
// and returns an array of five random quotes √
// and authors in the format "quote" + "-author".

function fiveRandomQuotes(aphorismsArray) {
    // fiveRandomQuotes is class of a <p> on DOM
    var fiveRandomQuotes = '';
    // Create empty array
    var emptyArray = [];

    // Create for loop to iterate 5 times
    for (var i = 0; i < 5; i++){
        // In the loop have random number generator to pick index for quote and author
        var r = Math.floor(Math.random() * aphorismsArray.length);  // returns a random number

        // Create empty object to push into empty array
        var emptyObjects = {};

        // Pull quote and authors we want from array and assign them into the empty object
        emptyObjects = aphorismsArray[r];

        // console.log(emptyObjects);


        // Push the custom object into empty array
        emptyArray.push(emptyObjects)

    }

    emptyArray.forEach(function (object) {
        // console.log(object);
        // console.log(object.quote + " -" + object.author);
        fiveRandomQuotes += object.quote + " -" + object.author + '<br>' + '<br>';
    });

    // console.log(fiveRandomQuotes);
    return fiveRandomQuotes;


    // console.log(emptyArray);
    return emptyArray
}

// console.log(fiveRandomQuotes(aphorisms));
// document.querySelector('.fiveRandomQuotes').innerHTML = fiveRandomQuotes(aphorisms);


//TODO: Write a function named 'anonQuotes' √
// that accepts the aphorisms array √
// and returns an array of aphorism objects of all quotes by 'anonymous'.
// Each object should contain the following properties: { quote: <QUOTE_HERE>, author: <AUTHOR_HERE>}.

function anonQuotes(aphorisms) {
    // Need empty array to return all quotes by 'anonymous'
    var anonymousQuotesArray = [];

    // Loop through aphorisms array
    aphorisms.forEach(function (aphorism) {
        // Empty object holding the objects that contain quotes by 'anonymous'
        var anonymousQuotesObjects = {};

        // Add a conditional statement to find the objects that have quotes by 'anonymous'
        if(aphorism.author === 'anonymous'){
            // console.log(aphorism, typeof aphorism );

            // anonymousQuotesObjects += aphorism;
            anonymousQuotesObjects = aphorism; //Pushing quotes by 'anonymous' into anonymousQuotesObjects
            // console.log(anonymousQuotesObjects);
            // anonymousQuotesArray.push(aphorism); //Pushing quotes by 'anonymous' into anonymousQuotesArray

        }else{
            return '';
        }

        // Push objects with 'anonymous' quotes into anonymousQuotesArray
        anonymousQuotesArray.push(anonymousQuotesObjects);

    });

    // console.log(anonymousQuotesArray);
    return anonymousQuotesArray; // Return quotes by author anonymous

}

// console.log(anonQuotes(aphorisms));

//TODO: Write a function named 'everyOddQuote', √
// that accepts the aphorisms array √
// and returns an array of objects of every odd indexed quote. √
// Each object should contain the following properties: { id: <INDEX_HERE>, quote: <QUOTE_HERE>, author: <AUTHOR_HERE>, rating: <RANDOM_RATING_HERE>}.
// The random rating should be a number between 1 and 5.
function everyOddQuote(aphorisms) {
    // Create empty array to hold every odd indexed quote
    var oddIndexedQuotesArray = [];


    // Create for loop to iterate over every other object in array and push results to empty array oddIndexedQuotesArray
    for (var i = 1; i < aphorisms.length; i += 2){
        // console.log(aphorisms[i], "Index number " + i);
        oddIndexedQuotesArray.push(aphorisms[i]);
    }

    console.log(oddIndexedQuotesArray);
    console.log(oddIndexedQuotesArray[0]);

    // Add id property to each object in array

    // Add rating property to each object in array.

}

console.log(everyOddQuote(aphorisms));


// =====================================================================
var text = ""; // This will display data in box div.
var text2 = ""; // This will display data in box2 div.
var newArray = [];
var newObjects = {};
// Object YouTube
var myYoutubeVideo = {
    title: 'Walk Through Tomorrowland',
    videoLength: '15',
    videoCreator: 'Caleb Gonzales',
    videoDescription: 'this is a video description and a long one'

};
text = 'Hey new video on ' + myYoutubeVideo.title + " by " + myYoutubeVideo.videoCreator;
text = myYoutubeVideo.testProperty = 'Test value';
text2 = myYoutubeVideo;
// console.log(myYoutubeVideo);

// Adding myYoutubeVideo object into newObjects
// console.log(newObjects);
newObjects = myYoutubeVideo;
// console.log(newObjects);

// Push newObjects into newArray
// console.log(newArray);
newArray.push(newObjects);
// console.log(newArray);

// Create new videoCreatorInto property and nest age and ethnicity
// newObjects[0].videoCreatorInfo.age = '30';
myYoutubeVideo.videoCreatorInfo = {};
myYoutubeVideo.videoCreatorInfo.age = '30';
myYoutubeVideo.videoCreatorInfo.ethnicity = 'hispanic';
// console.log(newObjects);
// console.log(myYoutubeVideo);
// console.log(newArray);

// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);
// console.log('Hey new video on ' + myYoutubeVideo.title + " by " + myYoutubeVideo.videoCreator);
document.querySelector('.box').innerHTML = text;
document.querySelector('.box2').innerHTML = text2;


