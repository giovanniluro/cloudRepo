import { Schema, model, Document } from 'mongoose';

const repositorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: true
  },
  creationDate: {
    type:Date,
    default: Date.now()
  },
  user_id: {
    type: String,
    required: true
  },
  repositoryPassword: {
    type: String,
    required: false
  }
});

interface IRepository extends Document {
  title: string;
  description?: string;
  url: string;
  creationDate: Date;
  user_id: String;
  repositoryPassword?: String;
}

export default model<IRepository>('Repository', repositorySchema);

