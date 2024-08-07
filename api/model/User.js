const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, min: 4 },
  hashedPassword: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
