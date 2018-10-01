
// fade effect on the page
$(document).ready( function () {
    $('#wholeSection').fadeIn(1100);
})

$(document).ready( function () {
    $('#scrollTopService').on('click', function () {
        $('html, body').animate({               
            scrollTop: $("#scrollTo").offset().top  
        },500);
    });
})