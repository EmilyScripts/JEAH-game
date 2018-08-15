const tape = require('tape');
const supertest = require('supertest');
const router = require('../src/router');
const fs = require('fs');
const path = require('path');

tape('test that tape is working in handler test file',(t) => {
  t.equals("cat","cat","cat should equal cat");
  t.end();
});

tape('Check Home routes returns status code 200', (t) => {
  supertest(router)
  .get("/")
  .expect(200)
  .expect("Content-Type", /html/)
  .end((error, response) => {
    t.error(error, "no error");
    t.equal(response.statusCode, 200, "Should return 200");
    t.end();
  });
});

tape('Check Home route returns status code 500', (t) => {
  fs.rename(path.join(__dirname, '..', 'public', 'index.html'),
  (path.join(__dirname, '..', 'public', 'renamed.html')), (err) => {
    if (err) throw err;
  });
  supertest(router)
  .get('/')
  .expect(500)
  .expect('Content-Type', /html/)
  .end((error, response) => {
    t.error(error, 'no error');
    t.equal(response.statusCode, 500, 'Should return 500');
    t.end(fs.rename(path.join(__dirname, '..', 'public', 'renamed.html'),
    (path.join(__dirname, '..', 'public', 'index.html')), (err) => {
      if (err) throw err;
    }));
  });
});

tape('Check extension routes returns status code 200', (t) => {
  supertest(router)
  .get("/public/style.css")
  .expect(200)
  .expect("Content-Type", /css/)
  .end((error, response) => {
    t.error(error, "no error");
    t.equal(response.statusCode, 200, "Should return 200");
    t.end();
  });
});

tape('Check non-existent extension routes returns status code 500', (t) => {
  supertest(router)
  .get("/public/wrong.css")
  .expect(500)
  .expect("Content-Type", /html/)
  .end((error, response) => {
    if (error) throw error;
    t.equal(response.statusCode, 500, "Should return 500");
    t.end();
  });
});

tape('Check other extension routes returns status code 200', (t) => {
  supertest(router)
  .get("/public/game.js")
  .expect(200)
  .expect("Content-Type", /javascript/)
  .end((error, response) => {
    t.error(error, "no error");
    t.equal(response.statusCode, 200, "Should return 200");
    t.end();
  });
});

tape('Check yet more extension routes returns status code 200', (t) => {
  supertest(router)
  .get("/public/api.js")
  .expect(200)
  .expect("Content-Type", /javascript/)
  .end((error, response) => {
    t.error(error, "no error");
    t.equal(response.statusCode, 200, "Should return 200");
    t.end();
  });
});

tape('Checks non-existent path returns 404', (t) => {
  supertest(router)
  .get("/ERROR")
  .expect(404)
  .expect("Content-Type", /html/)
  .end((error, response) => {
    t.error(error, "no error");
    t.equal(response.statusCode, 404, "Should return 404");
    t.end();
  });
});