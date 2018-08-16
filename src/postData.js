const dbconnection = require('../database/db_connection');


const updateUsers = (userData, cb) => {
  const password = userData.password;
  const username = userData.username;
  const sql = `INSERT INTO users(name, password) VALUES ('${username}','${password}');`;
  dbconnection.query(sql, (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res)
    }
  })
}

module.exports = updateUsers;