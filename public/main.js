// The legion of the DOM //

var modal = document.getElementById('modal')
var login = document.getElementById('Login')
var rModal = document.getElementById('registration-modal')
var signUp = document.getElementById('sign-up')
var signupForm = document.getElementById('signup-form')
var signupUser = document.getElementById('signup-user')
var signupPass = document.getElementById('signup-password')
var submit = document.getElementById('submit')
var signupBtn = document.getElementById('signup-btn')
var confirmPass = document.getElementById('confirm-password')
// For submit validation //
var myInput = document.getElementById('psw')
var letter = document.getElementById('letter')
var capital = document.getElementById('capital')
var number = document.getElementById('number')
var length = document.getElementById('length')

// Modal Scripts//
login.addEventListener('click', function (e) {
  e.preventDefault()
  modal.style.display = 'block'
})

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}

signUp.addEventListener('click', function (e) {
  e.preventDefault()
  rModal.style.display = 'block'
})

window.onclick = function (event) {
  if (event.target === rModal) {
    modal.style.display = 'none'
  }
}

// Form Validation //

// Username //

signupUser.addEventListener('keyup', function (e) {
  var regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
  var errorMessage = document.createElement('p')
  var errorDiv = document.getElementById('error-message')
  if (regex.test(signupUser.value) === false) {
    errorMessage.textContent = 'Your username must be between 8-20 Characters'
    while (errorDiv.firstChild) {
      errorDiv.removeChild(errorDiv.firstChild)
    }
    errorDiv.appendChild(errorMessage)
    console.log('Not working')
  } else if (errorDiv.firstChild) {
    errorDiv.removeChild(errorDiv.firstChild)
  }
})

// Submit //

signupBtn.addEventListener('click', function (e) {
  var submitErr = document.createElement('p')
  var errorDiv = document.getElementById('error-message')
  if (errorDiv.firstChild) {
    submitErr.textContent = 'Username needs filling in'
    while (submit.firstChild) {
      submit.removeChild(errorDiv.firstChild)
    }
    submit.appendChild(submitErr)
  } else if (signupPass.value !== confirmPass.value) {
    submitErr.textContent = 'Passwords do not match'
    if (submit.firstChild) {
      submit.removeChild(errorDiv.firstChild)
    }
    submit.appendChild(submitErr)
  }
})

// Password //

signupPass.addEventListener('focus', function (e) {
  document.getElementById('message').style.display = 'block'
})

signupPass.addEventListener('blur', function (e) {
  document.getElementById('message').style.display = 'none'
})

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
