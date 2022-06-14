function pagina()  {
    var msg = document.getElementById('msg')
    
    var img = document.getElementById('imagem')
    var data = new Date()
     var hora = data.getHours()
     var min = data.getMinutes()
    //var hora = 15
    msg.textContent = `Agora são ${hora}:${min} horas.`

    if (hora >=0 && hora < 12){
        //Bom dia
    img.src = 'bom-dia.jpg'
    document.body.style.background = '#e2cd9f'
}
else if (hora>=12 && hora <=18){
    //boa tarde
    img.src = 'boa-tarde.png'
    document.body.style.background = '#b9846f'
}
else {
    // Boa noite
      img.src = 'boa-noite.png'
      document.body.style.background = '#515154'

}


   

}

