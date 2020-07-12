//Initial Loading Screen
//3500 = 3.5 seconds i.e. the time it take for the preloader to dissappear
$(document).ready(function() {
    //Preloader
    const preloaderFadeOutTime = 2000;
    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
        }
    hidePreloader();
});


//Mobile Navigation Menu 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    }

//Fixed Top Navigation Bar on Mobile
$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#nav').addClass('floatingNav');
    } else {
        $('#nav').removeClass('floatingNav');
    }
});

//Slider Value in the Form
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
            
slider.oninput = function() {
    output.innerHTML = this.value;
}
        
//Review Sliders
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

//Browse Menu in Navigation Bar i.e. the popover
$(function () {
    $('[data-toggle="popover"]').popover({ 
        trigger: "hover focus" ,
        html : true,
        content: function() {
            return $('.browse').html();
        }
    })
})     


//Marquee for Client Logos
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
root.style.setProperty("--marquee-elements", marqueeContent.children.length);
for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// document.getElementById("moreColors").onclick = function () {
//     location.href = "";
// };

