import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const ensureDataValidMiddleware =
  (serializer: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validateData = await serializer.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.body = validateData;

      next();
    } catch (error) {
      return res.status(400).json({
        message: error.errors,
      });
    }
  };

export default ensureDataValidMiddleware;
