import { Router } from "express";
import { MediaController } from "../controllers/mediaController.js";
const initMediaRoutes = (app, sm, jwM, admin) => {
  const router = Router();

  router.get("/readall", sm, jwM, admin, MediaController.readAllM);
  router.get("/read/:id", sm, jwM, admin, MediaController.readOneM);
  router.post("/create", sm, jwM, admin, MediaController.createM);
  router.put("/update/:id", sm, jwM, admin, MediaController.updateM);
  router.delete("/delete/:id", sm, jwM, admin, MediaController.deleteM);

  app.use("/media", router);
};
export default initMediaRoutes;
