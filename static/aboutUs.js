
$(document).ready( function () {
    $('#wholeAbout').fadeIn(1100);
})


$(document).ready(function () {
    $('#aboutOne').on('click', function () {
        $('#aboutTitleOne').fadeOut(50);
        $('#textOne').fadeIn(2000); 
    });      
});

$(document).ready(function () {
    $('#textOne').on('click', function () {
        $('#textOne').fadeOut();
        $('#aboutTitleOne').fadeIn(2000);
    });      
});