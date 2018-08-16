const dbconnection = require('../database/db_connection');

const sql = 'SELECT name, scores FROM users INNER JOIN scores ON users.id = scores.user_id ORDER BY scores;';

const getLeaderboard = cb => {
  dbconnection.query(sql, (err, res) => {
    if (err) return cb(err)
    cb(null, res.rows)
  })
}

module.exports = getLeaderboard;