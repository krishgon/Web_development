


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