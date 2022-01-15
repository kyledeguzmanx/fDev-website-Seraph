const navbar = document.querySelector("nav");

function openNav() {
    document.getElementById("sideMenu").style.width = "100%";
    document.getElementById("main").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("main").style.display= "block";
  }


window.onscroll = function () { 
    "use strict";
    if (window.scrollY > 100 ) {
      navbar.style.backgroundColor = "rgba(245, 243, 244,0.5)";
    } 
    else {
        navbar.style.backgroundColor = "transparent";
        

    }
};