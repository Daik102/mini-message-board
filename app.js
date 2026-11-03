import express from "express";
import path from 'path';
import { newRouter } from "./routes/newRouter.js";
import { indexRouter } from "./routes/indexRouter.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/new", newRouter);
app.use("/", indexRouter);

app.set('views', path.join(import.meta.dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(import.meta.dirname, 'public');
app.use(express.static(assetsPath));

app.get('/{*splat}', (req, res) => {
  res.status(404).render('error', { title: 'Error 404' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
