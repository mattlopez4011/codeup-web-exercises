(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {};
    // console.log(person);
    person.firstName = "Rick";
    person.lastName = "Sanchez";
    // console.log(person.firstName); // "Rick"
    // console.log(person.lastName); // "Sanchez"


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        return "Hello from " + this.firstName + " " + this.lastName + " !";
    };
    // console.log(person.sayHello());

    person.sayHello = function (input1 , input2) {
        return "Hello from " + input1 + " " + input2 +  "!";

    };
    // console.log(person.sayHello(person.firstName, person.lastName));
    // console.log(person);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // console.log(shoppers[0].name);

    shoppers.forEach(function (shopper) {
        // console.log(shopper.name + " " + shopper.amount + discountSpendMoreThan200(shopper.amount));
    });

    // if shopper spends >= 200 give 12% discount
    function discountSpendMoreThan200(input) {
        var inputNum = parseFloat(input);
        if (inputNum >= 200){

            // console.log(inputNum - (inputNum * 0.12));
            var inputNumWithDiscount = inputNum - (inputNum * 0.12);
            return " 12% " + "Total: " + "$" + inputNumWithDiscount.toFixed(2);

        }else {
            return " No discount " + "Total: " + "$" + inputNum.toFixed(2);
        }

    }
    // discountSpendMoreThan200(200);


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {title:'The island of red',
            author: {
                firstName:"Ryan",
                lastName: "Smith"
        }},
        {title:'King of the hill',
            author: {
                firstName:"Adam",
                lastName:"Scottsdale"

            }
        },
        {title:'The yellow swan',
            author: {
                firstName:"Frank",
                lastName:"Kostova"
            }},
        {title:'The house on the lake',
            author: {
                firstName:"Thomas",
                lastName:"Harding"
            }},
        {title:'Final Flight',
            author: {
                firstName:"Stephen",
                lastName:"Coonts"
            }}
    ];


    // console.log(books[0].title) // "The island of red"
    // console.log(books[0].author.firstName) // "Ryan"
    // console.log(books[0].author.lastName) // "Smith"

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(book,indexNum){
        // console.log("Book # " + (indexNum + 1));
        // console.log("Title: " + book.title);
        // console.log("Author: " + book.author.firstName + " " + book.author.lastName);

    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously.
     *
     *   Refactor your code that creates the books array to instead
     *   use your function.
     *
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above.
     *
     *   Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, firstName, lastName) {
        return{
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
            };
    }
    // ==== Push createBook functions data into the book array
    books.push(createBook("The Great Wall", "Mark", "Lowkey"));
    console.log(books);

    // ==== forEach Loop
    books.forEach(function(book,indexNum){
        console.log(showBookInfo(book, indexNum));
    });
    
    function showBookInfo(book, indexNum) {
        return "Book # " + (indexNum + 1) + " \n" + "Title: " + book.title + " \n" + "Author: " + book.author.firstName + " " + book.author.lastName ;
        
    }



})();
