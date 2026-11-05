import { Router } from "express";
import { getDetailPage } from "../controllers/messageController.js";

export const messageRouter = Router({ mergeParams: true });

messageRouter.get('/:id', getDetailPage);
