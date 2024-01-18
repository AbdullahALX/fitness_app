import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
import router from '../backend/routes/router.js';

import schemas from '../backend/models/schemas.js';
import bodyParser from 'body-parser';

import * as path from 'path';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log('DB Connected...'))
  .catch((err) => console.log(err));

// __dirname = path.resolve();

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')));
//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   );
// }

// app.use(express.static(path.resolve(__dirname, './frontend/build')));

// app.get('*', function (request, response) {
//   response.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
// });

// app.get('/*', function (req, res) {
//   res.sendFile(
//     path.join(__dirname, '..frontend/build/indexs.html'),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/dist'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
