const mysql = require("mysql2");

const connection = () => {
  const db = mysql.createConnection({
    host: process.env.Mysqlhost,
    user: process.env.Mysqluser,
    password: process.env.Mysqlpassword,
  });
  db.connect((err) => {
    if (err) {
      console.error(`Error connecting to MySQL: ${err.message}`);
    } else {
      console.log("Connected to MySQL database");
    }
  });
};

module.exports = connection;
