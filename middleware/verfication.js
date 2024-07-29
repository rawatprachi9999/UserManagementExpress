const jwt =require('jsonwebtoken')
const User =require('../model/user')



const verify_token = async(req,res,next) =>{
    let token = req.header('Authorization')
    if (token){
    
        try{
            let payload =jwt.verify(token,process.env.JWT_SECRET)
            let user = await User.findById(payload.id)
            req.user =user
            next()
        }
            
        catch{
            register.send("Invalid Token!")
    
        }
    }
    else{
        res.send('No Acess!!')
    }     
}

module.exports=verify_token