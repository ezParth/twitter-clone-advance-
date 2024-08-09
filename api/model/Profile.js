const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, min: 4, required: true },
  bio: { type: String },
  location: { type: String },
  website: { type: String },
  dateOfBirth: { type: Number },
});

const userProfile = mongoose.model("userProfile", profileSchema);

module.exports = userProfile;
