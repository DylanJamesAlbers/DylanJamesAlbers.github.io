showImage();
setInterval(showImage, 5000);

function showImage() {
   var slideNumber = randNumber(1, 22);
   document.getElementById("slide").src = "/Assets/img/indexSlideShow/slide" + slideNumber + ".jpg";
   document.getElementById("slidecaption").textcontent = getCaption(slideNumber);
}




/* ------------------------------------------

functions to retrieve a random number and get the caption for a slide
--------------------------------------------- */

function randNumber(min, max) {
   return Math.floor(min + (max-min+1)*Math.random());
}

function getCaption(slide) {
   var captions = new Array(22);
   captions[1]="Iron Man [2008]";
   captions[2]="The Incredible Hulk [2008]"; 
   captions[3]="Iron Man 2 [2010]"; 
   captions[4]="Thor [2011]"; 
   captions[5]="Captain America: The First Avenger [2011]";
   captions[6]="The Avengers [2012]";
   captions[7]="Iron Man 3 [2013]";
   captions[8]="Thor: The Dark world [2013]";
   captions[9]="Guardians of the Galazy [2014]";
   captions[10]="Avengers: Age of Ultron [2015]";
   captions[11]="Ant-Man [2015]";
   captions[12]="Captian America: Civil War [2016]";
   captions[13]="Doctor Strange [2016]";
   captions[14]="Guardian of the Galaxy Vol. 2 [2017]";
   captions[15]="Spider-Man: Homecoming [2017]";
   captions[16]="Thor: Ragnarok [2017]";
   captions[17]="Black Panther [2018]";
   captions[18]="Avengers: Infinity War [2018]";
   captions[19]="Ant-Man and the Wasp [2018]";
   captions[20]="Captain Marvel [2019]";
   captions[21]="Avengers: End Game [2019]";
   captions[22]="Spider-Man: Far From Home [2019]";


   return captions[slide];
}