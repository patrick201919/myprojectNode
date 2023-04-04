import User from "../models/User.js";
import { jwtVerify } from "../utils/jwtUtils.js";
import { USER_ROLE } from "../constants/userConstant.js";
import Reservation from "../models/Reservation.js";

export const admin = async (req, res, next) => {
  const token = req.headers.authorization;
  const userId = jwtVerify(token);
  const user = await User.findByPk(userId);
  if (user && user.role === USER_ROLE.admin) {
    return next();
  } else {
    return res.status(404).json({ message: "access forbidden" });
  }
};

export const userAdmin = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const userId = jwtVerify(token);
    const user = await User.findByPk(userId);
    console.log(user.role);
    if (user && user.role === USER_ROLE.admin) {
      return next();
    } else if (user.role === USER_ROLE.member && user.id === userId) {
      return next();
    }
  } catch (e) {
    console.log(e.message);
  }
  return res.status(404).json({ message: "access forbidden 2" });
};

export const bookingUserAdmin = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const userId = jwtVerify(token);
    const user = await User.findByPk(userId);
    console.log(user.id);
    console.log(user.role);
    const userBooking = await Reservation.findByPk(parseInt(req.params.id));
    console.log(userBooking.userId);
    if (user && user.role === USER_ROLE.admin) {
      return next();
    } else if (
      user.role === USER_ROLE.member &&
      user.id === userBooking.userId
    ) {
      return next();
    }
  } catch (e) {
    console.log(e.message);
  }
  return res.status(404).json({ message: "access forbidden 3" });
};
