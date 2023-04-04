import { DataTypes } from "sequelize";
import dbConnection from "../connection/dbConnection.js";
import { RESERVATION_STATUS } from "../constants/reservationConstant.js";

const Reservation = dbConnection.db.define("Reservation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  departureDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  rentalPeriod: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  bookingStatus: {
    type: DataTypes.STRING,
    defaultValue: RESERVATION_STATUS.pending,
    allowNull: true,
  },
  priceAddtionalDrive: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priceDepositCar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priceChildSeat5to12: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priceChildSeat1to4: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priceChildSeat12m: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  priceDepositScooter: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priceDepositElecScooter: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priceDepositBike: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priceScooterHelmet: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priceBikeHelmet: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priceElecScooterHelmet: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalAmount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Reservation;

// const reservation = await Reservation.findByPk(reservationId);

// const totalAmount = parseFloat(reservation.priceAddtionalDrive || 0)
//   + parseFloat(reservation.priceDepositCar || 0)
//   + parseFloat(reservation.priceChildSeat5to12 || 0)
//   + parseFloat(reservation.priceChildSeat1to4 || 0)
//   + parseFloat(reservation.priceChildSeat12m || 0)
//   + parseFloat(reservation.priceDepositScooter || 0)
//   + parseFloat(reservation.priceDepositElecScooter || 0)
//   + parseFloat(reservation.priceDepositBike || 0)
//   + parseFloat(reservation.priceScooterHelmet || 0)
//   + parseFloat(reservation.priceBikeHelmet || 0)
//   + parseFloat(reservation.priceElecScooterHelmet || 0);

// reservation.totalAmount = totalAmount.toFixed(2);
// await reservation.save();
