var modal = document.getElementById('modal')
var login = document.getElementById('Login')
var rModal = document.getElementById('registration-modal')
var signUp = document.getElementById('sign-up')
var signupForm = document.getElementById('signup-form')
var signupUser = document.getElementById('signup-user')
var signUpPass = document.getElementById('signup-password')
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
var clearNode = function () {

}

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
