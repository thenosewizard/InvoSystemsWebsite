
$(document).ready( function () {
    $('#wholeAbout').fadeIn(1100);
})


title1 = document.getElementById("aboutTitleOne");
text1 = document.getElementById("textOne");

function titleOnClick () {

    if (title1.innerHTML != "") {
        title1.innerHTML = "";
        text1.innerHTML =  "InvoSystems is owned and managed by Singaporeans with vast  experience  of  more than 3 decades of experience in APAC covering from Korea to Australia.\
        Invosystems works closely with some exclusive local partners in the region  with strong business relationship  \
        and commitment to offer wide ranges of services and delivery in the region";
    } else {
        title1.innerHTML = "Management";
        text1.innerHTML =  "";
    }

}
title1.addEventListener("click", titleOnClick);
text1.addEventListener("click", titleOnClick);


