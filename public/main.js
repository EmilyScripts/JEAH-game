var modal = document.getElementById('modal')
var login = document.getElementById('Login')
var rModal = document.getElementById('registration-modal')
var signUp = document.getElementById('sign-up')
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
