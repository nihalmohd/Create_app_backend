

const Check  = (req,res) =>{
    console.log('Is working')
    res.status(200).json({message:"working"})
}


 const Adddata = (req,res)=>{
    console.log("This is a data form")
    res.status(200).json({Message:"data Added Successfully"})
}

module.exports = {
    Adddata,
    Check
}