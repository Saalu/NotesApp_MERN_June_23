const router = require("express").Router();
const userCtrl = require("../controller/userCtrl");

//Register

router.post("/register", userCtrl.registerUser);

router.post("/login", userCtrl.loginUser);

module.exports = router;
