var input = document.querySelector('#alphabet')
var scoreInput = document.querySelector('#scoreHidden')
var reset = document.querySelector('#reset')
var result = document.querySelector('.result')
// var form = document.querySelector('form')
var submit_score_btn = document.querySelector('#submit-score-btn')

// var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var startTime = 0
var endTime = 0
var score = null

//
var gameStrings = ['abcdefghijklmnopqrstuvwxyz', "It's only going to get harder from here", 'The quick brown fox jumps over the lazy dog', 'Brick quiz whangs jumpy veldt fox!', 'Quick wafting zephyrs vex bold Jim', 'B, C, F, G, H, I, J, K, M, O, P, Q, U, V, W, X, Y, and Z are letters', 'The five boxing wizards jumped quickly.', 'Mix Zapf with Veljovic and get quirky Beziers.']
var rand = gameStrings[Math.floor(Math.random() * gameStrings.length)]
//

window.addEventListener('load', function (e) {
  var stringDiv = this.document.getElementById('random-string')
  stringDiv.textContent = rand
})

input.addEventListener('keyup', function (e) {
  if (startTime == 0) {
    startTime = new Date()
  } else if (endTime == 0 && input.value == rand) {
    endTime = new Date()
    score = (endTime - startTime) / 1000
    var scoreElement = document.createElement('p')
    scoreElement.textContent = 'Your score is: ' + score + ' seconds'
    result.appendChild(scoreElement)
    scoreInput.value = score
    submit_score_btn.classList.remove('hidden')
  }
  var matcher = new RegExp(input.value)
  if (matcher.test(rand) === true) {
    input.classList.remove('mistake')
  } else {
    input.classList.add('mistake')
  }
})

reset.addEventListener('click', function (e) {
  e.preventDefault()
  startTime = 0
  endTime = 0
  score = null
  input.value = null
  input.focus()
  result.textContent = null
  submit_score_btn.classList.add('hidden')
})

input.addEventListener('paste', function (e) {
  e.preventDefault()
  result.textContent = 'You copied and pasted you CHEAT!'
})

// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log(e);
// })
