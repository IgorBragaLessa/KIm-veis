import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entiti";

const listCategoriesService = async (): Promise<any> => {
  const categorieRepository = AppDataSource.getRepository(Categories);
  const categories = await categorieRepository.find();

  return categories;
};

export default listCategoriesService;
