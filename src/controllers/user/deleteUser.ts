import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser";

const deleteUserController = async (req: Request, res: Response) => {
  const isActive = req.user.isActive;
  const deleteUser = await deleteUserService(req.params.id);
  return res.status(204).json(deleteUser);
};
export default deleteUserController;
