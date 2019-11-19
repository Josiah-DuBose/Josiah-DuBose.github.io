$(document).ready(function() {
    $("#loadBio, #nav-bio").click(loadBio);
    $("#loadResume, #nav-resume").click(loadResume);
    $("#loadProjects, #nav-projects").click(loadProjects);
    $("#home").show();
    $(document).prop('title', 'Home');
    $("#nav-home").click(() => {
        $(".container-fluid").hide();
        $("#home").show();
        $(".nav").hide();
    });
});

function loadBio() {
    prepPage('Bio');
    $(".nav-item.bio").addClass(' active');
    $(".container-fluid").load('partials/bio.html');
}

function loadResume() {
    prepPage('Resume');
    $(".nav-item.resume").addClass(' active');
    $(".container-fluid").load('partials/resume.html', function() {
        $("#resume").height($(window).height());
    });
}

function loadProjects() {
    prepPage('Projects');
    $(".nav-item.projects").addClass(' active');
    $(".container-fluid").load('partials/projects.html');
}

function prepPage(page) {
    $("#home").hide();
    $(document).prop('title', page);
    $(".nav").show();
    $(".navbar-nav").find("li.active").each(function(index, element){
        $(element).removeClass("active");
    });
    $(".container-fluid").empty().show();
}
