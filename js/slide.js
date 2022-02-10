const botE = window.document.getElementById('left')
const botD = window.document.getElementById('right')
var divQuant = window.document.querySelectorAll('.opcao')
var bola = window.document.querySelector('.nav')
var dAtual = window.document.getElementById('sobre-mim')
let atual = 0

for(let i=0; i < divQuant.length; i++){
    let div = window.document.createElement('div')

    div.id = i

    bola.appendChild(div)
}

window.document.getElementById('0').classList.add('divAtual')

var cont = window.document.querySelectorAll('.nav div')

for(let i=0; i < cont.length; i++){
    cont[i].addEventListener('click', ()=>{
        atual = cont[i].id
        slide()
    })
}

botE.addEventListener('click', back)
botD.addEventListener('click', next)

function back(){
    atual--
    slide()
}

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