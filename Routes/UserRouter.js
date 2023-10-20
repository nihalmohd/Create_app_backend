const { Router } = require("express");
const { Check, Adddata, UpdateData, DeleteData } = require("../Controller/Usercontorler");


let UserRouter = Router();

 UserRouter.get("/getData",Check)
 UserRouter.post ("/AddData",Adddata)
 UserRouter.post("/Update",UpdateData)
 UserRouter.post("/DeletData",DeleteData)




module.exports = UserRouter;