const handler = require('./handler');
const router = (request, response) => {

const url = request.url;

  if (url === '/') {
    handler.homeRoute(request, response);
  } else if (url.indexOf('/public/') !== -1) {
    handler.handlePublic(request, response);
  }
};

module.exports = router;