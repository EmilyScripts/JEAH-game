const dbconnection = require('../database/db_connection');
const bcrypt = require('bcryptjs');

const updateUsers = (userData, cb) => {
  const password = userData.password;
  const username = userData.username;
  // encrypt password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      cb(err);
    } else {
      const sql = `INSERT INTO users(name, password) VALUES ('${username}','${hash}');`;
      dbconnection.query(sql, (err, res) => {
        if (err) {
          cb(err);
        } else {
          cb(null, res);
        }
      });
    }
  });
};

const updateScores = (scoreData, username, cb) => {
  const score = parseFloat(scoreData.score);
  // lookup user id for username
  dbconnection.query(`SELECT id FROM users WHERE name='${username}';`,(err, id) => {
    if (err) cb(new Error('could not find user id from cookie'));
    else {
      const user_id = id.rows[0].id;
      console.log('user id: ',user_id);
      console.log('score: ',score)
      const sql = `INSERT INTO scores(user_id, scores) VALUES ('${user_id}','${score}');`;
      dbconnection.query(sql, (err, res) => {
        if (err) {
          cb(new Error('failed to insert score into DB'));
        } else {
          cb(null, res);
        }
      });
    }
  })
};

module.exports = { updateUsers, updateScores };