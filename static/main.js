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

function textTitleContent () {
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

    title = document.getElementById("titleContent");
    title = title.innerHTML =titles[j]

    para = document.getElementById("paraContent");
    para = para.innerHTML = paragraphs[j]

    if (j < titles.length - 1) {
        j++;
    } else {
        j = 0;
    }
}


