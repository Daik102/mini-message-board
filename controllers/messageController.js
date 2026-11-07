import { messages } from "../data/messages.js";
import { validationResult } from "express-validator";

export const getIndexPage = (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages });
};

export const getNewMessagePage = (req, res) => {
  res.render('new', { title: 'New Message', errors: [], formData: {} }); 
};

export const createNewMessage = (req, res) => {
  const errors = validationResult(req);
  
  // If validation failed, re-render the form
  if (!errors.isEmpty()) {
    return res.render('new', { 
      title: 'New Message',
      errors: errors.array(), 
      formData: req.body // Keep what the user typed
    });
  }

  const { user, text } = req.body;
  messages.push({ 
    user, 
    text, 
    added: new Date(), 
  });
  res.redirect('/');
};

export const getDetailPage = (req, res, next) => {
  const messageId = req.params.id;
  const selectedMessage = messages[messageId];

  if (!selectedMessage) {
    const err = new Error('Message not found');
    err.status = 404;
    return next(err);
  }

  res.render('detail', { 
    title: `${selectedMessage.user}'s message`, 
    message: selectedMessage 
  });
};
