var userScore = 0
var computerScore = 0

const Rock = document.getElementById("r")
const Paper = document.getElementById("p")
const Scissors = document.getElementById("s")

const userScore_p = document.getElementById('user-score')
const computerScore_p = document.getElementById('computer-score')

const message = document.getElementById("message")

function getComputerChoice(){
    const Choices = ['r', 'p', 's']
    let random = Math.floor(Math.random()*3 )
    return Choices[random]
}

function updateScore(){
    userScore_p.innerHTML = userScore
    computerScore_p.innerHTML = computerScore
}

function convert(choice){
    if (choice === 'r' ) return 'Piedra'
    if (choice === 'p' ) return 'Papel'
    return 'Tijeras'
}

function lose(user, computer){
    computerScore++
    // updateScore()
    message.innerHTML = `${convert(user)} pierde contra ${convert(computer)}, entonces perdiste 😥`
}
function win(user, computer){
    userScore++
    // updateScore()
    message.innerHTML = `${convert(user)} le gana a ${convert(computer)}, entonces ganaste 😎`
}
function draw(user, computer){
    message.innerHTML = `${convert(user)} es igual a ${convert(computer)}, hay empate 😑`
}

function changeColors(HTMLElement, state){
    HTMLElement.className = 'choice ' + state
    setTimeout( () => {
        HTMLElement.className = 'choice'
    }, 1000)
}

function game(userChoice, Element){
    let computerChoice = getComputerChoice()
    switch(userChoice + computerChoice){ // ps
        case 'ps':
        case 'sr':
        case 'rp':
            changeColors(Element, 'lose')
            lose(userChoice,computerChoice)
            break;
        case 'sp':
        case 'rs':
        case 'pr':
            changeColors(Element, 'win')
            win(userChoice,computerChoice)
            break;
        case 'ss':
        case 'rr':
        case 'pp':
            changeColors(Element, 'draw')
            draw(userChoice,computerChoice)
            break;
    }
}

Rock.addEventListener('click', function(){
    game('r', this)
})
Paper.addEventListener('click', function(){
    game('p', this)
})
Scissors.addEventListener('click', function(){
    game('s', this)
})