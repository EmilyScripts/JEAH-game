var table = document.querySelector('table')

function request (cb) {
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var parsedData = JSON.parse(xhr.responseText)
      console.log(parsedData)
      cb(parsedData)
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      console.log('There was an error getting the data', xhr.responseText)
    }
  }
  xhr.open('GET', /data/, true)
  xhr.send()
}

function renderData (arr) {
  var count = 1

  arr.forEach(function (el) {
    var row = document.createElement('tr')
    appendTableData(row, count)
    appendTableData(row, el.name)
    appendTableData(row, el.scores)
    count++
    table.appendChild(row)
  })
}

function appendTableData (row, text) {
  var td = document.createElement('td')
  td.textContent = text
  row.appendChild(td)
}

request(renderData)
