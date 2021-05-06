function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.src = 'images/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!!
        img.src = 'images/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!!
        img.src = 'images/fotonoite.png'
        document.body.style.background = '#515154'
    }
}
