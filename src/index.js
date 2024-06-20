import express from 'express'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';
import path from 'path';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(indexRouter);
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.listen(3000, () => {
  console.log("Server is running on port", 3000);
})
