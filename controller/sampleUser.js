const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sampleUser = {
  userRegister: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await Users.findOne({ email: email });
      if (user) return res.status(400).json("The user already exist.");

      const hashPassword = await bcrypt.hash(password, 10);

      const newUser = new Users({
        username: username,
        email: email,
        password: hashPassword,
      });
      await newUser.save();
      res.json({ msg: "Registration successful" });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  },
  userLogin: async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });
    if (!user) return res.status(400).json("User does not exist");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json("Incorrect password");

    //if login success create token
    const payload = { id: user._id, name: user.username };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET);

    res.json(token);
  },
  userToken: (req, res) => {
    const token = req.header("Authorization");
    if (!token) return res.send(false);

    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decoded) => {
      if (err) return res.send(false);

      const user = await Users.findById(decoded.id);
      if (!user) return res.send(false);

      res.send(true);
    });
  },
};

module.exports = sampleUser;
