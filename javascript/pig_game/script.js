'use strict';

const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const current0 = document.getElementById('current--0')
const current1 = document.getElementById('current--1')
const playerEl0 = document.querySelector('.player--0')
const playerEl1 = document.querySelector('.player--1')


const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


let scores, currentScore, activePlayer , playing

    //start
const init = function(){
 scores = [0,0]
 currentScore = 0
 activePlayer = 0
 playing = true

    score0El.textContent = 0
    score1El.textContent = 0
    current0.textContent = 0
    current1.textContent = 0

    diceEl.classList.add('hidden') 
    playerEl0.classList.remove('player--winner')
    playerEl1.classList.remove('player--winner')
    playerEl0.classList.add('player--active')
    playerEl1.classList.remove('player--active')  
}

init()

const switchPlay = function(){
    document.getElementById(`current--${activePlayer}`)
        .textContent  = 0
        currentScore = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        playerEl0.classList.toggle('player--active')
        playerEl1.classList.toggle('player--active')
}

// functionality
btnRoll.addEventListener('click', function(){
    if (playing) {
           // randon dice roll 
   const dice = Math.trunc(Math.random()* 6) + 1;
   //Display
   diceEl.classList.remove('hidden')
   diceEl.src = `dice-${dice}.png`

   //Check ? true, switch to other player
    if (dice !== 1) {
        currentScore += dice
        document.getElementById(`current--${activePlayer}`)
        .textContent = currentScore
        
    } else {
        //switch player
        switchPlay()
    }
    }


})

btnHold.addEventListener('click', function(){
    if (playing) {
         //add current score
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
   
    if (scores[activePlayer] >= 10) {
        playing = false
        diceEl.classList.add('hidden')
        document.querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner')

        document.querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active')
        
        
    } else {
        switchPlay()
    }
    } 
})

//reload
btnNew.addEventListener('click', init)
