const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sampleUser = {
  userRegister: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await Users.findOne({ email: email });
      if (user) return res.status(400).json("The user already exists.");

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
  userLogin: (req, res) => {
    // const user = req.body;
    res.json(req.body);
  },
  userToken: (req, res) => {
    res.json("Sample token");
  },
};

module.exports = sampleUser;
