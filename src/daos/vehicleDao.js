import Vehicle from "../models/Vehicle.js";
import { getCurrentDate } from "../utils/dateUtils.js";

const created = async (
  typeOfVehicle,
  brand,
  vehicleNumber,
  range,
  power,
  charging,
  maximunSpeed,
  typeOfPlug,
  passenger,
  cargo,
  door,
  categorie,
  bikeSize,
  bikeWeight,
  priceByDay
) => {
  let result = null;
  let error = `${getCurrentDate()} : `;
  try {
    const newVehicle = await Vehicle.create({
      typeOfVehicle,
      brand,
      vehicleNumber,
      range,
      power,
      charging,
      maximunSpeed,
      typeOfPlug,
      passenger,
      cargo,
      door,
      categorie,
      bikeSize,
      bikeWeight,
      priceByDay,
    });

    error = newVehicle ? null : error + `Vehicle not find`;

    result = newVehicle ? newVehicle : null;
  } catch (e) {
    error = error + `${e.message}`;
  }
  console.log(error);
  return { result, error };
};

const updated = async (
  id,
  typeOfVehicle,
  brand,
  vehicleNumber,
  range,
  power,
  charging,
  maximunSpeed,
  typeOfPlug,
  passenger,
  cargo,
  door,
  categorie,
  bikeSize,
  bikeWeight,
  priceByDay
) => {
  try {
    const vehicle = await Vehicle.findByPk(id);
    await vehicle.update({
      typeOfVehicle,
      brand,
      vehicleNumber,
      range,
      power,
      charging,
      maximunSpeed,
      typeOfPlug,
      passenger,
      cargo,
      door,
      categorie,
      bikeSize,
      bikeWeight,
      priceByDay,
    });
    return vehicle;
  } catch (e) {
    console.log(e.message);
  }
};
const deleted = async (id) => {
  try {
    const vehicle = await Vehicle.findByPk(id);
    await vehicle.destroy();
    return vehicle;
  } catch (e) {
    console.error(e.message);
  }
};
const readById = async (id) => {
  try {
    const vehicle = await Vehicle.findByPk(id);
    return vehicle;
  } catch (e) {
    console.log(e.message);
  }
};

const readAll = async () => {
  try {
    const vehicles = await Vehicle.findAll();
    return vehicles;
  } catch (e) {
    console.log(e.message);
  }
};

export const VehicleDAO = {
  created,
  updated,
  deleted,
  readById,
  readAll,
};
