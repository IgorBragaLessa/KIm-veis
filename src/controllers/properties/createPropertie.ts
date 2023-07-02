import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import createPropertieService from "../../services/properties/createProperti";

const createPropertiesController = async(req: Request, res: Response) =>{
    const dadosPropertie: IPropertyRequest = req.body;
    const [status, createCategory] = await createPropertieService(dadosPropertie);
    return res.status(status as number).json(createCategory);
}

export {createPropertiesController}