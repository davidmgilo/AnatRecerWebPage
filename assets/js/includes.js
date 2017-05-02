//$(function(){
//    $("#includeNavbar").load("/assets/views/partials/navbar.html");
//});
$(document).ready(function(){
    $.get("/assets/views/partials/navbar.html", function(data) {
        $("#includeNavbar").html(data);
    });
    $.get("/assets/views/partials/footer.html", function(data) {
        $("#includeFooter").html(data);
    });
    $.get("/assets/views/partials/publications.html", function(data) {
        $("#includePublications").html(data);
    });
    $.get("/assets/views/partials/conferences.html", function(data) {
        $("#includeConferences").html(data);
    });
});