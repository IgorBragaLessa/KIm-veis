import { Router } from "express";
import { createPropertiesController } from "../controllers/properties/createPropertie";
import listPropertiesController from "../controllers/properties/listProperties";
import ensureDataValidMiddleware from "../middlewares/ensuredata";
import validationIsAdmin from "../middlewares/validationIsAdmin";
import validationToken from "../middlewares/validationUserToken";
import { propertiSerializer } from "../serializer/properties.serializer";

const propertiesRoutes = Router();
propertiesRoutes.post(
  "",
  ensureDataValidMiddleware(propertiSerializer),
  validationToken,
  validationIsAdmin,
  createPropertiesController
);
propertiesRoutes.get("", listPropertiesController);

export default propertiesRoutes;
