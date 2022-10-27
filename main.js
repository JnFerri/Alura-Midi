var listaTeclas =[]
var listaAudios = []
var audios = [document.querySelectorAll('audio')].map(valor => valor.forEach(audio=> listaAudios.push(audio)))
var teclas = [document.querySelectorAll('.tecla')].map(valor => valor.forEach(tecla=>listaTeclas.push(tecla)))

listaTeclas.forEach(tecla => tecla.addEventListener('click', function(){
    listaAudios[listaTeclas.indexOf(tecla)].play()
}))




