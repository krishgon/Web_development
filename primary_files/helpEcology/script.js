// script when DOM has loaded succesfully
document.addEventListener('DOMContentLoaded', () => {
    intersectionAnimation();
});

function intersectionAnimation() {
    const myElements = document.querySelectorAll('.anim');

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = 'anim1 1.5s forwards ease-out';
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