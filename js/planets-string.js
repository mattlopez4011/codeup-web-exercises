(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     // *
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var planetsStringWBreakTag = "Mercury" <br> "Venus" <br> "Earth" <br> "Mars" <br> "Jupiter" <br> "Saturn" <br> "Uranus" <br> "Neptune";
    var planetsStringWBRTag = planetsArray.join('<br>');
    console.log(planetsStringWBRTag);

    // Bonus solution:
    console.log(planetsArray);
    planetsArray.unshift('<ul>');
    console.log(planetsArray);
    planetsArray.push('</ul>');
    console.log(planetsArray);
    var planetsWithLiTagsBetween = planetsArray.join('<li>');
    console.log(planetsWithLiTagsBetween);



})();



