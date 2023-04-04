import Reservation from "../models/Reservation.js";
import { getCurrentDate } from "../utils/dateUtils.js";

const created = async (
  departureDate,
  returnDate,
  rentalPeriod,
  priceAddtionalDrive,
  priceDepositCar,
  priceChildSeat5to12,
  priceChildSeat1to4,
  priceChildSeat12m,
  priceDepositScooter,
  priceDepositElecScooter,
  priceDepositBike,
  priceScooterHelmet,
  priceBikeHelmet,
  priceElecScooterHelmet,
  totalAmount
) => {
  let result = null;
  let error = `${getCurrentDate()} : `;
  try {
    const newReservation = await Reservation.create({
      departureDate,
      returnDate,
      rentalPeriod,
      priceAddtionalDrive,
      priceDepositCar,
      priceChildSeat5to12,
      priceChildSeat1to4,
      priceChildSeat12m,
      priceDepositScooter,
      priceDepositElecScooter,
      priceDepositBike,
      priceScooterHelmet,
      priceBikeHelmet,
      priceElecScooterHelmet,
      totalAmount,
    });

    error = newReservation ? null : error + `reservation not find`;

    result = newReservation ? newReservation : null;
  } catch (e) {
    error = error + `${e.message}`;
  }
  console.log(error);
  return { result, error };
};

const updated = async (
  id,
  departureDate,
  returnDate,
  rentalPeriod,
  priceAddtionalDrive,
  priceDepositCar,
  priceChildSeat5to12,
  priceChildSeat1to4,
  priceChildSeat12m,
  priceDepositScooter,
  priceDepositElecScooter,
  priceDepositBike,
  priceScooterHelmet,
  priceBikeHelmet,
  priceElecScooterHelmet,
  totalAmount
) => {
  try {
    const reservation = await Reservation.findByPk(id);
    await reservation.update({
      departureDate,
      returnDate,
      rentalPeriod,
      priceAddtionalDrive,
      priceDepositCar,
      priceChildSeat5to12,
      priceChildSeat1to4,
      priceChildSeat12m,
      priceDepositScooter,
      priceDepositElecScooter,
      priceDepositBike,
      priceScooterHelmet,
      priceBikeHelmet,
      priceElecScooterHelmet,
      totalAmount,
    });
    return reservation;
  } catch (e) {
    console.log(e.message);
  }
};
const deleted = async (id) => {
  try {
    const reservation = await Reservation.findByPk(id);
    await reservation.destroy();
    return reservation;
  } catch (e) {
    console.error(e.message);
  }
};
const readById = async (id) => {
  try {
    const reservation = await Reservation.findByPk(id);
    return reservation;
  } catch (e) {
    console.log(e.message);
  }
};
const readAll = async () => {
  try {
    const reservations = await Reservation.findAll();
    return reservations;
  } catch (e) {
    console.log(e.message);
  }
};

export const ReservationDAO = {
  created,
  updated,
  deleted,
  readById,
  readAll,
};
