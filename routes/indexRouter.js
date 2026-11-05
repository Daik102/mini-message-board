import { Router } from "express";
import { getIndexPage } from "../controllers/messageController.js";
import { messageRouter } from "./messageRouter.js";

export const indexRouter = Router();

indexRouter.get('/', getIndexPage);
indexRouter.use('/message/:id', messageRouter);
