

// slideshow transitions for (HOME PAGE)
// function to go through the images
let  i = 0;
document.addEventListener("DOMContentLoaded", imgChanger);

function imgChanger() {
    let image = ['..\\static\\table.jpeg'];
    document.picture.src = image[i]

    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("imgChanger()", 3000);
}

/* function that loops through text
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

*/
