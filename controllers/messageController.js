import * as db from '../db/queries.js'; 
import { validationResult } from "express-validator";

export const getIndexPage = async (req, res, next) => {
  try {
    const messages = await db.getAllMessages();
    res.render('index', { title: 'Mini Message Board', messages });
  } catch (err) {
    next(err);
  }
};

export const getNewMessagePage = (req, res) => {
  res.render('new', { title: 'New Message', errors: [], formData: {} }); 
};

export const createNewMessage = async (req, res, next) => {
  const errors = validationResult(req);
  
  // If validation failed, re-render the form
  if (!errors.isEmpty()) {
    return res.render('new', { 
      title: 'New Message',
      errors: errors.array(), 
      formData: req.body // Keep what the user typed
    });
  }

  try {
    const { username, text } = req.body;
    await db.insertMessage(username, text);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
};

export const getDetailPage = async (req, res, next) => {
  try {
    const messageId = req.params.id;
    const message = await db.getDetailMessage(messageId);

    if (!message) {
      const err = new Error('Message not found');
      err.status = 404;
      return next(err);
    }

    res.render('detail', { 
      title: `${message.user}'s message`, 
      message 
    });
  } catch (err) {
    next(err);
  }
};
