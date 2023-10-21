const mysql = require('mysql2');
require('dotenv').config();

const connections = mysql.createConnection({
  host: process.env.Mysqlhost,
  user: process.env.Mysqluser,
  password: process.env.Mysqlpassword,
  database: process.env.Database
});
connections.connect((err) => {
  if (err) {
    console.error(`Error connecting to MySQL: ${err.message}`);
    return;
  }
  console.log('Database Connected Successfully');
});

const Check = (req, res) => {
  connections.query("SELECT * FROM Product_Table", (err, results) => {
    if (err) {
      console.error(`Error querying data: ${err.message}`);
      res.status(500).send("Error querying data");
    } else {
      res.status(200).json({ message: "working", data: results });
    }
  });
};
 

const Adddata = (req, res) => {
  console.log('Hello');
  const { heading, description, date, time, image, size } = req.body;
  console.log(heading, description, date, time, image, size, "this is from Postman");

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Product_Table (
      id INT AUTO_INCREMENT PRIMARY KEY,
      heading VARCHAR(255),
      description TEXT,
      date DATE,
      time TIME,
      image VARCHAR(255),
      size VARCHAR(40)
    )
  `;

  connections.query(createTableQuery, (err, results) => {
    if (err) {
      console.error(`Error creating table: ${err.message}`);
      res.status(500).send("Error creating table");
    } else {
      console.log("Table 'Product_Table' created successfully");

      const insertQuery = `
        INSERT INTO Product_Table (heading, description, date, time, image, size)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

      const values = [heading, description, date, time, image, size];

      connections.query(insertQuery, values, (err, results) => {
        if (err) {
          console.error(`Error inserting data: ${err.message}`);
          res.status(500).send("Error inserting data");
        } else {
          console.log("Data inserted successfully.");
          res.status(200).send("Data inserted successfully");
        }
      });
    }
  });
};



const UpdateData = (req, res) => {
    const { id, heading, description, date, time, image, size } = req.body;
  
    const updateQuery = `
      UPDATE Product_Table
      SET heading = ?,
          description = ?,
          date = ?,
          time = ?,
          image = ?,
          size = ?
      WHERE id = ?
    `;
  
    const values = [heading, description, date, time, image, size, id];
  
    connections.query(updateQuery, values, (err, results) => {
      if (err) {
        console.error(`Error updating data: ${err.message}`);
        res.status(500).send("Error updating data");
      } else {
        console.log("Data updated successfully.");
        res.status(200).json({messge:"updated Successfull",data:results});
      }
    });
  };


  const DeleteData = (req, res) => {
    const { id } = req.body;
  
    const deleteQuery = `
      DELETE FROM Product_Table
      WHERE id = ?
    `;
  
    connections.query(deleteQuery, id, (err, results) => {
      if (err) {
        console.error(`Error deleting data: ${err.message}`);
        res.status(500).send("Error deleting data");
      } else {
        if (results.affectedRows > 0) {
          console.log(`Data with id ${id} deleted successfully.`);
          res.status(200).send(`Data with id ${id} deleted successfully.`);
        } else {
          console.log(`No data found with id ${id}.`);
          res.status(404).send(`No data found with id ${id}.`);
        }
      }
    });
  };


  const GetRowById = (req, res) => {
    const { id } = req.body;
  
    const selectQuery = `
      SELECT * FROM Product_Table
      WHERE id = ?
    `;
  
    connections.query(selectQuery, id, (err, results) => {
      if (err) {
        console.error(`Error retrieving data: ${err.message}`);
        res.status(500).send("Error retrieving data");
      } else {
        if (results.length > 0) {
          console.log(`Data with id ${id} retrieved successfully.`);
          res.status(200).json({ message: "Data retrieved successfully", data: results[0] });
        } else {
          console.log(`No data found with id ${id}.`);
          res.status(404).send(`No data found with id ${id}.`);
        }
      }
    });
  };


  

module.exports = {

  Adddata,
  Check,
  UpdateData,
  DeleteData,
  GetRowById,
};
