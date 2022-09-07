class Slides{
    constructor(){
        this.slides = document.querySelectorAll('.slide')
        this.nav = document.querySelector('.nav')
        this.divAtual = document.getElementById('sobre-mim')
        this.atual = 0
        this.criarDiv()
        this.cont()
        this.clicarBtn()
    }

    criarDiv(){
        for(let i = 0; i < this.slides.length; i++){
            const div = document.createElement('div')

            div.id = i

            this.nav.appendChild(div)
        }

        document.getElementById('0').classList.add('atual')
    }

    cont(){
        const cont = document.querySelectorAll('.nav div')

        for(let i = 0; i < cont.length; i++){
            cont[i].addEventListener('click', ()=>{
                this.atual = cont[i].id
                this.transition()
            })
        }
    }

    clicarBtn(){
        document.addEventListener('click', e =>{
            const event = e.target

            if(event.classList.contains('leftB')){
                this.atual--
                this.transition()
            }
            if(event.classList.contains('rightB')){
                this.atual++
                this.transition()
            }
        })
    }

    transition(){
        if(this.atual >= this.slides.length){
            this.atual = 0
        }
        else if(this.atual < 0){
            this.atual = this.slides.length - 1
        }

        document.querySelector('.atual').classList.remove('atual')
        this.divAtual.style.marginLeft = -25 * this.atual + '%'
        document.getElementById(this.atual).classList.add('atual')
    }
}

const slide = new Slides()