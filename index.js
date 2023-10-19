const express = require('express')
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(cors({
    origin: process.env.BASEURL, 
    methods: ["GET", "POST"],
  }));
  


app.listen(PORT,()=>{
    console.log("Server connected successfully on port " ,PORT);
})