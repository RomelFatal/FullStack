//Toggle function to show and hide member on the web page
function toggleMembers() {
    if (document.getElementById("members").className == "hide") {
        document.getElementById("members").className = "show";
        document.getElementById("members-heading").innerText = "Click to Hide Flavors";
    } else {
        document.getElementById("members").className = "hide";
        document.getElementById("members-heading").innerText = "Click to Show Flavors";
    }
}

function switchImage() {
    if (document.getElementById("coffee-image").attributes[2].nodeValue == "images/CoffeeCup.jpg") {
        document.getElementById("coffee-image").src = "images/CoffeeCup0.jpg";
    } else {
        document.getElementById("coffee-image").src = "images/CoffeeCup.jpg";
    }
}

function toggleFont() {
    if (document.getElementById("main-content").className == "default") {
        document.getElementById("main-content").className = "change-1";
    } else if (document.getElementById("main-content").className == "change-1") {
        document.getElementById("main-content").className = "change-2";
    } else if (document.getElementById("main-content").className == "change-2") {
        document.getElementById("main-content").className = "change-3";
    } else {
        document.getElementById("main-content").className = "default";
    }
}
