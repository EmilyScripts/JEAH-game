const handler = require('./handler');
const router = (request, response) => {

const url = request.url;

  if (url === '/') {
    handler.homeRoute(request, response);
  } else if (url.indexOf('/public/') !== -1) {
    handler.handlePublic(request, response);
  } else if (url.indexOf('/data/') !== -1) {
    handler.getData(request, response);
  } else {
    response.writeHead(404,{ 'Content-Type' : 'text/html' });
    response.end('This is not the url you are looking 404');
  }
};

module.exports = router;