(function ($) {
    "use strict"; 


    $(document).ready(function(){
        $('a.popup1').bind('click', function(){        
         $("#seriesPopupWrapper1").fadeIn();
         document.getElementById("contents1").innerHTML = (popupContents($(this).attr('id')));
      });
    });

    $(document).ready(function(){
      $("#snap1").click(function(){
       $("#seriesPopupWrapper1").fadeOut();
    });
  });

  $(document).ready(function(){
    $('a.popup2').bind('click', function(){        
     $("#seriesPopupWrapper2").fadeIn();
     document.getElementById("contents2").innerHTML = (popupContents($(this).attr('id')));
  });
});

$(document).ready(function(){
  $("#snap2").click(function(){
   $("#seriesPopupWrapper2").fadeOut();
});
});

$(document).ready(function(){
    $('a.popup3').bind('click', function(){        
     $("#seriesPopupWrapper3").fadeIn();
     document.getElementById("contents3").innerHTML = (popupContents($(this).attr('id')));
  });
});

$(document).ready(function(){
  $("#snap3").click(function(){
   $("#seriesPopupWrapper3").fadeOut();
});
});

})(jQuery);

function popupContents(popup)
{
    var contents
    var background = popupBackground(popup)

    switch(popup) {

    case "TFATWS" : contents = "<img src='" + background +"' width='25%';></br></br>Six months after being handed the mantle of Captain America at the end of Avengers: Endgame, Sam Wilson teams up with Bucky Barnes in a worldwide adventure that tests their abilities and their patience.<br /><br />All episodes are currently streaming on Disney+";
    break;
    
    case "wandavision" : contents =  "<img src='" + background +"' width='20%';></br></br>Three weeks after the events of Avengers: Endgame, Wanda Maximoff and Vision are living an idyllic suburban life in the town of Westview, New Jersey, trying to conceal their true natures. As their surroundings begin to move through different decades and they encounter various television tropes, the couple suspects that things are not as they seem.<br /><br />All epsiodes are currently streaming on Disney+";
    break;
    
    case "loki" : contents = "<img src='" + background +"'  width='40%';></br></br>After stealing the Tesseract during the events of Avengers: Endgame, an alternate version of Loki is brought to the mysterious Time Variance Authority (TVA), a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being deleted from existence due to being a \"time variant\", or help fix the timeline and stop a greater threat. Loki ends up trapped in his own crime thriller, traveling through time and altering human history.<br /><br />Will begin streaming on Disney+ starting on June 11, 2021";
    break;
    
    case "whatif" : contents = "<img src='" + background +"'  width='40%';></br></br>This upcoming animated series explores what would happen if major moments from the Marvel Cinematic Universe occurred differently.<br /><br />Scheduled to begin streaming on Disney+ in mid-2021";
    break;
    
    case "hawkeye" : contents = "<img src='" + background +"'  width='40%';></br></br>This upcoming series is based on the Marvel Comics superhero Hawkeye, centering on the adventures of Young Avenger, Kate Bishop, who took on the role after the original Avenger, Clint Barton.<br /><br />Scheduled to begin streaming on Disney+ in late-2021";
    break;
    
    case "msmarvel" : contents = "<img src='" + background +"'  width='40%';></br></br>In this upcoming series, New Jersey raised Kamala Khan learns she has polymorphous powers.<br /><br />Scheduled to begin streaming on Disney+ in late-2021";
    break;
    
    case "moonknight" : contents = "<img src='" + background +"'  width='40%';></br></br>This upcoming series features a complex vigilante who suffers from dissociative identity disorder. The multiple identities who live inside him are distinct characters who appear against a backdrop of Egyptian iconography.<br /><br />Scheduled to begin streaming on Disney+ in 2022";
    break;
    
    case "shehulk" : contents = "<img src='" + background +"'  width='40%';></br></br>In this upcoming series, the character Jennifer Walters acquires Hulk-like qualities.<br /><br />Scheduled to begin streaming on Disney+ in 2022";
    break;
    
    case "secretinvasion" : contents = "<img src='" + background +"'  width='40%';></br></br>Nick Fury and the the Skrull general Talos try to stop the Skrulls who have infiltrated the highest spheres of the Marvel Universe in this upcoming series.<br /><br />Scheduled to begin streaming on Disney+ at a time yet to be announced";
    break;
    
    case "ironheart" : contents = "<img src='" + background +"'  width='40%';></br></br>In this upcoming series, genius teenage-girl inventor Riri Williams creates the most advanced suit of armor since Iron Man.<br /><br />Scheduled to begin streaming on Disney+ at a time yet to be announced";
    break;
    
    case "armorwars" : contents = "<img src='" + background +"'  width='40%';></br></br>This upcoming series explores what would happen if Tony Stark's tech fell into the wrong hands.<br /><br />Scheduled to begin streaming on Disney+ at a time yet to be announced";
    break;
    
    case "iamgroot" : contents = "<img src='" + background +"'  width='40%';></br></br>An upcoming series of shorts featuring the seedling Groot along with several new and unusual characters.<br /><br />Scheduled to begin streaming on Disney+ at a time yet to be announced";
    break;
    
    case "agentsofshield" : contents = "<img src='" + background +"'  width='40%';></br></br>This series features the on-going missions of the Strategic Homeland Intervention, Enforcement and Logistics Division, after the events of the original Avengers movie.<br /><br />Original Release: September 24, 2013 – August 12, 2020<br /><br />All episodes are currently streaming on Netflix";
    break;
    
    case "agentcarter" : contents = "<img src='" + background +"'  width='40%';></br></br>In 1946, Peggy Carter is relegated to secretarial duties in the Strategic Scientific Reserve (SSR). When Howard Stark is accused of treason, he secretly recruits Peggy to clear his name with the help of his butler, Edwin Jarvis.<br /><br />Original Release: January 6, 2015 – March 1, 2016<br /><br />All episodes are currently streaming on Disney+";
    break;
    
    case "inhumans" : contents = "<img src='" + background +"'  width='40%';></br></br>After a military coup, the Inhuman Royal Family escape to Hawaii, where they must save themselves and the world<br /><br />Original Release: September 29, 2017 – November 10, 2017<br /><br />All episodes are currently streaming on Disney+";
    break;
    
    case "daredevil" : contents = "<img src='" + background +"'  width='40%';></br></br>A blind lawyer by day, vigilante by night, Matt Murdock fights the crime of New York as Daredevil.<br /><br />Original Release: April 10, 2015 – October 19, 2018<br /><br />All episodes are currently streaming on Disney+";
    break;
    
    case "jessicajones" : contents = "<img src='" + background +"'  width='40%';></br></br>Following the tragic end of her brief superhero career, Jessica Jones tries to rebuild her life as a private investigator, dealing with cases involving people with remarkable abilities in New York City.<br /><br />Original Release: November 20, 2015 – June 14, 2019<br /><br />All episodes are currently streaming on Netflix";
    break;
    
    case "lukecage" : contents = "<img src='" + background +"'  width='40%';></br></br>When a sabotaged experiment gives him super strength and unbreakable skin, Luke Cage becomes a fugitive attempting to rebuild his life in Harlem and must soon confront his past and fight a battle for the heart of his city. After clearing his name, Cage becomes a hero and celebrity in Harlem, only to encounter a new threat that makes him confront the line between hero and villain.<br /><br />Original Release: September 30, 2016 – June 22, 2018<br /><br />All episodes are currently streaming on Netflix";
    break;
    
    case "ironfist" : contents = "<img src='" + background +"'  width='40%';></br></br>After being presumed dead for 15 years, Danny Rand returns to New York City to reclaim his family company from Harold Meachum and his children, Ward and Joy Meachum. When a threat emerges, Rand must choose between his family's legacy and his duties as the Iron Fist.<br /><br />Original Release: March 17, 2017 – September 7, 2018<br /><br />All episodes are currently streaming on Netflix";
    break;
    
    case "defenders" : contents = "<img src='" + background +"'  width='40%';></br></br>Set a few months after the events of the second season of Daredevil, and a month after the events of Iron Fist, this mini-series finds the vigilantes Daredevil, Jessica Jones, Luke Cage, and Iron Fist teaming up in New York City to fight a common enemy: The Hand.<br /><br />Original Release: August 18, 2017<br /><br />All episodes are currently streaming on Netflix";
    break;
    
    case "punisher" : contents = "<img src='" + background +"'  width='40%';></br></br>After the murder of his family, Marine veteran Frank Castle becomes the vigilante known as \"The Punisher,\" with only one goal in mind: to avenge them.<br /><br />Original Release: November 17, 2017 – January 18, 2019<br /><br />All episodes are currently streaming on Netflix";
    break;
    
    case "runaways" : contents = "<img src='" + background +"'  width='40%';></br></br>Six teenagers from different backgrounds unite against a common enemy – their criminal parents, who collectively run an organization called Pride.<br /><br />Original Release: November 21, 2017 – December 13, 2019<br /><br />All episodes are currently streaming on Hulu and Disney+";
    break;
    
    case "cloakanddagger" : contents = "<img src='" + background +"'  width='40%';></br><br />In New Orleans, teenagers Tandy Bowen and Tyrone Johnson come from different backgrounds and have acquired superpowers after a life-changing event that revolved around the collapse of the Roxxon Gulf Platform. As their friendship unfolds, they soon realize that their powers work better when they are together, they use these powers to try to fix some of the wrong in the world.<br /><br />Original Release: June 7, 2018 – May 30, 2019<br /><br />All episodes are currently streaming on Hulu";
    break;
    
    case "helstrom" : contents = "<img src='" + background +"'  width='40%';></br><br />Daimon and Ana Helstrom are the son and daughter of a mysterious and powerful serial killer. The siblings have a complicated dynamic as they track down the terrorizing worst of humanity - each with their attitude and skills.<br /><br />Original Release: October 16, 2020<br /><br />All episodes are currently streaming on Hulu";
    break;

    }

    return contents;
}

function popupBackground(popup)
{
    var background

    switch(popup) {

    case "TFATWS" : background = "/Assets/img/MarvelSeries/TFATWS.jpg";
    break;
    
    case "wandavision" : background = "/Assets/img/MarvelSeries/WandaVision.jpeg";
    break;
    
    case "loki" : background = "/Assets/img/MarvelSeries/Loki_\(TV_series\)_logo.png";
    break;
    
    case "whatif" : background = "/Assets/img/MarvelSeries/whatif.jpg";
    break;
    
    case "hawkeye" : background = "/Assets/img/MarvelSeries/marvel-hawkeye-logo.jpg";
    break;
    
    case "msmarvel" : background = "/Assets/img/MarvelSeries/marvel-ms-marvel-logo.png";
    break;
    
    case "moonknight" : background = "/Assets/img/MarvelSeries/marvel-moon-knight-logo.jpg";
    break;
    
    case "shehulk" : background = "/Assets/img/MarvelSeries/marvel-she-hulk.jpg";
    break;
    
    case "secretinvasion" : background = "/Assets/img/MarvelSeries/secret-invasion-nick-fury-social.jpg";
    break;
    
    case "ironheart" : background = "/Assets/img/MarvelSeries/marvel-ironheart.jpg";
    break;
    
    case "armorwars" : background = "/Assets/img/MarvelSeries/marvel-war-machine-rhodes-cheadle-social.jpg";
    break;
    
    case "iamgroot" : background = "/Assets/img/MarvelSeries/i-am-groot-series-logo-disney-plus.jpg";
    break;
    
    case "agentsofshield" : background = "/Assets/img/MarvelSeries/Agents_of_SHIELD.jpg";
    break;
    
    case "agentcarter" : background = "/Assets/img/MarvelSeries/agentcarter.jpg";
    break;
    
    case "inhumans" : background = "/Assets/img/MarvelSeries/inhumans-1018583-1280x0.jpg";
    break;
    
    case "daredevil" : background = "/Assets/img/MarvelSeries/daredevil-netflix-190285.jpg";
    break;
    
    case "jessicajones" : background = "/Assets/img/MarvelSeries/Marvels-Jessica-Jones.jpg";
    break;
    
    case "lukecage" : background = "/Assets/img/MarvelSeries/luke-cage.png";
    break;
    
    case "ironfist" : background = "/Assets/img/MarvelSeries/Netflix-iron-fist.jpg";
    break;
    
    case "defenders" : background = "/Assets/img/MarvelSeries/defenders.jpg";
    break;
    
    case "punisher" : background = "/Assets/img/MarvelSeries/punisher.jpg";
    break;
    
    case "runaways" : background = "/Assets/img/MarvelSeries/runaways.jpg";
    break;
    
    case "cloakanddagger" : background = "/Assets/img/MarvelSeries/cloak-and-dagger-season-1-netflix.png";
    break;
    
    case "helstrom" : background = "/Assets/img/MarvelSeries/helstrom-header.jpg";
    break;    
    
    }

    return background;
}