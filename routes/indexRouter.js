import { Router } from "express";
import { getIndexPage } from "../controllers/messageController.js";

export const indexRouter = Router();

indexRouter.get('/', getIndexPage);
