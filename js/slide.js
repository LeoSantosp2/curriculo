const botE = document.getElementById('left')
const botD = document.getElementById('right')
const divQuant = document.querySelectorAll('.opcao')
const bola = document.querySelector('.nav')
const dAtual = document.getElementById('sobre-mim')
let atual = 0

for(let i=0; i < divQuant.length; i++){
    let div = document.createElement('div')

    div.id = i

    bola.appendChild(div)
}

document.getElementById('0').classList.add('divAtual')

const cont = document.querySelectorAll('.nav div')

for(let i=0; i < cont.length; i++){
    cont[i].addEventListener('click', ()=>{
        atual = cont[i].id
        slide()
    })
}

botE.addEventListener('click', () =>{
    atual--
    slide()
})

botD.addEventListener('click', () =>{
    atual++
    slide()
})

function slide(){
    if(atual >= divQuant.length){
        atual = 0
    }
    else if(atual < 0){
        atual = divQuant.length - 1
    }

    document.querySelector('.divAtual').classList.remove('divAtual')
    dAtual.style.marginLeft = -33.33 * atual + '%'
    document.getElementById(atual).classList.add('divAtual')
}