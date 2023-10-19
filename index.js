const express = require('express')
const cors = require("cors")
const mysql = require("mysql")
const UserRouter = require('./Routes/UserRouter')
const app = express()
const dotenv = require("dotenv")
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT
app.use(cors({
    origin: process.env.BASEURL, 
    methods: ["GET", "POST"],
  }));
  

  
  app.use("/",UserRouter)


app.listen(PORT,()=>{
    console.log("Server connected successfully on port " ,PORT);
})