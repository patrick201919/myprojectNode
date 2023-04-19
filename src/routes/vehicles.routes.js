import { Router } from "express";
import { VehicleController } from "../controllers/vehicleController.js";
const initVehiclesRoutes = (app, sm, jwM, admin) => {
  const router = Router();

  router.get("/readall", sm, jwM, VehicleController.readAllV);
  router.get("/read/:id", sm, jwM, admin, VehicleController.readOneV);
  //router.post("/create", sm, jwM, admin, VehicleController.createV);
  router.post("/create", sm, VehicleController.createV);
  // router.put("/update", sm, jwM, admin, VehicleController.updateV);
  router.put("/update", sm, jwM, VehicleController.updateV);
  router.delete("/delete", sm, jwM, VehicleController.deleteV);
  // router.delete("/delete", sm, jwM, admin, VehicleController.deleteV);

  app.use("/vehicles", router);
};
export default initVehiclesRoutes;
