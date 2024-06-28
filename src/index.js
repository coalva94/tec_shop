import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));


app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(join(__dirname, 'public')));



app.use(indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
