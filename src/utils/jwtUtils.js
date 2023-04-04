import jwt from "jsonwebtoken";
import { primaryKey } from "../authentication/key.js";

const jwtOptions = {
  expiresIn: `28800000`, // 8h
};

export const jwtVerify = (token) => {
  console.log(token);
  try {
    const decoded = jwt.verify(token, primaryKey);
    const userId = decoded.data;
    console.log("jwtv", userId);
    return userId;
  } catch (err) {
    console.error(`jwtVerify: error => `, err);
    return null;
  }
};

export const jwtSign = (data) => jwt.sign({ data }, primaryKey, jwtOptions);
