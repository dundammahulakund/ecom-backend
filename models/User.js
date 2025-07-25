const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: ["user", "admin"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
