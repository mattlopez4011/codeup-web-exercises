$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});

$(document).ready(function() {
    var coolerHeader = "Howdy, Ceres! Let's talk jQuery!";
   $('#header').html(coolerHeader);
    $('.lorem').css('color', 'blue').css( 'font-size', '2em').css('border', '2px solid blue');
    $('h1, p').css('text-decoration', 'underline');
});

