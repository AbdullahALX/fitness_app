import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  age: { type: Number },
  gender: { type: String },
  weight: { type: Number },
  Height: { type: Number },
  levelOfExercise: { type: String },
  targetedMuscles: { type: String },
  entryDate: { type: Date, default: Date.now },
});

const UsersData = mongoose.model('UsersData', userDataSchema, 'usersData');

const mySchemas = { UsersData: UsersData };

export default mySchemas;
