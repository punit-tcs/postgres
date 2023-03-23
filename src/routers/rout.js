const express = require("express");
const router = new express.Router();

// const userSchema = require("../model/regdata");
// const bodyparser = require("body-parser");

const register = require("../controllers/register");
const loginn = require("../controllers/login");
const dashboard = require("../controllers/dashboard");
const auth = require("../middleware/auth");

router.post("/regdata", register);

router.post("/login", loginn);

router.post("/dashboard",auth,dashboard);

module.exports = router

