// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });

// $(document).ready(function() {
//     var coolerHeader = "Howdy, Ceres! Let's talk jQuery!";
//    $('#header').html(coolerHeader);
//     $('.lorem').css('color', 'blue').css( 'font-size', '2em').css('border', '2px solid blue');
//     $('h1, p').css('text-decoration', 'underline');
// });
//
//
// $(document).ready(function() {
// var alertText = $('#text').html();
//     console.log(alertText);
//
//     alert(alertText );
//
//     $('.codeup, #codeup').css('border', '1px solid red')
//
// });



// // Using jQuery, set the font-size of all li elements to 20px.
// $(document).ready(function () {
//     $('li').css('font-size', '20px')
//
// });
//
//
// // Craft selectors that highlight all the h1, p, and li elements.
// $(document).ready(function () {
//     $('sel-3').css('color', 'blue')
//
//
// });
//
// // Create a jQuery statement to alert the contents of your h1 element(s).
// $(document).ready(function () {
//     var h1Elements = $('h1').html();
//     alert(h1Elements);
//
//
// });
//
// // Combine your selectors that highlight all the h1, p, and li elements.
// $(document).ready(function () {
//     // $('h1, p, li').css('border', '1px dashed green');
//     $('h1, p, li').css('background-color', 'yellow');
//
//
//
// });
//

$('h1').click(
    function () {
        $(this).css('background-color', 'lightgrey')

    }
);

$('p').dblclick(
    function () {
        $(this).css('font-size', '18px')

    }
);

$('li').hover(
    function () {
        $(this).css('color', 'red')

    },

    function () {
        $(this).css('color', 'black')

    }
);