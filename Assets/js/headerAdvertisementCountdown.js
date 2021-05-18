//After 6 seconds the header advertisement will apear giving the animation time to play
function myFunction() {   
    
  var randomAd;

  randomAd = Math.ceil(Math.random() * 5);

    document.getElementById("headerAdvertisement").style.visibility = "visible";

    document.getElementById("headerAdvertisement").innerHTML = "<img src='/Assets/AdImages/Horizontal/ad" + randomAd + ".jpg' alt='' style='visibility:visible;'>";

    randomAd = Math.ceil(Math.random() * 5);
    
    document.getElementById("footerAdvertisement").innerHTML = "<img src='/Assets/AdImages/Horizontal/ad" + randomAd + ".jpg' alt = '' style='margin:auto; width:100%; height:100%'>";

    randomAd = Math.ceil(Math.random() * 6);
    
    document.getElementById("pageAdvertisement1").innerHTML = "<img src='/Assets/AdImages/Vertical/ad" + randomAd + ".jpg' alt = '' style='margin:auto; width:15%; float:right;'>";

    randomAd = Math.ceil(Math.random() * 6);
    
    document.getElementById("pageAdvertisement2").innerHTML = "<img src='/Assets/AdImages/Vertical/ad" + randomAd + ".jpg' alt = '' style='margin:auto; width:15%; float:left;'>";
  }
  
  setTimeout(myFunction, 6000);