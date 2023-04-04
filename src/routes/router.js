import initUsersRoutes from "./users.routes.js";
import { sanitizeMiddleware } from "../middlewares/sanitize.middleware.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";
import { admin, bookingUserAdmin, userAdmin } from "../middlewares/auth.js";
import initReservationsRoutes from "./reservations.routes.js";
import initVehiclesRoutes from "./vehicles.routes.js";
import initMediaRoutes from "./media.routes.js";
import initOptionRoutes from "./equipementOption.routes.js";
const initRoutes = (app) => {
  initUsersRoutes(app, sanitizeMiddleware, jwtMiddleware, admin, userAdmin);
  initReservationsRoutes(
    app,
    sanitizeMiddleware,
    jwtMiddleware,
    admin,
    userAdmin,
    bookingUserAdmin
  );
  initVehiclesRoutes(app, sanitizeMiddleware, jwtMiddleware, admin);
  initMediaRoutes(app, sanitizeMiddleware, jwtMiddleware, admin);
  initOptionRoutes(app, sanitizeMiddleware, jwtMiddleware, admin);
};

export default initRoutes;
