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

module.exports = updateUsers;