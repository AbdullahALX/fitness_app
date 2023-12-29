// import express from 'express';
// import OpenAI from 'openai';

// const openAi = new OpenAI({
//   apiKey: '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',
// });

// const messages_non_lawyer = [
//   {
//     role: 'system',
//     content: `Create a (levelOfExercise) split workout plan for (gender) as (age) years with (weight), (Height) with these targeted Muscles (targetedMuscles),
//       ' Use (levelOfExercise) to predict number of days and how many exercises in each day follow provided format for each day:

//       "day": []

//           "exercises": [
//             {
//               "name": [name of exercises ],
//               "targetedMuscles": [name targeted muscles],
//               "sets": [number of sets],
//               "repetitions": [number of repetitions],
//               "instructions": [Add 3 brief instructions]
//           },
// ]

//  `,
//   },
// ];

// const ai_ = async (data) => {
//   const completion = await openAi.chat.completions.create({
//     model: 'gpt-3.5-turbo-1106',
//     messages: messages_non_lawyer,
//     response_format: { type: 'json_object' },
//   });
//   console.log(completion.choices[0].message.content);
// };
