import { Router } from "express";
import { body } from 'express-validator';
import { createNewMessage, getNewMessagePage } from "../controllers/messageController.js";

export const newRouter = Router();

newRouter.get('/', getNewMessagePage);

newRouter.post('/', [
  body('username')
    .trim()
    .notEmpty().withMessage('** What\'s your name? **')
    .isLength({ max: 20 }).withMessage('** Name cannot exceed 20 characters **'),
  body('text')
    .trim()
    .notEmpty().withMessage('** No messages? **')
    .isLength({ max: 200 }).withMessage('** Message cannot exceed 200 characters **')
], createNewMessage);
