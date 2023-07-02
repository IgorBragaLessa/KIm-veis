import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import "dotenv/config";
import { appError } from "../../errors/appErros";

const sessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (user.isActive === false) {
    throw new appError("Sua conta foi desativada", 400);
  }

  if (!user) {
    throw new appError("user or passord incorret", 403);
  }

  const passowrdMath = await compare(password, user.password);

  if (!passowrdMath) {
    throw new appError("user or passord incorret", 403);
  }
  const token = jwt.sign(
    {
      isAdm: user.isAdm,
      isActive: user.isActive,
    },
    process.env.SECRET_KEY,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return token;
};

export default sessionService;
