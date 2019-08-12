function oddNumbersBetween1And50() {
    console.log("Number to skip is: 27");
    console.log(" ");
    for (var i = 0; i <= 50; i++){
        if (i === 27){
            console.log("Yikes! Skipping number: 27");
            continue;
        }else if (i % 2 === 0) {
            continue;
        }
        console.log("Here is an odd number: " +i);
    }
    // return i;

}
oddNumbersBetween1And50();

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


