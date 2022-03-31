function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagen');
    var date = new Date()
    var hora = date.getHours()
    var min = date.getMinutes()
    var seg = date.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        img.src = './img/fotodamanha.png'
        document.body.style.background = '#EAC193'
    }else if(hora >= 0 && hora <= 18){
        img.src = './img/fotodatarde.png'
        document.body.style.background = '#F9A42F'
    }else{
        img.src = './img/fotodanoite.png'
        document.body.style.background = '#7A6560'
    } 
}

