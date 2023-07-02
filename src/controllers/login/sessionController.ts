import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users";
import sessionService from "../../services/login/sessionService";

const sessionController = async (req: Request, res: Response) => {
  const sessionData: IUserLogin = req.body;
  const token = await sessionService(sessionData);
  return res.json({ token });
};

export { sessionController };
