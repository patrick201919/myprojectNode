import { Router } from "express";
import { VehicleController } from "../controllers/vehicleController.js";
const initVehiclesRoutes = (app, sm, jwM, admin) => {
  const router = Router();

  router.get("/readall", sm, VehicleController.readAllV);
  router.get("/read", sm, jwM, admin, VehicleController.readOneV);
  router.post("/create", sm, jwM, admin, VehicleController.createV);
  router.put("/update", sm, jwM, admin, VehicleController.updateV);
  router.delete("/delete", sm, jwM, admin, VehicleController.deleteV);

  app.use("/vehicles", router);
};
export default initVehiclesRoutes;
