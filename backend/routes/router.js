import express from 'express';
import { calcBmi, calcProtein } from '../allCalculation.js';
import schemas from '../models/schemas.js';

const router = express.Router();

const addUser = (data) => {
  const newUser = new schemas.UsersData({
    name: data.name,
    email: data.email,
    phone: data.phone,
    age: data.age,
    gender: data.gender,
    weight: data.weight,
    height: data.height,
    targetedMuscles: data.targeted_muscles.join(', '),
    levelOfExercise: data.levelOfExercise,
  });

  const saveUser = newUser.save();
};

router.post('/api', (req, res) => {
  const data = req.body;

  console.log(data);
  addUser(data);
  res.end('User Added!');
});

export default router;
