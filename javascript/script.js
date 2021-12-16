'use strict';

let score = 20
let highScore =0



let secretNumber = Math.trunc(Math.random()*20) +1;
document.querySelector('.number').textContent ;

document.querySelector('.check').addEventListener( 'click', function() {
    const guess =Number( document.querySelector('.guess').value)
    console.log(guess, typeof guess)
    
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!'
  } else if(guess === secretNumber){
    
    document.querySelector('.message').textContent = 'Correct Number'
    document.querySelector('body').style.background ='#63ce54'
    document.querySelector('.number').style.width='30rem'
    document.querySelector('.number').textContent = secretNumber ;
    if(score > highScore){
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }

  } else if(guess > secretNumber){
    if (score > 0) {
     document.querySelector('.message').textContent = 'Too High'
    score --
    document.querySelector('.score').textContent = score
    }else{
      document.querySelector('.message').textContent = 'LOSER'
    }
  }else if(guess < secretNumber){
    if (score > 0) {
     document.querySelector('.message').textContent = 'Too lOW'
    score --
    document.querySelector('.score').textContent = score
    }else{
      document.querySelector('.message').textContent = 'LOSER'
    }
}
}
)


document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  let secretNumber = Math.trunc(Math.random()*20) +1;

  document.querySelector('.message').textContent = 'Start guessing again...'

  document.querySelector('.score').textContent = '20'

  document.querySelector('.number').textContent = '?'

  document.querySelector('.guess').value = ''

  document.querySelector('body').style.background ='#222'
    document.querySelector('.number').style.width='15rem'
})

