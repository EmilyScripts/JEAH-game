console.log(document.cookie)

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

// Create good password hints
var letter = document.getElementById('letter')
var capital = document.getElementById('capital')
var number = document.getElementById('number')
var length = document.getElementById('length')

// Show Login Modal
navLoginBtn.addEventListener('click', function (e) {
  loginModal.style.display = 'block'
})
// Click out of Modal
window.onclick = function (event) {
  if (event.target === loginModal) {
    loginModal.style.display = 'none'
  }
}

// Show Sign-up Modal
navSignupBtn.addEventListener('click', function (e) {
  signupModal.style.display = 'block'
})
// Click out of Modal
window.onclick = function (event) {
  if (event.target === signupModal) {
    loginModal.style.display = 'none'
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

// Prevent submit where passwords don't match //

confirmPass.addEventListener('keyup', function (e) {
  var firstPW = signupPass.value
  var secondPW = confirmPass.value
  if (firstPW !== secondPW) {
    errorDiv.textContent = 'Your passwords do not match'
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

// Turn rules green when they are fulfilled //
// Validate lowecase letters
signupPass.addEventListener('keyup', function (e) {
  var lowerCaseLetters = /[a-z]/g
  if (signupPass.value.match(lowerCaseLetters)) {
    letter.classList.remove('invalid')
    letter.classList.add('valid')
  } else {
    letter.classList.remove('valid')
    letter.classList.add('invalid')
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g
  if (signupPass.value.match(upperCaseLetters)) {
    capital.classList.remove('invalid')
    capital.classList.add('valid')
  } else {
    capital.classList.remove('valid')
    capital.classList.add('invalid')
  }

  // Validate numbers
  var numbers = /[0-9]/g
  if (signupPass.value.match(numbers)) {
    number.classList.remove('invalid')
    number.classList.add('valid')
  } else {
    number.classList.remove('valid')
    number.classList.add('invalid')
  }

  // Validate length
  if (signupPass.value.length >= 8) {
    length.classList.remove('invalid')
    length.classList.add('valid')
  } else {
    length.classList.remove('valid')
    length.classList.add('invalid')
  }
})
