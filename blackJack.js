let cards = [] 
let sum = 0;
let hasBlackJack = false;
let isAlive = false;     
let restartClick = false;
let message = document.getElementById('qsn-ln')
let sumString = document.getElementById('sum-ln')
let cardEl = document.getElementById ("cards-ln")
let playAgain = document.getElementById ("playAgain-btn");
let firstCard = getRandomCards(), secondCard = getRandomCards();


function startGame(){
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard
    renderGame();
}

function renderGame(){
if(sum<21){
    message.innerHTML = "Do you want to draw a new card?";
}
else if(sum === 21){
    message.innerHTML = "Wow! you've got black jack"
    hasBlackJack = true;
    playAgain.style.display = 'block'
}else {
        message.innerHTML = "You're out of the game"
        isAlive = true;
        if(restartClick === false){
            playAgain.style.display = 'block'
            restartClick === true;
        }
        else{
            console.log("Heyy")
            playAgain.style.display = 'block'
            restartClick === true;
        }   
    }
sumString.innerHTML = "Sum: " + sum;
cardEl.innerHTML = "Cards: "
for (let card in cards){
    cardEl.innerHTML +=" " + cards[card];
}
}


function newCard(){
    console.log("cards")
    console.log(hasBlackJack,isAlive)
    if(hasBlackJack === false && isAlive === false){
        let card = getRandomCards();
        cards.push(card);
        console.log(cards)
        sum += card;
        renderGame()
    }
}


function restart(){
    //window.location.reload();
    
    console.log(cards)
        sum = 0;
        cards=null;
        console.log(cards)
        isAlive = false;
        hasBlackJack = false;
        sumString.innerHTML ="Sum: " + 0;
        cardEl.innerHTML ="Cards: " + 0;
        restartClick = true;
}


function getRandomCards(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) return 11;
    if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13) return 10;
    else return randomNumber
}