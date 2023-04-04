import DataTypes from "sequelize";
import dbConnection from "../connection/dbConnection.js";

const Media = dbConnection.db.define("Media", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Media;
