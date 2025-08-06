/*-------------------------------- Constants --------------------------------*/

const state ={boredom : 0,
hunger :0,
sleepiness:0}
let timer=0
let gameOver

/*---------------------------- Variables (state) ----------------------------*/
gameOver=false

/*------------------------ Cached Element References ------------------------*/

const boredomStatEl=document.querySelector("#boredom-stat")
const hungerStatEl=document.querySelector("#hunger-stat")
const sleepinessStatEl=document.querySelector("#sleepiness-stat")

const playbtn=document.querySelector("#play")
const feedbtn=document.querySelector("#feed")
const sleepbtn=document.querySelector("#sleep")

const gameMessageEl=document.querySelector("#message")
const resstbtn=document.querySelector("#restart")   
/*-------------------------------- Functions --------------------------------*/
function init(){
    setInterval(runGame,2000)
}
function runGame() {
        if (gameOver) return;
    updateStates()
    checkGameOver()
    render()
}
function render() {
    boredomStatEl.textContent=state.boredom
    hungerStatEl.textContent=state.hunger
    sleepinessStatEl.textContent=state.sleepiness
    if (gameOver===true){clearInterval(timer)}  
}
function updateStates(){
    state.hunger+=Math.floor(Math.random()*4)
    state.boredom+=Math.floor(Math.random()*4)
    state.sleepiness+=Math.floor(Math.random()*4)

}
function checkGameOver(){
    if (state.boredom>=10||state.hunger>=10||state.sleepiness>=10) {
        gameOver=true
        resstbtn.classList.remove("hidden");
        gameMessageEl.classList.remove("hidden");
        render()
    }
}
function playbtnClick(){
    state.boredom=0
    render()
}
function feedbtnClick(){
    state.hunger=0
    render()
}
function sleepbtnClick(){
    state.sleepiness=0
    render()
}


/*----------------------------- Event Listeners -----------------------------*/

sleepbtn.addEventListener('click',sleepbtnClick)
playbtn.addEventListener('click',playbtnClick)
feedbtn.addEventListener('click',feedbtnClick)
resstbtn.addEventListener('click',init)

init()