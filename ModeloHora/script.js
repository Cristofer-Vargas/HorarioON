function Carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var msg = document.getElementById('msg')
    var corpo = document.getElementById('body')
    var img = document.getElementById('ImagemRef')
    msg.innerHTML = `Agora são: ${hora} horas`
    
    if(hora<12&&hora>=0){
        img.src = 'Manha.png'
        document.body.style.background = 'orange'
    }else if (hora>=12&&hora<=18){
        img.src = 'Tarde.png'
        document.body.style.background = 'gray'
    }else {
        img.src = 'Noite.png'
        document.body.style.background = '#1C1C1C'
    }
}