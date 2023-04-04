import DataTypes from "sequelize";
import dbConnection from "../connection/dbConnection.js";
import Media from "./Media.js";
import Reservation from "./Reservation.js";

const Vehicle = dbConnection.db.define("Vehicle", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  typeOfVehicle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  vehicleNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  range: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  power: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  charging: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  maximunSpeed: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  typeOfPlug: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  passenger: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  door: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  categorie: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bikeSize: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bikeWeight: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priceByDay: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
Vehicle.hasMany(Media, {
  foreignKey: {
    defaultValue: 3,
    allowNull: false,
    name: "vehicleId",
  },
  sourceKey: "id",
});
Vehicle.hasMany(Reservation, {
  foreignKey: {
    defaultValue: 1,
    allowNull: true,
    name: "vehicleId",
  },
  sourceKey: "id",
});
export default Vehicle;
