const express = require('express')
const cors = require("cors")
const mysql = require("mysql")
const app = express()
const dotenv = require("dotenv")
import UserRouter from './Routes/UserRouter'
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