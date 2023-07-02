import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { appError } from "../../errors/appErros";

const deleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });
  if (!findUser) {
    throw new appError("Id não encontrado", 404);
  }
  if (!findUser.isActive) {
    throw new appError("usuario não existe", 400);
  }

  findUser.isActive = false;

  await userRepository.save(findUser);
};

export default deleteUserService;
