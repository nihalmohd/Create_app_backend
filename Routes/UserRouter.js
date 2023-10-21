const { Router } = require("express");
const { Check, Adddata, UpdateData, DeleteData, GetRowById, GetProductsBySize } = require("../Controller/Usercontorler");


let UserRouter = Router();
 UserRouter.get("/",(req,res)=>{
    res.send("working")
 })
 UserRouter.get("/getData",Check)
 UserRouter.post ("/AddData",Adddata)
 UserRouter.post("/Update",UpdateData)
 UserRouter.post("/DeletData",DeleteData)
 UserRouter.post("/GetRowById",GetRowById)
 UserRouter.get("/GetproductbySize",GetProductsBySize)




module.exports = UserRouter;