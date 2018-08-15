const tape = require('tape');
const supertest = require('supertest');

tape('test that tape is working in handler test file',(t) => {
  t.equals("cat","cat","cat should equal cat");
  t.end();
})