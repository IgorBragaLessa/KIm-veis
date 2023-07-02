import { IUser } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { appError } from "../../errors/appErros";
import { Properties } from "../../entities/properties.entiti";
import { IPropertyRequest } from "../../interfaces/properties";
import { Categories } from "../../entities/categories.entiti";
import { Address } from "../../entities/adress.entiti";

const createPropertieService = async ({
  address,
  categoryId,
  size,
  value,
}: IPropertyRequest): Promise<Array<User | number | string | {}>> => {
  const propertieRepository = AppDataSource.getRepository(Properties);
  const categoriRepository = AppDataSource.getRepository(Categories);
  const addressRepository = AppDataSource.getRepository(Address);

  const categoriaExist = await categoriRepository.findOneBy({
    id: categoryId,
  });
  if (!categoriaExist) {
    throw new appError("categoria não existe", 404);
  }
  if (address.state.length > 2) {
    throw new appError("Invalid value for State", 400);
  }
  if (address.zipCode.length > 8) {
    throw new appError("Invalid value for ZipCode", 400);
  }

  const adressExist = await addressRepository.findOneBy({
    zipCode: address.zipCode,
  });

  if (adressExist) {
    throw new appError("endereço existente", 409);
  }

  const createAdress = addressRepository.create(address);
  await addressRepository.save(createAdress);

  const propriedades = propertieRepository.create({
    address: createAdress,
    category: categoriaExist,
    size,
    value,
  });
  await propertieRepository.save(propriedades);

  return [201, propriedades];
};

export default createPropertieService;
