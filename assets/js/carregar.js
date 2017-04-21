// $("#home:contains('Principal')").parent().parent().addClass('ca')
$(function(){
    var loc = window.location.href;
    if(/cat/.test(loc)){
        $('#Nav').addClass('cat')
        $('#home').attr('href','/assets/views/cat/principal.html')
    }else {
        $('#Nav').removeClass('cat')
    }
})