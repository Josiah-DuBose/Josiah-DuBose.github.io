function scrollResume(){
    $('html, body').animate({
        scrollTop: $("#resume_section").offset().top - 5
    }, 1);
}
$("#resumeButton").click(scrollResume)
$("#resumebutton").click(scrollResume)


function scrollPortfolio(){
    $('html, body').animate({
        scrollTop: $("#portfolio_section").offset().top
    }, 1);
}
$("#projects").click(scrollPortfolio)


function scrollBio(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1);
}
$("#bioButton").click(scrollBio)
