
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      default: 50,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema, "USERS");
module.exports = User;
