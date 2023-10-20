
const mysql = require('mysql2');


const connection=()=>{
const connection = mysql.createConnection({
  host: process.env.Mysqlhost,
  user: process.env.Mysqluser,
  password: process.env.Mysqlpassword,
  database: process.env.Database
});

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting to MySQL: ${err.message}`);
    return;
  }
  console.log('Database Connected Successfully');
});
}



module.exports = connection;
