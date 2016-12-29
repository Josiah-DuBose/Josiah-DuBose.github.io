function scrollResume(){
    console.log("hi")
    $('html, body').animate({
        scrollTop: $("#resume_section").offset().top
    }, 500);
}
$("#resume").click(scrollResume)
