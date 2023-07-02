import { Request, Response, NextFunction } from "express";
import { appError } from "../errors/appErros";

const validationIsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    throw new appError("Permission adm is necessary", 403);
  }
  next();
};

export default validationIsAdmin;
