
// Start of js for (HOME PAGE)

// slideshow transitions for (HOME PAGE)

// function to go through the images
let  i = 0;
document.addEventListener("DOMContentLoaded", imgChanger);

function imgChanger() {
    let image = ['..\\static\\casey-allen-276030-unsplash.jpg', '..\\static\\loic-mermilliod-224470-unsplash.jpg'];
    document.picture.src = image[i]

    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("imgChanger()", 3000);
}

// function that loops through text
let f = 0;
document.addEventListener("DOMContentLoaded", textChanger);

function textChanger() {
    let text = ["Welcome to InvoSystems","Invosystems Solutions - Singapore", "Invodata Systems Technologies - Malaysia"];
    document.getElementById("content").innerHTML = text[f]
    
    if (f < text.length - 1) {
        f++;
    } else {
        f = 0;
    }

    setTimeout("textChanger()", 3000);
}

// Changes content of text in the home page
let j = 0;
let titles = ["Consulting" , "Products" , "eLearning & eTraining", "IoT & Analytics", "Blockchain"];
let paragraphs = [

    "InvoSystems provides consulting, products, solutions, implementation and services related to Big Data, IoT, \
    Analytics, eLearning, Blockchain, Digital Transformation,  Information Search, Structured Knowledgebase,  eFAQ  and eServices Delivery support",
    
    "Invosystems has built software products & portals focussing on eTraining & Certification, Structured Knowledgebase, \
     eServices Delivery support, Information Search,  eLearning & eTraining authoring tool. and eSales Management",

    "Invosystems offers services to Design, build, deliver eLearning & eTraining that encompass Instructional Design & \
    Courseware development, Digitization of engineering & technical documents, Build technical and non-technical knowledgebase", 

    "InvoSystems provides Big Data, IoT implementation services like Use Cases based solutions, Design and Implementation services. \
     InvoSystems undertakes services focussing on  Hadoop, ETL, MDM, Data Migration, ETL, Analytics and Managed Services", 

    "InvoSystems with its extensive experience in development, IoT, Cryptography, Big data, Cyber Security is embarking on Design, \
     solutioning, Use Cases, BaaS and POC for Blockchain based applications & Services" 
    
    ]
let pictureImages = [];

// Navigating through titles
let sNavIdentity = ["conSult", "pro", "eLearn", "Iot", "block"];
// Sets the first title as white
document.getElementById(sNavIdentity[0]).style.color = "#ffffff"

// Getting the id of which we would like the content to be changed when the user clicks on a button
let picture = document.getElementById("pictureContent")
let title = document.getElementById("titleContent");
let para = document.getElementById("paraContent");

// Right button
function rightButton () {
    if (j < titles.length - 1) {
        j++;
        title.innerHTML = titles[j];
        para.innerHTML = paragraphs[j];

        // changes the colours of the titles
        document.getElementById(sNavIdentity[j-1]).style.color = "#aaa4a4"
        document.getElementById(sNavIdentity[j]).style.color = "#ffffff"

        // changes colours of the button
        document.getElementById("button-right").style.borderColor = "transparent transparent transparent #1e6fe7";
        document.getElementById("button-left").style.borderColor = "transparent #1e6fe7 transparent transparent";

    }  else {
        title.innerHTML = titles[titles.length-1];
        para.innerHTML = paragraphs[paragraphs.length-1]

        // button colour is changed to red if it's reached it max
        document.getElementById("button-right").style.borderColor = "transparent transparent transparent #b41d1d";
    }
}

//left button
function leftButton () {
    if (j > 0 && j <= titles.length - 1) {
        j--;
        title.innerHTML = titles[j];
        para.innerHTML = paragraphs[j];

        // chnages the colours of the title
        document.getElementById(sNavIdentity[j]).style.color = "#ffffff"
        document.getElementById(sNavIdentity[j+1]).style.color = "#aaa4a4"

        // changes colours of the button
        document.getElementById("button-left").style.borderColor = "transparent #1e6fe7 transparent transparent";
        document.getElementById("button-right").style.borderColor = "transparent transparent transparent #1e6fe7";
    } else if (j == 0) {
        title.innerHTML = titles[0];
        para.innerHTML = paragraphs[0]

        // button colour is changed to red if it's reached it max
        document.getElementById("button-left").style.borderColor = "transparent #b41d1d transparent transparent";
    }
}

// Js that lights up on which text they are viewing


// end of Js for (HOME PAGE)