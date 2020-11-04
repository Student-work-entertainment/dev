//This is router for autorization!

const { Router } = require("express");
const router = Router();

const User = require("../models/User");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const { check } = require("express-validator");

// api/auth/register
router.post("/register", async (req, res) => {
  try {
    //Need fixed
    // const errors = validaionResult(req)
    //
    // if(!errors.isEmpty()){
    //     return res.status(400).json({
    //         errors:errors.array(),
    //         message:'Ivalid data register'
    //     })
    // }

    const { email, password, FirsName, LastName, secondPassword } = req.body;

    const candidate = await User.findOne({ email });

    if (candidate) {
      return res.status(400).json({ message: "User is already exsists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      password: hashedPassword,
      FirsName,
      LastName,
      secondPassword,
    });

    await user.save();

    res.status(201).json({ message: "User created" });
  } catch (e) {
    res.status(500).json({ message: "Something is wrong. Try again" });
  }
});

// api/auth/login
router.post(
  "/login",
  [
    check("email", "Invalid data :(").normalizeEmail().isEmail(),
    check("password", "Invalid data :(").exists(),
  ],
  async (req, res) => {
    try {
      //Need fixed
      // const errors = validaionResult(req)
      //
      // if(!errors.isEmpty()){
      //     return res.status(400).json({
      //         errors:errors.array(),
      //         message:'Ivalid data login'
      //     })
      // }
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Not fiend user :(" });
      }
      const isMatchPassword = await bcrypt.compare(password, user.password);
      if (!isMatchPassword) {
        return res.status(400).json({ message: "Not fiend user :(" });
      }
      const jwtSecret = "igor-taras";
      const token = jwt.sign(
        { userId: user.id },
        //Secreat Key, need create config default.json
        jwtSecret,
        { expiresIn: "1h" }
      );
      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "Something is wrong. Try again" });
    }
  }
);

module.exports = router;
