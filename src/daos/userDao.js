import { hash } from "bcrypt";
import User from "../models/User.js";
import { getCurrentDate } from "../utils/dateUtils.js";

const created = async (
  firstName,
  name,
  age,
  birthDay,
  address,
  postCode,
  city,
  country,
  telephone,
  email,
  password,
  drivingLicenseNumber,
  permitIssuedOn,
  licenseIssuedBy
) => {
  let result = null;
  let error = `${getCurrentDate()} : `;
  try {
    const newUser = await User.create({
      firstName,
      name,
      age,
      birthDay,
      address,
      postCode,
      city,
      country,
      telephone,
      email,
      password,
      drivingLicenseNumber,
      permitIssuedOn,
      licenseIssuedBy,
    });

    error = newUser ? null : error + `user not find`;

    result = newUser ? newUser : null;
  } catch (e) {
    error = error + `${e.message}`;
  }
  console.log(error);
  return { result, error };
};

const readByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (e) {
    console.log(e.message);
  }
};

const updated = async (
  id,
  firstName,
  name,
  age,
  birthDay,
  address,
  postCode,
  city,
  country,
  telephone,
  email,
  drivingLicenseNumber,
  permitIssuedOn,
  licenseIssuedBy
) => {
  try {
    const user = await User.findByPk(id);
    // const user = await User.findOne({ where: { id } });

    await user.update({
      firstName,
      name,
      age,
      birthDay,
      address,
      postCode,
      city,
      country,
      telephone,
      email,
      drivingLicenseNumber,
      permitIssuedOn,
      licenseIssuedBy,
    });
    console.log("user", user);
    return user;
  } catch (e) {
    console.log(e.message);
  }
};

const updatedAdmin = async (
  id,
  firstName,
  name,
  age,
  birthDay,
  address,
  postCode,
  city,
  country,
  telephone,
  role,
  drivingLicenseNumber,
  permitIssuedOn,
  licenseIssuedBy
) => {
  try {
    const user = await User.findByPk(id);
    // const user = await User.findOne({ where: { id } });

    await user.update({
      firstName,
      name,
      age,
      birthDay,
      address,
      postCode,
      city,
      country,
      telephone,
      role,
      drivingLicenseNumber,
      permitIssuedOn,
      licenseIssuedBy,
    });
    console.log("user", user);
    return user;
  } catch (e) {
    console.log(e.message);
  }
};

const updatedPassword = async (id, password) => {
  try {
    const user = await User.findByPk(id);
    await user.update({ password });
    return user;
  } catch (e) {
    console.log(e.message);
  }
};

const readById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (e) {
    console.log(e.message);
  }
};

const readAll = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (e) {
    console.log(e.message);
  }
};

// controller -> deleteUser
const deleted = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    await user.destroy();
    return user;
  } catch (e) {
    console.error(e.message);
  }
};

export const UserDAO = {
  created,
  updated,
  deleted,
  readByEmail,
  readById,
  readAll,
  updatedPassword,
  updatedAdmin,
};
