var element = document.querySelector('.background-item'); //Gets the element
var sty = getComputedStyle(elem).backgroundImage; //gets the bg image property
var s = sty.split('"');
var url = s[1];
window.open(url); //opens the url in new window
