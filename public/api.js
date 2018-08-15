var dummy = [
  {name: 'Armand', score: 11.5},
  {name: 'Jessie', score: 3.2},
  {name: 'Harry', score: 7}
]

function request (data, cb) {
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var parsedData = JSON.parse(xhr.responseText)
      cb(parsedData)
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      console.log('There was an error getting the data', xhr.responseType)
    }
  }
  xhr.open(GET, '/data', true)
  xhr.send()
}
