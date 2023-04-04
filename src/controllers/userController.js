import { UserDAO } from "../daos/userDao.js";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { jwtSign } from "../utils/jwtUtils.js";
import { stringIsFilled } from "../utils/stringUtils.js";
import {
  emailIsValid,
  phoneIsValid,
  passwordIsValid,
} from "../utils/regexUtils.js";

const signUp = async (req, res) => {
  const {
    firstName,
    name,
    birthDay,
    address,
    postCode,
    city,
    country,
    telephone,
    email,
    password,
  } = req.body;

  const isemailIsValid = emailIsValid(email);
  const ispasswordIsValid = passwordIsValid(password);
  const isphoneIsValid = phoneIsValid(telephone);

  if (!isemailIsValid || !ispasswordIsValid || !isphoneIsValid) {
    return res
      .status(403)
      .json({ message: ` Email or Phone number or Password is incorrect` });
  }
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(403).json({ message: `Email already exists` });
  }
  const hash = await bcrypt.hash(password, 10);
  const user = await UserDAO.created(
    firstName,
    name,
    birthDay,
    address,
    postCode,
    city,
    country,
    telephone,
    email,
    hash
  );
  if (!user) {
    return res.status(403).json({ message: `User not found` });
  }
  return res.status(201).json({ message: "User created", user: email });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!stringIsFilled(email) || !stringIsFilled(password)) {
    return res
      .status(400)
      .json({ message: "email or password is not correct" });
  }
  const user = await UserDAO.readByEmail(email);
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: `The password is incorrect ${email}`,
    });
  }
  const token = jwtSign(user.id);

  return res.json({
    message: "User logged in successfully",
    token,
  });
};

const updateUser = async (req, res) => {
  const {
    id,
    firstName,
    name,
    birthDay,
    address,
    postCode,
    city,
    country,
    telephone,
    email,
    password,
  } = req.body;
  console.log("leur", id);
  console.log("update", name);

  const isemailIsValid = emailIsValid(email);
  const ispasswordIsValid = passwordIsValid(password);
  const isphoneIsValid = phoneIsValid(telephone);
  console.log(telephone);
  if (!isemailIsValid || !ispasswordIsValid || !isphoneIsValid) {
    return res
      .status(403)
      .json({ message: ` Email or Phone number or Password is incorrect` });
  }
  // const existingUser = await User.findOne({ where: { email } });
  // if (existingUser) {
  //   return res.status(403).json({ message: `Email already exists` });
  // }
  const hash = await bcrypt.hash(password, 10);
  const user = await UserDAO.updated(
    id,
    firstName,
    name,
    birthDay,
    address,
    postCode,
    city,
    country,
    telephone,
    email,
    hash
  );
  if (user) {
    return res.status(200).json({ message: `User ${id} updated`, data: user });
  } else {
    return res.status(404).json({ message: "Error updating user" });
  }
};
// UserDao -> deleted
const deleteUser = async (req, res) => {
  const { userId } = req.body;
  const user = await UserDAO.deleted(userId);
  if (user) {
    return res
      .status(200)
      .json({ message: `User ${userId} deleted`, data: user });
  } else {
    return res
      .status(404)
      .json({ message: "Error deleting user", data: userId });
  }
};

const readUsers = async (req, res) => {
  const users = await UserDAO.readAll();
  if (!users) {
    return res.status(404).json({ message: "Users not found" });
  }
  return res.status(200).json({ data: users });
};

const readOne = async (req, res) => {
  const { userId } = req.body;
  const user = await UserDAO.readById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ data: user });
};

export const UserController = {
  signUp,
  login,
  updateUser,
  deleteUser,
  readUsers,
  readOne,
};
