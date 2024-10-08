
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const constants = require("../constants");

const determineUserRole = (username) => {
  return username.startsWith("admin_") ? "admin" : "user";
};

const Sign_up = asyncHandler(async (req, res) => {
  const { email, password, name, username } = req.body;

  if (!email || !password || !name || !username) {
    return res.status(400).json("All fields are required");
  }

  const userExists = await User.findOne({ email });
  const usernameExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({message: "User already exists"});
  }
  if (usernameExists) {
    return res.status(400).json({message: "Username already exists"});
  }

  const role = determineUserRole(username);


  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    email,
    username,
    password: hashedPassword,
    name,
    role
  };

  const user = await User.create(newUser);


  const accessToken = jwt.sign(
    {
      user: {
        _id: user._id,
        role: user.role
      },
    },
    process.env.ACCESS_TOKEN_SECRET
  );

  res.json({ user, accessToken });
});

const Sign_in = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json("All fields are required");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable && (await bcrypt.compare(password, userAvailable.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          _id: userAvailable._id,
          role: userAvailable.role
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ userAvailable, accessToken });
  } else if (!userAvailable) {
    res.status(401).json({message: "User not found"});
  } else {
    res.status(401).json("Invalid email or password");
  }
});

const userProfile = asyncHandler(async (req, res) => {
  try {

    const id = req.user._id;

    if (id) {
      const user = await User.findById(id);
      if (user) {
        return res.status(constants.OK).json(user);
      } else {
        return res.status(constants.NOT_FOUND).json({ message: 'User not found' });
      }
    } else {
      const users = await User.find({});
      return res.status(constants.OK).json(users);
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(constants.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
  }
});

const Sign_out = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User signed out successfully" });
});

module.exports = {
  Sign_up,
  Sign_in,
  Sign_out,
  userProfile,
};
