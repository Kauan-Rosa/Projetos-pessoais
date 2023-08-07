function carregar () {
    var mensagem = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var fundo = document.getElementById('fundo')
    var agora = new Date()
    var hora = agora.getHours()
    if (hora >= 6 && hora < 13 ) {
        mensagem.innerHTML = `Bom dia! Agora são exatamente ${hora} horas da manhã.`
        img.src = 'imagens/dia.png'
        document.body.style.background = '#D9BB8D'
        document.body.style.color = '#6D859E'
    } else if (hora >= 13 && hora < 18) {
        mensagem.innerHTML = `Boa tarde! Agora são exatamente ${hora} horas da tarde.`
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#243C4C'
        document.body.style.color = '#6B747C'
    } else if (hora < 6) {
        mensagem.innerHTML = `Boa madrugada! Agora são exatamente ${hora} horas da madrugada.`
        img.src = 'imagens/noite.png'
        document.body.style.background = '#000712'
        document.body.style.color = '#BE8D5C'
    } else if (hora >= 18) {
        mensagem.innerHTML = `Boa noite! Agora são exatamente ${hora} horas da noite.`
        img.src = 'imagens/noite.png'
        document.body.style.background = '#000712'
        document.body.style.color = '#0C3C85'
    }
}