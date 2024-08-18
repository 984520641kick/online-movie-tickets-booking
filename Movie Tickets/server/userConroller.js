const user=require("./router/usermodel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs")
const dotenv = require('dotenv')

const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || password){
        res.status||(4000);
        throw new Error("plase fill all the fields")
    }
    //user already exists or not

    const userExists=await user.findone({email:email})
    if(userExists){
        res.status(4000);
        throw new Error("user alredy exists");
    }
    //hash password
    const salt=await bcrypt.genSalt(process.env,SALT)
    const hashedPassword = await bcrypt.hash(password,salt);
    const user=await UserActivation.create({
        name:name,
        email:email,
        password:hashedPassword
    })
    if(user)
        res.status(201).json({

            id:user.id,
            name:user.name,
            email:user.email,
            //token generation

        })
           
});


module.exports = {registerUser};