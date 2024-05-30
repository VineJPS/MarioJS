const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const jump = () =>{
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const pipePositon = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    console.log(marioPosition)

    if(pipePositon <= 120 && marioPosition < 80 && pipePositon > 0){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePositon}px`
        
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginleft = '50px'

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown' , jump)