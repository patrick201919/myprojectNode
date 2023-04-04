import EquipementOption from "../models/EquipementOption.js";
import { getCurrentDate } from "../utils/dateUtils.js";

const created = async (
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
) => {
  let result = null;
  let error = `${getCurrentDate()} : `;
  try {
    const newEquipementOption = await EquipementOption.create({
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
    });

    error = newEquipementOption ? null : error + `EquipementOption not find`;

    result = newEquipementOption ? newEquipementOption : null;
  } catch (e) {
    error = error + `${e.message}`;
  }
  console.log(error);
  return { result, error };
};

const updated = async (
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
) => {
  try {
    const equipementOption = await EquipementOption.findByPk(id);
    await equipementOption.update({
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
    });
    return equipementOption;
  } catch (e) {
    console.log(e.message);
  }
};
const deleted = async (id) => {
  try {
    const equipementOption = await EquipementOption.findByPk(id);
    await equipementOption.destroy();
    return equipementOption;
  } catch (e) {
    console.error(e.message);
  }
};
const readById = async (id) => {
  try {
    const equipementOption = await EquipementOption.findByPk(id);
    return equipementOption;
  } catch (e) {
    console.log(e.message);
  }
};

const readAll = async () => {
  try {
    const equipementOptions = await EquipementOption.findAll();
    return equipementOptions;
  } catch (e) {
    console.log(e.message);
  }
};

export const OptionDAO = {
  created,
  updated,
  deleted,
  readById,
  readAll,
};
