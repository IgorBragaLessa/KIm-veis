import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { appError } from "../../errors/appErros";
import { IUserUpdate } from "../../interfaces/users";
import { userTotal } from "../../serializer/user.serializer";

const updateUserService = async (
  userData: IUserUpdate,
  userID: string,
  isAdm: boolean
) => {
  if (Object.keys(userData).length === 0) {
    throw new appError("campo nao pode ser alterado", 401);
  }
  const { name, email, password } = userData;

  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id: userID });
  if (!findUser) {
    throw new appError("Id não encontrado", 404);
  }

  if (!isAdm) {
    throw new appError("Permission adm is necessary", 401);
  }

  const updateUser = userRepository.create({
    ...findUser,
    name: name || findUser.name,
    password: password || findUser.password,
    email: email || findUser.email,
  });
  await userRepository.save(updateUser);

  const semPass = await userTotal.validate(updateUser, {
    stripUnknown: true,
  });

  return updateUser;
};

export default updateUserService;
