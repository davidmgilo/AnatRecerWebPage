//$(function(){
//    $("#includeNavbar").load("/assets/views/partials/navbar.html");
//});
$(document).ready(function(){
    $.get("/assets/views/partials/navbar.html", function(data) {
        $("#includeNavbar").html(data);
    });
});