// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
var currentScrollpos;
window.onscroll = function() {
    console.log("you scrolled");
    currentScrollpos = window.pageYOffset;
    if(prevScrollpos > currentScrollpos){
        document.querySelector("nav").style.top = "0";
    }else{
        document.querySelector("nav").style.top = "-100px";
    }
    prevScrollpos = currentScrollpos;
}


// script for responsive navbar functioning
function toggleMenu(){
    const navbarLinks = document.querySelector("ul");
    navbarLinks.classList.toggle('active');
}

//script for caraousel functioning
var scrolled = 0;

function carScroll(direction){
    var carousel = document.querySelector(".carousel");
    var scrollAmount = window.outerWidth/4;
    if(direction == "right"){
        carousel.scroll(scrolled + scrollAmount, 0);
        scrolled = scrollAmount + scrollAmount;
        console.log(scrolled);
    }else{
        carousel.scroll(scrolled - scrollAmount, 0);
        scrolled = scrollAmount - scrollAmount, 0;
    }
}