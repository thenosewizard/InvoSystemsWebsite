
$(document).ready( function () {
    $('#wholeAbout').fadeIn(1100);
})


// Chuck of code to change text 
title1 = document.getElementById("aboutTitleOne");
text1 = document.getElementById("textOne");

title2 = document.getElementById("aboutTitleTwo");
text2 = document.getElementById("textTwo");

title3 = document.getElementById("aboutTitleThree");
text3 = document.getElementById("textThree");

title4 = document.getElementById("aboutTitleFour");
text4 = document.getElementById("textFour");

// grouping them together
titles = [title1, title2, title3, title4];
texts = [text1, text2, text3, text4];

// Text to be inputted onto the page
headings = ["Management", "Business Model", "About InvoSystems", "Contact Us"]
paraTexts = [ "InvoSystems is owned and managed by Singaporeans with vast  experience  \
of  more than 3 decades of experience in APAC covering from Korea to Australia.\
            Invosystems works closely with some exclusive local partners in the region  with strong business relationship  \
            and commitment to offer wide ranges of services and delivery in the region" ,
        
            "InvoSystems business model is created around few categories of offerings for its Customers & Partners. \
            These includes: \
            <ol>              \
                <li> Fixed price turnkey  implementations or SaaS based services delivery </li> \
                <li> SOW based onsite custom design, development and Delivery </li>\
                <li> Go-To-Market sales & support services for partner's providing niche products and services </li> \
                <li> SOW based resources and project team deployments </li> \
            <ol> " ,
            
            
            "InvoSystems is an IT products and services company operating from Singapore and \
            delivers services in countries like Singapore, Malaysia, Indonesia, Thailand, Hongkong, \
            Korea  and Australia. The company focuses on providing products, solutions, services to \
            industry domains like Banking, Financial Services, Insurance, Telecom, Government, Energy, Manufacturing and Retail. \
            <br><br> \
            <strong> Vision: </strong> <br>\
            To become a world class IT consulting and solutions company that is unparalleled in \
            its offerings to its customers and makes it easier for the end users. \
            <br> <br>\
            <strong> Mission: </strong> <br>\
            To deliver business solutions to its customers, by creating an environment \
            that values creativity, innovation and to foste r a work culture that lets its \
            internal stakeholders to align professional and personal goals.",

            "<strong>InvoSystems's staff operate on flexible 24 x7 basis from few countries to provide a guaranteed service delivery.</strong> \
            <ul id = 'textFour'>                          \
            <li>Invosystems Solutions Pte Ltd <br> \
            1 North Bridge Road, Singapore 179094 </li> <br> \
            <li>Invodata Systems Technologies Sdn Bhd <br>\
            No 3, Kelana Center Point, Malaysia 47301 </li> <br>\
            <li> To setup meetings or information request, <br> <strong> please email ancilla@invosystems.com </strong> </li> \
            </ul> "     
        ];


// Function to change the texts
function titleOnClick () {
        if (titles[0].innerHTML != "") {
            titles[0].innerHTML = "";
            texts[0].innerHTML = paraTexts[0]
        } else {
            titles[0].innerHTML = headings[0];
            texts[0].innerHTML =  "";
        }
};

function titleOnClick1 () {
        if (titles[1].innerHTML != "") {
            titles[1].innerHTML = "";
            texts[1].innerHTML = paraTexts[1]
        } else {
            titles[1].innerHTML = headings[1];
            texts[1].innerHTML =  "";
        }
};

function titleOnClick2 () {
        if (titles[2].innerHTML != "") {
            titles[2].innerHTML = "";
            texts[2].innerHTML = paraTexts[2]
        } else {
            titles[2].innerHTML = headings[2];
            texts[2].innerHTML =  "";
        }
};

function titleOnClick3 () {

    if (titles[3].innerHTML != "") {
        titles[3].innerHTML = "";
        texts[3].innerHTML = paraTexts[3]
    } else {
        titles[3].innerHTML = headings[3];
        texts[3].innerHTML =  "";
    }   
};

    
// Event listeners
titles[0].addEventListener('click', titleOnClick);
texts[0].addEventListener('click', titleOnClick);

titles[1].addEventListener('click', titleOnClick1);
texts[1].addEventListener('click', titleOnClick1);

titles[2].addEventListener('click', titleOnClick2);
texts[2].addEventListener('click', titleOnClick2);

titles[3].addEventListener('click', titleOnClick3);
texts[3].addEventListener('click', titleOnClick3);

$(document).ready( function () {
    $('#scrollTopAbout').on('click', function () {
        $('html, body').animate({               
            scrollTop: $("#scrollTo").offset().top  
        },500);
    });
})
    