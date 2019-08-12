function incrementByTwo(){
    var i = 2;

    while (i < 70000) {

        console.log(i);
        i = i * 2;
    }
}

// incrementByTwo();

// ===========================================================
    function sellIceCream() {
// This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Total cones to sell " + allCones);

    do {
        var conesSoldPerPerson = Math.floor(Math.random() * 5) + 1;
        // This expression will generate a random number between 1 and 5

        if (allCones >= conesSoldPerPerson){
            allCones = allCones - conesSoldPerPerson;
            console.log("Cones sold " + conesSoldPerPerson + " & " + "Total cones left " + allCones);
        } else{
            console.log("Sorry!" + "I cannot sell you" + conesSoldPerPerson + "cones, I only have " + allCones + "...");
        }

        // console.log("Cones sold per person " + conesSoldPerPerson + " & " + "Total cones to sell" + allCones);
    } while(allCones > 0);
    console.log("Yay! I sold them all! No more cones.");
    }

    // sellIceCream();


// ==============================================================


