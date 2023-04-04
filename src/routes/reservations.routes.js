import { Router } from "express";
import { ReservationController } from "../controllers/ReservationController.js";

const initReservationsRoutes = (app, sm, jwM, admin, bookingUserAdmin) => {
  const router = Router();

  router.get("/readall", sm, ReservationController.readAllR);
  router.get(
    "/read/:id",
    sm,
    jwM,
    bookingUserAdmin,
    ReservationController.readOneR
  );
  router.post(
    "/create",
    sm,
    // jwM,
    // bookingUserAdmin,
    ReservationController.createR
  );
  router.put(
    "/update/:id",
    sm,
    jwM,
    bookingUserAdmin,
    ReservationController.updateR
  );
  router.delete(
    "/delete/:id",
    sm,
    jwM,
    bookingUserAdmin,
    ReservationController.deleteR
  );

  app.use("/reservations", router);
};
export default initReservationsRoutes;
