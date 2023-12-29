import express from 'express';
import { calcBmi, calcProtein } from '../allCalculation.js';
import schemas from '../models/schemas.js';
import OpenAI from 'openai';

import * as fs from 'fs';

const openAi = new OpenAI({
  apiKey: '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',
});

// const messages_non_lawyer =

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

const updateUser = (data) => {
  const newUser = new schemas.UsersData({
    name: data.name,
    email: data.email,
    phone: data.phone,
    age: data.age,
    gender: data.gender,
    weight: data.weight,
    height: data.height,
    schedule: {},

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

router.get('/users/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const users = schemas.UsersData;
    const userData = await users.findOne({ name: name });
    if (userData && !userData.schedule) {
      console.log(userData);

      const completion = await openAi.chat.completions.create({
        model: 'gpt-3.5-turbo-1106',
        messages: [
          {
            role: 'system',
            content: `Create a ${userData.levelOfExercise} split workout plan for ${userData.gender} as ${userData.age} years with ${userData.weight},  ${userData.height} with these targeted Muscles  ${userData.targetedMuscles},
            ' Use ${userData.levelOfExercise}  to specify how many days , at this order  Sunday, Monday,Tuesday,Wednesday,Thursday,Friday,Saturday, List ONLY workout days, provide at least 4 exercises eaqch days, follow provided format to output in JSON for each day:

            "day": []

      
                "exercises": [
                  {
                    "name": [name of exercises of type String ],
                    "targetedMuscles": [name targeted muscles of type String],
                    "sets": [number of sets type Number],
                    "repetitions": [number of repetitions  of type Number],
                    "instructions": [Add 3 brief instructions of type array of Strings]
                },

      ]

       `,
          },
        ],
        response_format: { type: 'json_object' },
      });

      const planData = JSON.parse(completion.choices[0].message.content);

      userData.schedule = {
        Sunday: planData.Sunday,
        Monday: planData.Monday,
        Tuesday: planData.Tuesday,
        Wednesday: planData.Wednesday,
        Thursday: planData.Thursday,
        Friday: planData.Friday,
        Saturday: planData.Saturday,
      };

      const updateUserData = userData.save();

      console.log(userData.schedule);
      res.json({
        userData: userData,
        planData: planData,
        updateUserData: updateUserData,
      });

      // //fs.writeFileSync('data.json', JSON.stringify(planData));

      // var data = JSON.parse(
      //   fs.readFileSync(
      //     '/Users/abdullahalhinai/Desktop/Fitness_App/backend/data.json'
      //   )
      // );
    } else if (!userData) {
      console.log('User not found');
      res.status(400).send('User not found');
    } else {
      console.log('schedule was already created');
      res.status(400).send('schedule was already created');
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
