let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


/* HIDE BUTTTON SA GEDLI */
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    } else {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }
}

/* Date and time to baliw -- 'di 'ko maayos 'to hayop */
function updateClock() {
    var now = new Date();
    var options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    var dateStr = now.toLocaleDateString('en-US', options);
    var timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    var dateParts = dateStr.split(' ');

    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];

    var timeParts = timeStr.match(/(\d+):(\d+):(\d+) (\w+)/);

    if (timeParts) {
        var values = [dateParts[0], dateParts[1], dateParts[2], dateParts[3], timeParts[1], timeParts[2], timeParts[3], timeParts[4]];

        for (var i = 0; i < ids.length; i++) {
            var element = document.getElementById(ids[i]);
            if (element) {
                // Add colons between hour, minute, and second
                if (i === 4 || i === 5 || i === 6) {
                    element.innerText = values[i] + ':';
                } else {
                    element.innerText = values[i];
                }
            }
        }
    }
}

function initClock() {
    updateClock();
    window.setInterval(updateClock, 1000);
}

window.onload = function () {
    initClock();
};




function initClock() {
    updateClock();
    window.setInterval(updateClock, 1000);
}

window.onload = function () {
    initClock();
};
