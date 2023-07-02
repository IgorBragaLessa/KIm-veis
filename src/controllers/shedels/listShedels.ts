import { Request, Response } from "express";
import listCategoriesService from "../../services/categories/listCategories";
import listPropByCategoryService from "../../services/categories/listPropByCategory";
import listShedelsService from "../../services/shedels/listShedels";

const listShedeusController = async (req: Request, res: Response) => {
  const propertiesFromCategoryService = await listShedelsService(req.params.id);
  return res.json(propertiesFromCategoryService);
};

export default listShedeusController;