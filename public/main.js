// The legion of the DOM //

// Modals and triggers
var loginModal = document.getElementById('modal')
var signupModal = document.getElementById('registration-modal')
var navLoginBtn = document.getElementById('nav-login-button')
var navSignupBtn = document.getElementById('nav-signup-button')

// Signup form fields
var signupUsernameInput = document.getElementById('signup-user')
var signupPass = document.getElementById('signup-password')
var confirmPass = document.getElementById('confirm-password')
var signupBtn = document.getElementById('signup-btn')
var errorDiv = document.getElementById('contentDiv')

var submitScoreBtn = document.querySelector('#submit-score-btn')
var result = document.querySelector('.result')

// Create good password hints
var letter = document.getElementById('letter')
var capital = document.getElementById('capital')
var number = document.getElementById('number')
var length = document.getElementById('length')

// Say Hello
var helloUser = document.getElementById('hello-user')

if (document.cookie) {
  var name = document.cookie.split('username=')[1]
  if (name) {
    helloUser.textContent = `Welcome back, ${name}!`
    navLoginBtn.classList.add('hidden')
    navSignupBtn.classList.add('hidden')
  }
} else {
  submitScoreBtn.disabled = true
  var warning = document.createElement('p')
  warning.classList.add('mistake')
  warning.textContent = 'You will need to Sign up or Log in to submit any scores'
  result.appendChild(warning)
}

// Show Login Modal
navLoginBtn.addEventListener('click', function (e) {
  loginModal.style.display = 'block'
  signupModal.style.display = 'none'
})
// Show Sign-up Modal
navSignupBtn.addEventListener('click', function (e) {
  signupModal.style.display = 'block'
  loginModal.style.display = 'none'
})

// Click out of Modals
window.onclick = function (event) {
  if (event.target === loginModal) {
    loginModal.style.display = 'none'
  } else if (event.target === signupModal) {
    signupModal.style.display = 'none'
  }
}

// Form Validation //

// Check username 8-20 Chars AND alphanumeric //

signupUsernameInput.addEventListener('keyup', function (e) {
  var input = signupUsernameInput.value
  var regex = new RegExp(/\W/, 'igm')
  if (input.length < 8 || input.length > 20) {
    errorDiv.textContent = 'Your username must be between 8-20 Characters'
    signupBtn.disabled = true
  } else if (regex.test(input)) {
    errorDiv.textContent = 'Your username can only have alphanumeric characters'
    signupBtn.disabled = true
  } else {
    errorDiv.textContent = null
    signupBtn.disabled = false
  }
})

// Prevent submit where passwords don't match & password not strong enough

confirmPass.addEventListener('keyup', function (e) {
  var firstPW = signupPass.value
  var secondPW = confirmPass.value
  if (firstPW !== secondPW) {
    errorDiv.textContent = 'Your passwords do not match'
    signupBtn.disabled = true
  } else if (!testPasswordValid(signupPass)) {
    errorDiv.textContent = 'Your password is not strong enough'
    signupBtn.disabled = true
  } else {
    errorDiv.textContent = null
    signupBtn.disabled = false
  }
})

// Show Password guidance on focus //
signupPass.addEventListener('focus', function (e) {
  document.getElementById('message').style.display = 'block'
})
signupPass.addEventListener('blur', function (e) {
  document.getElementById('message').style.display = 'none'
})

// Turn rules green when they are fulfilled & enable submit
function testInputValid (regex, warningText) {
  if (signupPass.value.match(regex)) {
    warningText.classList.remove('invalid')
    warningText.classList.add('valid')
    // enable submit button
    signupBtn.disabled = false
  } else {
    warningText.classList.remove('valid')
    warningText.classList.add('invalid')
    // disable submit button
    signupBtn.disabled = true
  }
}

function testPasswordValid (pw) {
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw) && /[0-9]/.test(pw) && /^.{8,}/.test(pw)) {
    return true
  } else {
    return false
  }
}

// Validate Input
signupPass.addEventListener('keyup', function (e) {
  var lowerCaseLetters = /[a-z]/g
  var upperCaseLetters = /[A-Z]/g
  var numbers = /[0-9]/g
  var lengthRegEx = /^.{8,}/

  testInputValid(lowerCaseLetters, letter)
  testInputValid(upperCaseLetters, capital)
  testInputValid(numbers, number)
  testInputValid(lengthRegEx, length)
})
