import {Schema, model, Document } from 'mongoose';

const userSchema = new Schema({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

interface IuserSchema extends Document  {
  name: string;
  login: string;
  password: string;
}

export default model<IuserSchema>('User', userSchema);