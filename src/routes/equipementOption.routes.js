import { Router } from "express";
import { OptionController } from "../controllers/optionController.js";
const initOptionRoutes = (app, sm, jwM, admin) => {
  const router = Router();

  router.get("/readall", sm, jwM, admin, OptionController.readAllO);
  router.get("/read/:id", sm, jwM, admin, OptionController.readOneO);
  router.post("/create", sm, jwM, admin, OptionController.createO);
  router.put("/update/:id", sm, jwM, admin, OptionController.updateO);
  router.delete("/delete/:id", sm, jwM, admin, OptionController.deleteO);

  app.use("/option", router);
};
export default initOptionRoutes;
