const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Welcome to Mary Tutors Math!");
});

module.exports = router;
