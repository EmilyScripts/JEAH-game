var modal = document.getElementById('modal')
var login = document.getElementById('Login')
login.addEventListener('click', function (e) {
  e.preventDefault()
  modal.style.display = 'block'
})

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}
