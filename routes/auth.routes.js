//This is router for autorization!

const {Router} = require("express");
const router = Router();

const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/register", async(req, res)=>{
    try {
      const {email, password, FirsName, LastName, secondPassword} = req.body;

      const candidate = await User.findOne({ email });

      if(candidate){
       return res.status(400).json({message:"User is already exsists"});
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({email, password: hashedPassword,FirsName,LastName,secondPassword});

      await user.save();

      res.status(201).json({message:"User created"});


    } catch (e) {
       res.status(500).json({message:"Something is wrong. Try again"});
    }
});

router.post("/login", async(req, res)=>{
  
});

module.exports = router;