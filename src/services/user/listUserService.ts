import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { listUsersReturnedData } from "../../serializer/user.serializer";

const listUserServices = async (): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const returnData = await listUsersReturnedData.validate(users, {
    stripUnknown: true,
  });
  return returnData;
};

export default listUserServices;
