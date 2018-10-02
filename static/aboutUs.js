
$(document).ready( function () {
    $('#wholeAbout').fadeIn(1100);
})

// Chuck of code to change text 
let titles = document.querySelectorAll(".textClass")
let texts = document.querySelectorAll(".innerAbout")

// allowing us to add event listeners to every element
for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", titleOnClick);
}

for (let i = 0; i < titles.length; i++) {
    texts[i].addEventListener("click", textOnClick);
}   

// Text to be inputted onto the page
var headings = ["Management", "Business Model", "About InvoSystems", "Contact Us"]
var paraTexts = [ "InvoSystems is owned and managed by Singaporeans with vast  experience  \
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
    // get id of the title
    let thisTitle = this.getAttribute("id")
    let innerText = document.getElementById("text" + thisTitle);
        if (this.innerHTML != "") {
        // We make the title disappear
        this.innerHTML = "";
        innerText.innerHTML = paraTexts[parseInt(thisTitle)];
        // We then add the text into the box
    } else {
        thisTitle.innerHTML = headings[parseInt(thisTitle)];
        innerText.innerHTML = "";
    }
}

function textOnClick () {
    let thisText = this.getAttribute("id")
    let thistextTitleId = thisText[4];
    let titleIn = document.getElementById(parseInt(thistextTitleId))

    if (thisText.innerHTML != "") {
        this.innerHTML = "";
        titleIn.innerHTML = headings[parseInt(thistextTitleId)];
    }
}



















// Scroll towards the top of the page func
$(document).ready( function () {
    $('#scrollTopAbout').on('click', function () {
        $('html, body').animate({               
            scrollTop: $("#scrollTo").offset().top  
        },500);
    });
})
    
