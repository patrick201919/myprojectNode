import { Router } from "express";
import { UserController } from "../controllers/userController.js";

const initUsersRoutes = (app, sm, jwM, admin, userAd) => {
  const router = Router();

  router.get("/read", sm, jwM, userAd, UserController.readOne);
  router.get("/readall", sm, UserController.readUsers);
  router.post("/create", sm, UserController.signUp);
  router.post("/login", sm, UserController.login);
  router.put("/update", sm, jwM, userAd, UserController.updateUser);
  router.delete("/delete", sm, jwM, userAd, UserController.deleteUser);

  app.use("/users", router);
};

export default initUsersRoutes;
