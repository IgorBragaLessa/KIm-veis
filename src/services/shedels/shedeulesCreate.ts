import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entiti";
import { Schedules_user_properties } from "../../entities/shedeuls.entiti";
import { User } from "../../entities/user.entity";
import { appError } from "../../errors/appErros";
import { IScheduleRequest } from "../../interfaces/schedules";

const shedeusCreateService = async (
  { date, hour, propertyId }: IScheduleRequest,
  userId: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const schedelRepository = AppDataSource.getRepository(
    Schedules_user_properties
  );
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const userExist = await userRepository.findOneBy({
    id: userId,
  });

  if (!userExist) {
    throw new appError("usuario não existe", 401);
  }
  const propertiExist = await propertiesRepository.findOneBy({
    id: propertyId,
  });
  if (!propertiExist) {
    throw new appError("properiedade não existe", 404);
  }
  const schAlreadyExist = await schedelRepository.findOneBy({
    hour,
    date,
  });

  if (schAlreadyExist) {
    throw new appError("Schedule already exists", 409);
  }
  const badHour = hour.split(":");

  if (parseInt(badHour[0]) <= 8) {
    throw new appError("bad hour", 400);
  }

  if (parseInt(badHour[0]) >= 18) {
    throw new appError("bad hour", 400);
  }

  const diaAgendamento = new Date(date).getDay();

  if (diaAgendamento == 6 || diaAgendamento == 0) {
    throw new appError("data invalida", 400);
  }
  const schedel = schedelRepository.create({
    date,
    hour,
    properties: propertiExist,
    user: userExist,
  });
  await schedelRepository.save(schedel);

  return [201, { message: "agendamento marcado" }];
};

export default shedeusCreateService;
