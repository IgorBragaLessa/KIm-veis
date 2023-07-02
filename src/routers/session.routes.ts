import { Router } from "express";
import { sessionController } from "../controllers/login/sessionController";

const sessionRoutes = Router();
sessionRoutes.post("", sessionController);

export default sessionRoutes;
