var dia = document.getElementById('dia')
var bomdia = document.getElementById('bomdia')
var hoje = new Date()
var diasem = hoje.getDay()
if (diasem == 0) {
    dia.innerHTML = 'Hoje é domingo'
    bomdia.innerHTML = 'Bom domingo!'
} else if (diasem == 1) {
    dia.innerHTML = 'Hoje é segunda-feira'
    bomdia.innerHTML = 'Boa segunda-feira!'
} else if (diasem == 2) {
    dia.innerHTML = 'Hoje é terça-feira'
    bomdia.innerHTML = 'Boa terça-feira!'
} else if (diasem == 3) {
    dia.innerHTML = 'Hoje é quarta-feira'
    bomdia.innerText = 'Boa quarta-feira!'
} else if (diasem == 4) {
    dia.innerHTML = 'Hoje é quinta-feira'
    bomdia.innerHTML = 'Boa quinta-feira!'
} else if (diasem == 5) {
    dia.innerHTML = 'Hoje é sexta-feira'
    bomdia.innerHTML = 'Boa sexta-feira!'
} else if (diasem == 6) {
    dia.innerHTML = 'Hoje é sábado'
    bomdia.innerHTML = 'Bom sábado!'
}