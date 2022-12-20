const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// @route Get /api/auth/test
// @desc Test the auth route
// @access Public
router.get("/test", (req, res) => {
  res.send("Test Running");
});

// @route Post /api/auth/register
// @desc Create a New User
// @access Public

router.post("/register", async (req, res) => {
  try {
    // check if existing user
    const existingEmail = await User.findOne({
      email: new RegExp("^" + req.body.email + "$", "i"),
    });

    if (existingEmail) {
      return res
        .status(400)
        .json({ error: "There is already a user with this email" });
    }

    // Password hash
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    // create new user
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    //Save user
    const savedUser = await newUser.save();
    // return new user
    return res.json(savedUser);
  } catch (err) {
    // error here
    console.log(err);

    res.status(500).send(err.message);
  }
});

module.exports = router;
