//Watch on scroll and update nav
/*jslint browser:true */
var logo = document.getElementsByClassName("navbar-brand")[0];
var nav = document.getElementsByTagName("header")[0];
var bars = document.querySelectorAll("span.icon-bar");
var hamburger = document.getElementsByClassName("navbar-toggle collapsed")[0];
var navbar = document.getElementById("main-navbar");
var bydigipolis = document.getElementById("bydigipolis");

function hasClass(element, className) {
    "use strict";
    return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
}

function addClass(element, className) {
    "use strict";
    if (!hasClass(element, className)) {
        element.className += " " + className;
    }
}

function removeClass(element, className) {
    "use strict";
    var newClass = " " + element.className.replace(/[\t\r\n]/g, " ") + " ";
    if (hasClass(element, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
            newClass = newClass.replace(" " + className + " ", " ");
        }
        element.className = newClass.replace(/^\s+|\s+$/g, "");
    }
}

function toggleClass(element, className) {
    "use strict";
    var newClass = " " + element.className.replace(/[\t\r\n]/g, " ") + " ";
    if (hasClass(element,className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
            newClass = newClass.replace(" " + className + " ", " ");
        }
        element.className = newClass.replace(/^\s+|\s+$/g, "");
    } else {
        element.className += " " + className;
    }
}

$(document).ready( function(){
    "use strict";
    var i;
    addClass(logo, "default-logo");
    removeClass(navbar, "navbar-white");
    nav.style.backgroundColor = "rgba(255,255,255,.97)";
    nav.style.boxShadow = "1px 1px 5px grey";
    if(bydigipolis){
        bydigipolis.style.visibility = "hidden";
        addClass(bydigipolis, "transparant");
    }
    for (i = 0; i <= 2; i += 1) {
        bars[i].style.backgroundColor = "#006495";
    }
    if (!(window.pageYOffset >= 1)) {
        if(bydigipolis){
            bydigipolis.style.visibility = "visible";
            removeClass(bydigipolis, "transparant");
        }
        removeClass(logo, "default-logo");
        addClass(navbar, "navbar-white");
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "none";
        for (i = 0; i <= 2; i += 1) {
            bars[i].style.backgroundColor = "#FFF";
        }
    }
})

window.addEventListener("scroll", function () {
    "use strict";
    var i;
    addClass(logo, "default-logo");
    removeClass(navbar, "navbar-white");
    nav.style.backgroundColor = "rgba(255,255,255,.97)";
    nav.style.boxShadow = "1px 1px 5px grey";
    if(bydigipolis){
        bydigipolis.style.visibility = "hidden";
        addClass(bydigipolis, "transparant");
    }
    for (i = 0; i <= 2; i += 1) {
        bars[i].style.backgroundColor = "#006495";
    }
    if (!(window.pageYOffset >= 1)) {
        if(bydigipolis){
            bydigipolis.style.visibility = "visible";
            removeClass(bydigipolis, "transparant");
        }
        removeClass(logo, "default-logo");
        addClass(navbar, "navbar-white");
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "none";
        for (i = 0; i <= 2; i += 1) {
            bars[i].style.backgroundColor = "#FFF";
        }
    }
});

hamburger.addEventListener("click", function () {
    "use strict";
    toggleClass(hamburger, "collapsed");
    toggleClass(navbar, "in");
    navbar.style.transition = "height 258ms ease-out";
});