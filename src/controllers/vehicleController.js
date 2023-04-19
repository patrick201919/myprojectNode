import { VehicleDAO } from "../daos/vehicleDao.js";

const createV = async (req, res) => {
  const {
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
  } = req.body;

  const vehicle = await VehicleDAO.created(
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
  );
  if (!vehicle) {
    return res.status(400).json({ message: `Not successful vehicle` });
  }
  return res.status(201).json({ message: `Successful vehicle`, data: vehicle });
};

const updateV = async (req, res) => {
  // const id = parseInt(req.params.id);
  const {
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
    priceByDay,
  } = req.body;
  const vehicle = await VehicleDAO.updated(
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
  );
  if (vehicle) {
    console.log("retoutver", vehicle);
    return res
      .status(200)
      .json({ message: `Vehicle ${id} updated`, data: vehicle });
  } else {
    return res.status(404).json({ message: "Error updating vehicle" });
  }
};

const deleteV = async (req, res) => {
  const { id } = req.body;
  //const { id } = parseInt(req.body);
  console.log("qsfqsfcq", id);
  const vehicle = await VehicleDAO.deleted(id);
  if (vehicle) {
    return res
      .status(200)
      .json({ message: `Vehicle ${id} deleted`, data: vehicle });
  } else {
    return res
      .status(404)
      .json({ message: "Error deleting vehicle", data: id });
  }
};

const readOneV = async (req, res) => {
  const id = parseInt(req.params.id);
  const vehicle = await VehicleDAO.readById(id);
  if (!vehicle) {
    return res.status(404).json({ message: "Vehicle not found" });
  }
  return res.status(200).json({ data: vehicle });
};

const readAllV = async (req, res) => {
  const vehicles = await VehicleDAO.readAll();
  if (!vehicles) {
    return res.status(404).json({ message: "vehicles not found" });
  }
  return res.status(200).json({ data: vehicles });
};

export const VehicleController = {
  createV,
  updateV,
  deleteV,
  readOneV,
  readAllV,
};
