const express = require("express");
const router = express.Router();

// @route Get /api/auth/test
// @desc Test the auth route
// @access Public
router.get("/test", (req, res) => {
  res.send("Test Running");
});

// @route Post /api/auth/register
// @desc Create a New User
// @access Public

module.exports = router;
