const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, unique: true },
    username: { type: String },
    password: { type: String },
  })
);
module.exports = User;
