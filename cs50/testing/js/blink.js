function blink(){
    let body = document.querySelector('body');

    if (body.style.visibility === 'hidden'){
        body.style.visibility = 'visible';
    }
    else{
        body.style.visibility = 'hidden';
    }
}

// blink every 500 ms
window.setInterval(blink, 500);
