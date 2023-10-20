const connection = require('../index')



const Check  = (req,res) =>{
    connection.query("select * from Product_Table")
    res.status(200).json({message:"working"})
}


 const Adddata = (req,res)=>{
    console.log('hellow')
   const {heading,description,date,time,image,size} = req.body
    console.log(heading,description,date,time,image,size,"this is form postman");
   const createTableQuery = `
   CREATE TABLE IF NOT EXISTS Product_Table (
     id INT AUTO_INCREMENT PRIMARY KEY,
     heading VARCHAR(255),
     description TEXT,
     date DATE,
     time TIME,
     image VARCHAR(255),
     size VARCHAR(40)`;

     connection.query(createTableQuery, (err, results) => {
        if (err) {
          console.error(`Error creating table: ${err.message}`);
        } else {
          console.log("Table 'Product_Table' created successfully.");
        }
    
        db.end();
      });
     console.log('Database Connected Successfully');
     
     const insertQuery = `
    INSERT INTO Product_Table (heading, description, date, time, image)
    VALUES (?, ?, ?, ?, ?)
  `;

  const values = [heading, description, date, time, image,size];

  db.query(insertQuery, values, (err, results) => {
    if (err) {
      console.error(`Error inserting data: ${err.message}`);
    } else {
      console.log("Data inserted successfully.");
    }

    db.end();

  })
}

module.exports = {
    Adddata,
    Check
}