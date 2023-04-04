import DataTypes from "sequelize";
import connection from "../connection/dbConnection.js";
import Reservation from "./Reservation.js";

const EquipementOption = connection.db.define("EquipementOption", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  additionalDriver: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  depositVehicle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  depositScooter: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  depositBike: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  depositElecScooter: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  scooterHelmet: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bikeHelmet: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  scooterElecHelmet: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  childSeat5to12: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  childSeat1to4: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  babySeat12m: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
EquipementOption.hasMany(Reservation, {
  foreignKey: {
    defaultValue: 1,
    allowNull: true,
    name: "equipementOptionId",
  },
  sourceKey: "id",
});

export default EquipementOption;
