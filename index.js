// Adds different bg color to alternate sections
let sections = document.querySelectorAll("body > div");
for(i=3; i<sections.length; i+=2) {
    sections[i].style.backgroundColor = "#222";
}

// Hides the blurry overlay
let frostCard = document.querySelectorAll(".frost-card");
for (j=0; j<frostCard.length; j++) {
    frostCard[j].addEventListener("mouseover", function() {
        this.style.opacity = "0";
    })
    frostCard[j].addEventListener("mouseleave", function() {
        console.log(frostCard[j]);
        this.style.opacity = "1";
    })
}

// Day Night Button Functioning

let btnDiv = $(".day-night-btn");
let toggle = $(".toggle");
let icon = $(".icon i");

btnDiv.addClass("day-btn");
toggle.addClass("toggle-day");
icon.addClass("fa-circle");

btnDiv.click(function() {
    btnDiv.toggleClass("night-btn");
    toggle.toggleClass("toggle-night");
    icon.toggleClass("fa-moon");
    }
)