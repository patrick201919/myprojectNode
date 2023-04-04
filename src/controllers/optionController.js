import { OptionDAO } from "../daos/optionDao.js";

const createO = async (req, res) => {
  const {
    additionalDriver,
    depositVehicle,
    depositScooter,
    depositBike,
    depositElecScooter,
    scooterHelmet,
    bikeHelmet,
    scooterElecHelmet,
    childSeat5to12,
    childSeat1to4,
    babySeat12m,
  } = req.body;

  const equipementOption = await OptionDAO.created(
    additionalDriver,
    depositVehicle,
    depositScooter,
    depositBike,
    depositElecScooter,
    scooterHelmet,
    bikeHelmet,
    scooterElecHelmet,
    childSeat5to12,
    childSeat1to4,
    babySeat12m
  );
  if (!equipementOption) {
    return res.status(400).json({ message: `Not successful equipementOption` });
  }
  return res
    .status(201)
    .json({ message: `Successful equipementOption`, data: equipementOption });
};

const updateO = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    additionalDriver,
    depositVehicle,
    depositScooter,
    depositBike,
    depositElecScooter,
    scooterHelmet,
    bikeHelmet,
    scooterElecHelmet,
    childSeat5to12,
    childSeat1to4,
    babySeat12m,
  } = req.body;
  const equipementOption = await OptionDAO.updated(
    id,
    additionalDriver,
    depositVehicle,
    depositScooter,
    depositBike,
    depositElecScooter,
    scooterHelmet,
    bikeHelmet,
    scooterElecHelmet,
    childSeat5to12,
    childSeat1to4,
    babySeat12m
  );
  if (equipementOption) {
    return res.status(200).json({
      message: `EquipementOption ${id} updated`,
      data: equipementOption,
    });
  } else {
    return res.status(404).json({ message: "Error updating EquipementOption" });
  }
};

const deleteO = async (req, res) => {
  const id = parseInt(req.params.id);
  const equipementOption = await OptionDAO.deleted(id);
  if (equipementOption) {
    return res.status(200).json({
      message: `EquipementOption ${id} deleted`,
      data: equipementOption,
    });
  } else {
    return res
      .status(404)
      .json({ message: "Error deleting equipementOption", data: id });
  }
};

const readOneO = async (req, res) => {
  const id = parseInt(req.params.id);
  const equipementOption = await OptionDAO.readById(id);
  if (!equipementOption) {
    return res.status(404).json({ message: "EquipementOption not found" });
  }
  return res.status(200).json({ data: equipementOption });
};

const readAllO = async (req, res) => {
  const equipementOptions = await OptionDAO.readAll();
  if (!equipementOptions) {
    return res.status(404).json({ message: "EquipementOptions not found" });
  }
  return res.status(200).json({ data: equipementOptions });
};

export const OptionController = {
  createO,
  updateO,
  deleteO,
  readOneO,
  readAllO,
};
