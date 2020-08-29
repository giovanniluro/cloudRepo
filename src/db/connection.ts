import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(
`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASS}@clusterg.qyhsy.azure.mongodb.net/cloudrepo?retryWrites=true&w=majority`,
{useNewUrlParser: true, useUnifiedTopology: true}
);

//Logging the actual connection state
const db: mongoose.Connection = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', () => {
  console.log("=> Sucessfully connected to MongoDB!");
  mongoose.set('useCreateIndex', true); //Fix for ensureIndex deprecation
});
