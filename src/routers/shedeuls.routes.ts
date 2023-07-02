import { Router } from "express";
import { createShedelController } from "../controllers/shedels/createdShedeuls";
import listShedeusController from "../controllers/shedels/listShedels";
import validationIsAdmin from "../middlewares/validationIsAdmin";
import validationToken from "../middlewares/validationUserToken";

const shedeulesRoute = Router();
shedeulesRoute.post("", validationToken, createShedelController);
shedeulesRoute.get(
  "/properties/:id",
  validationToken,
  validationIsAdmin,
  listShedeusController
);

export default shedeulesRoute;
