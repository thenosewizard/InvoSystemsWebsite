// slideshow transitions for (HOME PAGE)

let  i = 0;
let f = 0;
// function to go through the images

function imgChanger() {
    let image = ['..\\static\\casey-allen-276030-unsplash.jpg', '..\\static\\loic-mermilliod-224470-unsplash.jpg'];
    document.picture.src = image[i]

    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }
    // time to switch between the images
    setTimeout("imgChanger()", 3000);
}

function textChanger() {
    let text = ["Invosystems Solutions - Singapore", "Invodata Systems Technologies - Malaysia"];
    document.getElementById("content").innerHTML = text[f]
    
    if (f < text.length - 1) {
        f++;
    } else {
        f = 0;
    }

    setTimeout("textChanger()", 2000);
}

// Event listeners
document.addEventListener("DOMContentLoaded", imgChanger);
document.addEventListener("DOMContentLoaded", textChanger);

