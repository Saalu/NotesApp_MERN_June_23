const router = require("express").Router();
const userCtrl = require("../controller/userCtrl");
const auth = require("../middleware/auth");

//Register

router.post("/register", userCtrl.registerUser);

router.post("/login", userCtrl.loginUser);

router.get("/verify", auth, userCtrl.verifiedToken);
// router.get("/verify", auth, (req, res) => {
//   console.log(req.user);
// });

module.exports = router;
