import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entiti";
import { Properties } from "../../entities/properties.entiti";
import { appError } from "../../errors/appErros";

const listPropByCategoryService = async (CateId: string): Promise<any> => {
  const categorieRepository = AppDataSource.getRepository(Categories);
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const categoriExist = await categorieRepository.findOneBy({
    id: CateId,
  });

  if (!categoriExist) {
    throw new appError("Categoria não existe", 404);
  }

  const propsCategory = await categorieRepository.findOne({
    where: { id: CateId },
    relations: { properties: true },
  });

  return propsCategory;
};

export default listPropByCategoryService;
