const express=require('express');
const router=express.Router();
require('../DB/Dbconnection');
const User=require('../Models/CostumerSchema')

router.get('/',(req,res)=>{
    res.send("hello world")
});


router.post('/contact',async(req,res)=>{
    const {name,email,phone,company,country}=req.body;
    if(!name||!email||!phone||!company||!country){
        console.log("name: "+name+"email: "+email+"phone: "+phone+"company: "+company+"country "+country)
        return res.status(400).json({message:"plz fill the form"});
    }
    try{
        const emailExist=await User.findOne({email})
        console.log(emailExist)
        if(emailExist){
            return res.status(401).json({message:"email already exist"});
        }else{
            const user=new User({name,email,phone,company,country});
            await user.save();
            res.status(201).json({message:"successfully Registered"});
        }
    }catch(err){
        console.log(err);
    }
})


module.exports=router;