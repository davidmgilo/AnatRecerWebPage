// $("#home:contains('Principal')").parent().parent().addClass('ca')
$(function(){
    var loc = window.location.href;
    if(/cat/.test(loc)){
        $('#Nav').addClass('cat')
        $('#RNav').addClass('cat')
        $('#home').attr('href','/assets/views/cat/principal.html')
        $('#group').attr('href','/assets/views/cat/about.html')
        $('#projects').attr('href','/assets/views/cat/projects.html')
        $('#publications').attr('href','/assets/views/cat/publish.html')
        $('#conferences').attr('href','/assets/views/cat/conference.html')
        $('#contacts').attr('href','/assets/views/cat/contact.html')
        $('#media').attr('href','/assets/views/cat/media.html')
    }else if (/es/.test(loc)){
        $('#Nav').addClass('es')
        $('#RNav').addClass('es')
        $('#home').attr('href','/assets/views/es/principal.html')
        $('#group').attr('href','/assets/views/es/about.html')
        $('#projects').attr('href','/assets/views/es/projects.html')
        $('#publications').attr('href','/assets/views/es/publish.html')
        $('#conferences').attr('href','/assets/views/es/conference.html')
        $('#contacts').attr('href','/assets/views/es/contact.html')
        $('#media').attr('href','/assets/views/es/media.html')
    }else {
        $('#Nav').removeClass('cat')
        $('#RNav').removeClass('cat')
    }
})