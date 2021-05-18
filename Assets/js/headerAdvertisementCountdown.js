//After 6 seconds the header advertisement will apear giving the animation time to play
function myFunction() {   
     
    document.getElementById("headerAdvertisement").style.visibility = "visible";
    
    //$(".header-banner").fadeIn(10000);
  }
  
  setInterval(myFunction, 6000);