var element = document.querySelector('.background-item'); //Gets the element
var style = getComputedStyle(element).backgroundImage; //gets the bg image property
var s = style.split('"');
var url = s[1];
window.open(url); //opens the url in new window
