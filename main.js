var listaTeclas =[]
var listaAudios = []
new Array(document.querySelectorAll('audio')).map(valor => valor.forEach(audio=> listaAudios.push(audio)))
new Array(document.querySelectorAll('.tecla')).map(valor => valor.forEach(tecla=>listaTeclas.push(tecla)))

listaTeclas.forEach(tecla => tecla.addEventListener('click', function(){
    if(listaTeclas.indexOf(tecla) > listaAudios.length - 1){
        alert('Som não encontrado, Necessario adicionar audio ao HTML')
    }else{
    listaAudios[listaTeclas.indexOf(tecla)].play()
    }
    
}))

listaTeclas.forEach(tecla => tecla.onkeydown = function(event){
    if(event.code == 'Enter' ||event.code == 'Space' ){
    tecla.classList.add('ativa')
    }
})

listaTeclas.forEach(tecla => tecla.onkeyup = function(event){
    if(event.code== 'Enter' || event.code == 'Space'){
    tecla.classList.remove('ativa')
    }
})




