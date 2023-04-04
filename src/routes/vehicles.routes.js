import { Router } from "express";
import { VehicleController } from "../controllers/vehicleController.js";
const initVehiclesRoutes = (app, sm, jwM, admin) => {
  const router = Router();

  router.get("/readall", sm, jwM, admin, VehicleController.readAllV);
  router.get("/read/:id", sm, jwM, admin, VehicleController.readOneV);
  //router.post("/create", sm, jwM, admin, VehicleController.createV);
  router.post("/create", sm, VehicleController.createV);
  router.put("/update/:id", sm, jwM, admin, VehicleController.updateV);
  router.delete("/delete/:id", sm, jwM, admin, VehicleController.deleteV);

  app.use("/vehicles", router);
};
export default initVehiclesRoutes;
