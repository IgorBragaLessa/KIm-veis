import { Request, Response } from "express";
import listPropertiesService from "../../services/properties/listProperties";

const listPropertiesController = async (req: Request, res: Response) => {
  const Properties = await listPropertiesService();
  return res.json(Properties);
};

export default listPropertiesController;
