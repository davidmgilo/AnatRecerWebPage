// $("#home:contains('Principal')").parent().parent().addClass('ca')
$(function(){
    var loc = window.location.href;
    if(/cat/.test(loc)){
        $('#Nav').addClass('cat')
        $('#home').attr('href','/assets/views/cat/principal.html')
        $('#group').attr('href','/assets/views/cat/about.html')
        $('#projects').attr('href','/assets/views/cat/projects.html')
        $('#publications').attr('href','/assets/views/cat/publish.html')
        $('#contacts').attr('href','/assets/views/cat/contact.html')
    }else {
        $('#Nav').removeClass('cat')
    }
})