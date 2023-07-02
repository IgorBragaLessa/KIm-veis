import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../services/user/updateUser";

const updateUserController = async (req: Request, res: Response) => {
  const isAdm = req.user.isAdm;
  const userData: IUserUpdate = req.body;
  const userID = req.params.id;
  const updatedUser = await updateUserService(userData, userID, isAdm);
  return res.json(updatedUser);
};

export default updateUserController;
