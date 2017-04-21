function changeLan(lan){
    var nav = document.getElementById("Nav");
    if(lan === 'English'){
        nav.classList.add('en');
        nav.classList.remove('ca');
        nav.classList.remove('es');
    }else if (lan === 'Catala'){
        nav.classList.add('ca');
        nav.classList.remove('en');
        nav.classList.remove('es');
    }
}
