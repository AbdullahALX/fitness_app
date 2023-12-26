import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
import router from '../backend/routes/router.js';

import schemas from '../backend/models/schemas.js';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

app.use('/', router);

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log('DB Connected...'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
