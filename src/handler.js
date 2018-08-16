const fs = require('fs');
const path = require('path');
const getLeaderboard = require('./getData');
const { updateUsers, updateScores } = require('./postData');
const querystring = require('querystring');
const cookie = require('cookie');

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
  });
},

  handlePublic: (request, response) => {
    const extension = request.url.split('.')[1];

    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon",
      jpg: "image/jpg",
      png: "image/png",
      json: "application/json"
    };

    fs.readFile(path.join(__dirname, '..', request.url), (error, file) => {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/html'});
        response.end("ERROR, YOU'VE BEEN HACKED");
      } else {
        response.writeHead(200, {'Content-Type': `${extensionType[extension]}`});
        response.end(file);
      }
    });
  },

  getData: (request, response) => {
    getLeaderboard( (error, table) => {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/html'});
        response.end('Error accessing database');
      } else {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(table));
      }
    });
  },

  postUser: (request, response) => {
    let data = '';
    request.on('data',(chunk) => {
      data += chunk; 
    });
    request.on('end', () => {
      const userData = querystring.parse(data);
      updateUsers(userData, (error, res) => {
        if (error) {
          response.writeHead(500, {'Content-Type': 'text/html'});
          response.end('Error with updating users');
        } else {
          response.writeHead(302, {'Location': '/', 'Set-cookie':`username=${userData.username} ; HttpOnly`});
          response.end();
        }
      });
    });
  },

  postScore: (request, response) => {
    let data = '';
    request.on('data', (chunk) => {
      data += chunk;
    });
    request.on('end', () => {
      const scoreData = querystring.parse(data);
      let username = null;
      if ( request.headers.cookie ) {
        const cookies = cookie.parse(request.headers.cookie);
        username = cookies.username;
      }
      updateScores(scoreData, username, (error, res) => {
        if (error) {
          response.writeHead(500, {'Content-Type': 'text/html'});
          response.end(`Error with updating scores: ${error}`);
        } else {
          response.writeHead(302, {'location': '/'});
          response.end();
        }
      });
    });
  }
}


module.exports = handler;