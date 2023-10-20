const express = require("express")
const UserController = require("../Controller/Usercontorler")


let UserRouter = express.Router();

UserRouter.get("/",UserController.Check)

 UserRouter.get("/AddData",UserController.Adddata)




module.exports = UserRouter;