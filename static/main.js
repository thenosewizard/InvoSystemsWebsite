// slideshow transitions for (HOME PAGE)

let  i = 0;
const time = 3000;
let image = [];

image[0] = '..\\static\\casey-allen-276030-unsplash.jpg';
image[1] = '..\\static\\loic-mermilliod-224470-unsplash.jpg';

// function to go through the images

function imgChanger() {
    document.picture.src = image[i]

    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }

    // time to switch between the images
    setTimeout("imgChanger()", time);
}

window.onload = imgChanger;

// variables needed

