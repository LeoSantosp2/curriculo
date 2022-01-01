var botE = window.document.getElementById('left')
var botD = window.document.getElementById('right')
var divQuant = window.document.querySelectorAll('.opcao')
var bola = window.document.querySelector('.nav')
var dAtual = window.document.getElementById('opc')
var atual = 0

for(var d=0; d < divQuant.length; d++){
    var div = window.document.createElement('div')

    div.id = d

    bola.appendChild(div)

}

window.document.getElementById('0').classList.add('divAtual')

var cont = window.document.querySelectorAll('.nav div')

cont[0].addEventListener('click', ()=>{
    atual = cont[0].id
    slide()
})

cont[1].addEventListener('click', ()=>{
    atual = cont[1].id
    slide()
})

cont[2].addEventListener('click', ()=>{
    atual = cont[2].id
    slide()
})

botE.addEventListener('click', back)

function back(){
    atual--
    slide()
}

botD.addEventListener('click', next)

function next(){
    atual++
    slide()
}

function slide(){
    if(atual >= divQuant.length){
        atual = 0
    }
    else if(atual < 0){
        atual = divQuant.length - 1
    }

    window.document.querySelector('.divAtual').classList.remove('divAtual')
    dAtual.style.marginLeft = -33.33 * atual + '%'
    window.document.getElementById(atual).classList.add('divAtual')
}