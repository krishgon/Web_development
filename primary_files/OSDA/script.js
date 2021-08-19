var carousel, currentScrollpos;


// script when DOM has loaded succesfully
document.addEventListener('DOMContentLoaded', () => {
    carousel = document.querySelector(".carousel");
    aboutAnimation();
    carAnimation();
});

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-500px";
    }
    prevScrollpos = currentScrollpos;
}


// script for responsive navbar functioning
function toggleMenu() {
    const navbarLinks = document.querySelector("ul");
    navbarLinks.classList.toggle('active');
}

//script for caraousel functioning
var scrolled = 0;
var scrollAmount = 0;
function carScroll(direction) {
    if (window.outerWidth <= 768) {
        scrollAmount = window.outerWidth / 2;
    } else {
        scrollAmount = window.outerWidth / 4;
    }
    if (direction == "right") {
        if (!(scrolled >= scrollAmount * 4)) {
            carousel.scroll(scrolled + scrollAmount, 0);
            scrolled = scrolled + scrollAmount;
        }
    } else {
        if (!(scrolled <= 0)) {
            carousel.scroll(scrolled - scrollAmount, 0);
            scrolled = scrolled - scrollAmount, 0;
        }
    }
    console.log(scrolled);
}



function aboutAnimation() {
    const myElements = document.querySelectorAll('.anim');

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = 'anim1 2s forwards ease-out';
                var animDelay = entry.target.dataset.delay;
                entry.target.style.animationDelay = animDelay;
            } else {
                entry.target.style.animation = 'none';
            }
        })
    });

    myElements.forEach(myElement => {
        observer.observe(myElement);
    });
}

function carAnimation() {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                console.log("i am fired");
                setTimeout(carScroll("right"), 500);
            }
        })
    });

    observer.observe(carousel);
}