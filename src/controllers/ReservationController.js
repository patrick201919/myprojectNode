import { ReservationDAO } from "../daos/reservationDao.js";
const createR = async (req, res) => {
  const {
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
  } = req.body;

  const reservation = await ReservationDAO.created(
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
  );
  if (!reservation) {
    return res.status(400).json({ message: `Not successful reservation` });
  }
  return res
    .status(201)
    .json({ message: `Successful reservation`, reservation });
};

const updateR = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
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
  } = req.body;
  const reservation = await ReservationDAO.updated(
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
  );
  if (reservation) {
    return res
      .status(200)
      .json({ message: `Reservation ${id} updated`, data: reservation });
  } else {
    return res.status(404).json({ message: "Error updating reservation" });
  }
};

const deleteR = async (req, res) => {
  const id = parseInt(req.params.id);
  const reservation = await ReservationDAO.deleted(id);
  if (reservation) {
    return res
      .status(200)
      .json({ message: `Reservation ${id} deleted`, data: reservation });
  } else {
    return res
      .status(404)
      .json({ message: "Error deleting reservation", data: id });
  }
};
const readAllR = async (req, res) => {
  const reservations = await ReservationDAO.readAll();
  if (!reservations) {
    return res.status(404).json({ message: "reservations not found" });
  }
  return res.status(200).json({ data: reservations });
};

const readOneR = async (req, res) => {
  const id = parseInt(req.params.id);
  const reservation = await ReservationDAO.readById(id);
  if (!reservation) {
    return res.status(404).json({ message: "Reservation not found" });
  }
  return res.status(200).json({ data: reservation });
};

export const ReservationController = {
  createR,
  updateR,
  deleteR,
  readOneR,
  readAllR,
};
