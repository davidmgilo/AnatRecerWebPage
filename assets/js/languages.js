function changeLan(lan){
    var nav = document.getElementById("Nav");
    var rnav = document.getElementById("RNav");
    if(lan === 'English'){
        nav.classList.add('en');
        rnav.classList.add('en');
        nav.classList.remove('cat');
        rnav.classList.remove('cat');
        nav.classList.remove('es');
        rnav.classList.remove('es');
        location.href='http://localhost:8080/'
    }else if (lan === 'Catala'){
        nav.classList.add('cat');
        rnav.classList.add('cat');
        nav.classList.remove('en');
        rnav.classList.remove('en');
        nav.classList.remove('es');
        rnav.classList.remove('es');
        location.href='http://localhost:8080/assets/views/cat/principal.html' //TODO ref to server side
    } else if (lan === 'Español'){
        nav.classList.add('es');
        rnav.classList.add('es');
        nav.classList.remove('en');
        rnav.classList.remove('en');
        nav.classList.remove('cat');
        rnav.classList.remove('cat');
        location.href='http://localhost:8080/assets/views/es/principal.html' //TODO ref to server side
    }
}
