import { Router } from "express";
import { newRouter } from "./newRouter.js";

export const indexRouter = Router();

const messages = [
  {
    user: 'Sally',
    text: 'Hi everyone!',
    added: new Date().toLocaleString(),
  },
  {
    user: 'Moon',
    text: 'Hey Sally, how are you doing?',
    added: new Date().toLocaleString(),
  },
  {
    user: 'Sierra',
    text: 'It was a beautiful sunny day. I rode on my motorcycle!',
    added: new Date().toLocaleString(),
  },{
    user: 'Bob',
    text: 'I\'m hungry (T_T)',
    added: new Date().toLocaleString(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages });
});

newRouter.post('/', (req, res) => {
  const { name, message } = req.body;
  
  if (!name || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "Validation Failed: Name and Message are required!" 
    });
  }

  messages.push({ user: name, text: message, added: new Date().toLocaleString() });
  res.redirect('/');
});
