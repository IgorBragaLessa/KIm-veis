import { Router } from "express";
import { createUserController } from "../controllers/user/createUserControllers";
import { listUserController } from "../controllers/user/listUsersController";
import validationToken from "../middlewares/validationUserToken";
import ensureDataValidMiddleware from "../middlewares/ensuredata";
import {
  userSerializer,
  userSerializerUpdate,
} from "../serializer/user.serializer";
import validationIsAdmin from "../middlewares/validationIsAdmin";
import updateUserController from "../controllers/user/updateUser";
import deleteUserController from "../controllers/user/deleteUser";

const userRoutes = Router();
userRoutes.post(
  "",
  ensureDataValidMiddleware(userSerializer),
  createUserController
);
userRoutes.get("", validationToken, validationIsAdmin, listUserController);
userRoutes.patch(
  "/:id",
  ensureDataValidMiddleware(userSerializerUpdate),
  validationToken,
  updateUserController
);
userRoutes.delete(
  "/:id",
  validationToken,
  validationIsAdmin,
  deleteUserController
);

export default userRoutes;
