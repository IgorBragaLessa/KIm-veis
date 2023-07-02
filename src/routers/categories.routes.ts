import { Router } from "express";
import { createCategoriController } from "../controllers/categories/createCategori";
import validationToken from "../middlewares/validationUserToken";
import validationIsAdmin from "../middlewares/validationIsAdmin";
import listCategoriesController from "../controllers/categories/getCategories";
import listPropByCategoryController from "../controllers/categories/listUniqCategory";

const categoriesRoutes = Router();
categoriesRoutes.post(
  "",
  validationToken,
  validationIsAdmin,
  createCategoriController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/properties", listPropByCategoryController);

export default categoriesRoutes;
