

const Check  = (req,res) =>{
    console.log('Is working')
    res.status(200).json({message:"working"})
}


 const Adddata = (req,res)=>{

}

module.exports = {
    Adddata,
    Check
}