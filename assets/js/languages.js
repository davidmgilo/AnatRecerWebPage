function changeLan(lan){
    var nav = document.getElementById("Nav");
    if(lan === 'English'){
        nav.classList.add('en');
        nav.classList.remove('cat');
        nav.classList.remove('es');
        location.href='http://localhost:8080/'
    }else if (lan === 'Catala'){
        nav.classList.add('cat');
        nav.classList.remove('en');
        nav.classList.remove('es');
        location.href='http://localhost:8080/assets/views/cat/principal.html'
    }
}
