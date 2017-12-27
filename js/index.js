$(document).ready(function() {
    $("#loadBio, #nav-bio").click(loadBio);
    $("#loadResume, #nav-resume").click(loadResume);
    $("#loadProjects, #nav-projects").click(loadProjects);
    $("#home").show();
    $("#nav-home").click(() => {
        $(".container-fluid").hide();
        $("#home").show();
        $(".nav").hide();
    });
});

function loadBio() {
    prepPage();
    $(".nav-item.bio").addClass(' active');
    $(".container-fluid").load('partials/bio.html');
}

function loadResume() {
    prepPage();
    $(".nav-item.resume").addClass(' active');
    $(".container-fluid").load('partials/resume.html');
}

function loadProjects() {
    prepPage();
    $(".nav-item.projects").addClass(' active');
    $(".container-fluid").load('partials/projects.html');
}

function prepPage() {
    $("#home").hide();
    $(".nav").show();
    $(".navbar-nav").find("li.active").each(function(index, element){
        $(element).removeClass("active");
    });
    $(".container-fluid").empty().show();
}
