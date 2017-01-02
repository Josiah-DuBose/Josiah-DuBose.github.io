function scrollResume(){
    $('html, body').animate({
        scrollTop: $("#resume_section").offset().top - 5
    }, 1);
}
$("#resumeButton").click(scrollResume)


function scrollPortfolio(){
    $('html, body').animate({
        scrollTop: $("#projectDetails").offset().top
    }, 1);
}
$("#projects").click(scrollPortfolio)


function scrollBio(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1);
}
$("#bio").click(scrollBio)



// badges

// When Document is ready, build treehouse Badge Widget
$(document).ready(function () {

  // Replace the value for var 'e' with your      Treehouse Username
  var e = "josiahdubose",

  // Treehouse Json
  t = "http://teamtreehouse.com/" + e + ".json",
 
  // Badges JQuery Identifier
  n = $("#badges"),

  // Badges Array
  r = [],

  // Badges Count
  i = 0;

  // Json Parse Treehouse User Badges Info
  $.getJSON(t, function (e) {

    // User Json Parse Select Badges Info
   var t = e.badges;

    // Format Each badge's HTML
   $.each(t, function (e, t) {
   r += '&lt;li&gt;&lt;a href="' + t.url + '" target="_blank"&gt;&lt;img src="' + t.icon_url + '" alt="' + t.name + '" title="' + t.name + '"/&gt;&lt;/a&gt;&lt;/li&gt;';
   i++
   });

    // Append Badge to #badges
   n.append(r);

    // Header Badges count generator
   $("#treehouse-count").append('I have earned ' + i + ' badges at Treehouse!');
  });
});
