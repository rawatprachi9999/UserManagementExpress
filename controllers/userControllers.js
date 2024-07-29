
let User = require ('../model/user')
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');


let register = async (req,res) =>{
    let {email , name , password} = req.body;
    console.log(email,name,password);

    const salt = await bcrypt.genSalt(10);
    password =await bcrypt.hash(password,salt);

    let user = new User ({email , name , password})
     await user.save()

     let payload = {id: user.id}
     jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
            expiresIn:'1h'
        },
            (err,token)=>{
            if(err)
                {throw err
        }
        else
        {
            res.send(token)
        }
 }) 
  
}

let login = async (req, res) => {        
    let { inp_email, inp_password } = req.body;

    try {
        let user = await User.findOne({ email: inp_email });

        if (!user) {
            return res.status(400).send("User not found");
        }

        let isValidPWD = await bcrypt.compare(inp_password, user.password);

        if (!isValidPWD) {
            return res.status(400).send("Invalid password");
        }

        let payload = { id: user.id };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) {
                    throw err;
                } else {
                    res.send(token);
                }
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}


let profile = async (req,res) =>{
        
        res.status(200).send(req.user)
    }

let transcation = async (req,res) =>{   
    
            res.status(200).send("This is transcation page")
        }       
    



let wishlist = async (req,res) =>{
   
            res.status(200).send("this is wishlist page")
        }
        

module.exports={
    wishlist,
    transcation,
    profile,
    register,
    login

}

