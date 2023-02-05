// register and login

const express = require("express");

const router = express.Router();

const User = require("../models/user.js");

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const data = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: req.body.password,
      interest: req.body.interest,
    });
    await data.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ userName: req.body.userName });
    // !user && res.status(400).json("Wrong credentials!");
    if (!user) {
      res.status(400).json({message: "User Not Found"});
    } else if (req.body.password != user.password) {
      res.status(400).json({message: "Password Not Match....."});
    } else {
      const { password, ...others } = user._doc;
      // Password k alawa users ka sara cheej others me h
      res.status(200).json(others);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({message: err.message});
  }
});

module.exports = router;
