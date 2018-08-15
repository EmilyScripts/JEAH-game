const fs = require('fs');
const path = require('path');

const handler = {
homeRoute: (request, response) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'),
  (error, file) => {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/html'});
      response.end("ERROR, YOU'VE BEEN HACKED");
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(file);
    }
  }
)
}
}
module.exports = handler;
