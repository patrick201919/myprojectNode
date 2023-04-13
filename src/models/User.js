import { DataTypes } from "sequelize";
import dbConnection from "../connection/dbConnection.js";
import Reservation from "./Reservation.js";
import { USER_ROLE } from "../constants/userConstant.js";

const User = dbConnection.db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    birthDay: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: USER_ROLE.member,
      allowNull: false,
    },
    drivingLicenseNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    permitIssuedOn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    licenseIssuedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    createdAt: "created",
    updatedAt: "updated",
  }
);
User.hasMany(Reservation, {
  foreignKey: {
    // defaultValue: 1,
    allowNull: true,
    name: "userId",
  },
  sourceKey: "id",
});

export default User;
