function slide(){
    const abas = document.querySelectorAll('.aba')
    const ball = document.querySelector('.nav')
    const divAtual = document.getElementById('sobre-mim')
    let atual = 0

    for(let i = 0; i < abas.length; i++){
        let div = document.createElement('div')

        div.id = i

        ball.appendChild(div)
    }

    document.getElementById('0').classList.add('atual')

    const cont = document.querySelectorAll('.nav div')

    for(let i=0; i < cont.length; i++){
        cont[i].addEventListener('click', ()=>{
            atual = cont[i].id
            transition()
        })
    }

    document.addEventListener('click', e =>{
        const event = e.target

        if(event.classList.contains('leftB')){
            atual--
            transition()
        }

        if(event.classList.contains('rightB')){
            atual++
            transition()
        }
    })

    function transition(){
        if(atual >= abas.length){
            atual = 0
        }
        else if(atual < 0){
            atual = abas.length - 1
        }

        document.querySelector('.atual').classList.remove('atual')
        divAtual.style.marginLeft = -33.33 * atual + '%'
        document.getElementById(atual).classList.add('atual')
    }
}

slide()