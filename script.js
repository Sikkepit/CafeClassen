// MOBILE NAVMENU

function mobileMenu() {
    var links = document.getElementById("mobile-links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}

// PHOTO SLIDER

const photoSlider = document.getElementById("photo-slider");
  
function scrollPhoto(value) {
    photoSlider.scrollBy({
    top: 0, 
    left: value, 
    behavior: 'smooth'
    });
}

// SLIDE IN EVENTS

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e) => observer.observe(e)); 