import { Request, Response } from "express";
import { ICategoryRequest } from "../../interfaces/categories";
import createCategoriService from "../../services/categories/createCategory";

const createCategoriController = async (req: Request, res: Response) => {
  const dados: ICategoryRequest = req.body;
  const [status, createCategory] = await createCategoriService(dados);
  return res.status(status as number).json(createCategory);
};

export { createCategoriController };
