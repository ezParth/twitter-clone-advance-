const express = require("express");
const Router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
const userProfile = require("../model/Profile");

const secret = process.env.TOKEN;

Router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  try {
    const user = await User.create({
      username,
      hashedPassword,
    });
    res.json(user);
  } catch (error) {
    console.error("Error in creating the user", error);
  }
});

Router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userLoggingin = await User.findOne({ username }); // it is finding a user with this username (confusion was how it is inheriting password)
  if (!userLoggingin) {
    return res.status(401).json({ error: "User not found!" });
  }
  const checkPassword = bcrypt.compareSync(
    password,
    userLoggingin.hashedPassword
  );
  if (!checkPassword) {
    res.json({ error: "Invalid password!" });
  } else {
    //if our boy successfully logged in then we will store his info to sell
    jwt.sign({ username, id: user._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userLoggedIn._id,
        username,
      });
    });
  }
});

Router.post("/userInfo", async (req, res) => {
  const { name, bio, website, location, dateOfBirth } = req.body;
  try {
    const profile = await userProfile.create({
      name: name,
      bio: bio,
      location: location,
      website: website,
      dateOfBirth: dateOfBirth,
    });
    res.json(profile);
  } catch (err) {
    console.error("Error in creating the profile", err);
  }
});

module.exports = Router;
