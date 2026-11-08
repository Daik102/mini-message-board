import express from "express";
import favicon from 'serve-favicon';
import path from 'path';
import { indexRouter } from "./routes/indexRouter.js";
import { newRouter } from "./routes/newRouter.js";
import { messageRouter } from "./routes/messageRouter.js";

const app = express();
/*
app.set('views', path.join(import.meta.dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Incoming traffic monitor
app.use((req, res, next) => {
  console.log(`📡 [TRAFFIC LOG] ${req.method} request incoming for: ${req.url}`);
  next();
});

// app.use(favicon(path.join(import.meta.dirname, 'public', 'chat-processing-outline-custom.png')));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/message', messageRouter);

// 404 error
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// Error page handler
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  
  res.status(statusCode).render('error', { 
    title: `Error ${statusCode}`, 
    message: err.message
  });
});
*/
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
