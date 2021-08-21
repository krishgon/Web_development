// script when DOM has loaded succesfully
document.addEventListener('DOMContentLoaded', () => {
    intersectionAnimation();
    fadeIn();
    fadeTextIn();
});

// script for fade in with movement
function intersectionAnimation() {
    const myElements = document.querySelectorAll('.anim');

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = 'anim1 1s forwards ease-out';
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

// script for fade in without movement
function fadeIn(){
    const myElements = document.querySelectorAll('.fadeIn');

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = 'fadeIn 1s forwards ease-out';
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

//script for fading text in
function fadeTextIn(){
    const myElements = document.querySelectorAll('.fadeTextIn');

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = 'fadeTextIn 1.5s forwards ease-out';
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

// script for responsive navbar functioning
function toggleMenu() {
    const navbarLinks = document.querySelector("ul");
    const registerButton = document.querySelector(".registerBtn");
    if (navbarLinks.classList.contains("active")) {
        navbarLinks.style.animation = 'moveUp 0.5s forwards ease-out';
        registerButton.style.animation = 'moveUp 0.5s forwards ease-out';
        setTimeout(() => {
            navbarLinks.style.display = "none";
            registerButton.style.display = "none";
        }, 500);
    } else {
        navbarLinks.style.display = "flex";
        registerButton.style.display = "block";
        navbarLinks.style.animation = 'moveDown 0.5s forwards ease-out';
        registerButton.style.animation = 'moveDown 0.5s forwards ease-out';
    }
    navbarLinks.classList.toggle('active');
}