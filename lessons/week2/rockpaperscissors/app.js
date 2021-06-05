const Rock = document.getElementById("r")
const Paper = document.getElementById("p")
const Scissors = document.getElementById("s")

const userScore_p = document.getElementById('user-score')
const computerScore_p = document.getElementById('computer-score')

const message = document.getElementById("message")

function game(){
    console.log('Hola')
}

Rock.addEventListener('click', function(){
    game('r')
})
Paper.addEventListener('click', function(){
    game('p')
})
Scissors.addEventListener('click', function(){
    game('s')
})