const handler = require('./handler');
const router = (request, response) => {

const url = request.url;

  if (url === '/') {
    handler.homeRoute(request, response);
  }
  
}

module.exports = router;