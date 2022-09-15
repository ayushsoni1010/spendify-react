const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../helpers/generateToken");

// @desc     Register a user
// @route    POST /signup
// @rpivate  Public
const signUpUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  /***** Hash password *****/
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  /***** Create user *****/
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc     Authenticate a user
// @route    POST /login
// @rpivate  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  /***** Check for user email *****/
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid login credentials");
  }
});

// @desc     Get user data
// @route    GET `/users
// @rpivate  Public
const getUser = asyncHandler(async (req, res) => {
  res.json({ message: "Get User data" });
});

module.exports = {
  signUpUser,
  loginUser,
  getUser,
};
