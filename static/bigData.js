
// fade effect on the page
$(document).ready( function () {
        $('#wholeSection').fadeIn(1100);
})

// Function that allows user to scroll to the top of the page
$(document).ready( function () {
    $('#scrollTop').on('click', function () {
        $('html, body').animate({               
            scrollTop: $("#scrollTo").offset().top  
        },500);
    });
})
