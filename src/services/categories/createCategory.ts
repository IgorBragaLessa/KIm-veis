import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entiti";
import { appError } from "../../errors/appErros";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoriService = async (dados: ICategoryRequest) => {
  const categorieRepository = AppDataSource.getRepository(Categories);

  const categoriExist = await categorieRepository.findOneBy({
    name: dados.name,
  });

  if (categoriExist) {
    throw new appError("categoria ja existe", 409);
  }

  const dadosCategoria = categorieRepository.create(dados);
  await categorieRepository.save(dadosCategoria);

  return [201, dadosCategoria];
};

export default createCategoriService;
