const express = require('express')
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")
const UserRouter = require("./Routes/UserRouter")

dotenv.config();
app.use(express.json());


const PORT = process.env.PORT
app.use(cors({
    origin: process.env.BASEURL, 
    methods: ["GET", "POST"],
  }));
  app.use("/",UserRouter)
app.listen(PORT,()=>{
    console.log("Server connected successfully on port " ,PORT);
})
