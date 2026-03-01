let firstCard = 4;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    cardsEl.textContent = 'Cards: ' + firstCard + " " + secondCard
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
    console.log("drawing a new card from the deck!")
    let newDraw = 7;
    sum = sum + newDraw

    startGame()
}