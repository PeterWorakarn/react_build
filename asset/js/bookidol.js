// (function () {
//     window.addEventListener('scroll', function (event) {
//         var depth, i, layer, layers, len, movement, topDistance, translate3d;
//         topDistance = this.pageYOffset;
//         layers = document.querySelectorAll("[data-type='parallax']");
//         for (i = 0, len = layers.length; i < len; i++) {
//             // if (window.CP.shouldStopExecution(0)) break;
//             layer = layers[i];
//             depth = layer.getAttribute('data-depth');
//             movement = -(topDistance * depth);
//             console.log(movement)
//             translate3d = 'translate3d(0, ' + movement + 'px, 0)';
//             layer.style['-webkit-transform'] = translate3d;
//             layer.style['-moz-transform'] = translate3d;
//             layer.style['-ms-transform'] = translate3d;
//             layer.style['-o-transform'] = translate3d;
//             layer.style.transform = translate3d;
//         }
//         // window.CP.exitedLoop(0);
//     });

// }).call(this);

// // EMPTY ROOM FUNCTION
// var layer1 = document.getElementById('img1')
// scroll = window.pageYOffset; // get scroll position
// document.addEventListener('scroll', function (e) {
//     var offset = window.pageYOffset;
//     scroll = offset;
//     console.log(scroll);
//     layer1.style.width = (0 + scroll / 22.5) + '%'; // ตอนแรก 15
//     layer1.style.opacity = (0 + scroll / 1100);
//     // the more you scroll the more it large
// })

// SLIDESHOW IMAGE - WEBSITE
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "unset";
}

// SLIDESHOW IMAGE - MOBILE
let slideIndex_mobile = 1;
showSlides_mobile(slideIndex_mobile);

function plusSlides_mobile(n) {
    showSlides_mobile(slideIndex_mobile += n);
}

function showSlides_mobile(n) {
    let i;
    let slides = document.getElementsByClassName("slide_mobile");
    if (n > slides.length) {
        slideIndex_mobile = 1
    }
    if (n < 1) {
        slideIndex_mobile = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex_mobile - 1].style.display = "unset";
}