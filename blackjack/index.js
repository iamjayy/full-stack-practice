let firstCard = 4;
let secondCard = 11;
let cards = [firstCard, secondCard] 
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = 'Cards: ' 

    for (let i = 0; i <cards.length; i ++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

if(sum <= 20 ) {
    message = "Do you want to draw a new card"
} else if (sum === 21) {
    message = "you won "
    hasBlackJack = true
} else {
    message = "you lost"
    isAlive = false
} 

messageEL.textContent = message
}

function newCard() {
    let newDraw = 7;
    sum += newDraw

    cards.push(newDraw)
console.log(cards)
    renderGame()
}