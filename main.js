var listaTeclas = [document.querySelectorAll('.tecla')]
var listaAudios = [document.querySelectorAll('audio')]


function playAudio(value){
    listaAudios.map(n => n[value].play())
}