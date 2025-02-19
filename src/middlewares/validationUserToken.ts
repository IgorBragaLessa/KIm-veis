import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const validationToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "invalid token no passed",
    });
  }
  token = token.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "invalid token",
      });
    }
    req.user = {
      isAdm: decoded.isAdm,
      id: decoded.sub,
      isActive: decoded.isActive,
    };
  });
  return next();
};

export default validationToken;
