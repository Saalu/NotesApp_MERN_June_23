const router = require("express").Router();
const userCtrl = require("../controller/userCtrl");
const auth = require("../middleware/auth");
const sampleUser = require("../controller/sampleUser");

//Register

router.post("/register", sampleUser.userRegister);

router.post("/login", sampleUser.userLogin);

router.get("/verify", sampleUser.userToken);
// ====================================================//
// router.post("/register", userCtrl.registerUser);

// router.post("/login", userCtrl.loginUser);

// router.get("/verify", userCtrl.verifiedToken);

// ==============================================//
// router.get("/verify", auth, (req, res) => {
//   console.log(req.user);
// });

module.exports = router;
