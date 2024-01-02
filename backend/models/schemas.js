import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userExerciseSchema = new Schema({
  instructions: [{ type: String }],
  name: { type: String },
  repetitions: { type: Number, type: String },
  sets: { type: Number, type: String },
  targetedMuscles: { type: String },
});

const daySchema = new Schema({
  exercises: [userExerciseSchema],
});

const weekSchema = new Schema({
  Sunday: daySchema,
  String,
  Monday: daySchema,
  String,
  Tuesday: daySchema,
  String,
  Wednesday: daySchema,
  String,
  Thursday: daySchema,
  String,
  Friday: daySchema,
  String,
  Saturday: daySchema,
  String,
});

const userDataSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  age: { type: Number },
  gender: { type: String },
  weight: { type: Number },
  height: { type: Number, type: String },
  levelOfExercise: { type: String },
  targetedMuscles: { type: String },
  workoutDays: { type: String },
  schedule: weekSchema,
  entryDate: { type: Date, default: Date.now },
});

const UsersData = mongoose.model('UsersData', userDataSchema, 'usersData');

const mySchemas = { UsersData: UsersData };

export default mySchemas;
