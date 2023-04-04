import express from "express";
import initRoutes from "./src/routes/router.js";
import initMiddlewares from "./src/middlewares/init.js";
import connection from "./src/connection/dbConnection.js";
import User from "./src/models/User.js";
import EquipementOption from "./src/models/EquipementOption.js";
import Media from "./src/models/Media.js";
import Reservation from "./src/models/Reservation.js";
import Vehicle from "./src/models/Vehicle.js";

const app = express();
const PORT = process.env.PORT || 3006;

const start = async () => {
  try {
    initMiddlewares(app);
    initRoutes(app);
    await connection.sync();
  } catch (e) {
    console.log(e.message);
  }
};
await start();

app.listen(PORT, () => {
  console.log(`Server running Port ${PORT}`);
});
