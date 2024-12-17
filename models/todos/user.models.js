// Step-1: Import mongoose
import mongoose from 'mongoose';

// mongoose helps us in making schema

// Step-2: Create new schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, 'Password is required!'],
    },
  },
  { timestamps: true }
);

// This schema is to be exported. It won' make a schema unless it is exported. Schema will be created in MongoDB

// Step-3: Export this schema as follows
export const User = mongoose.model('User', userSchema); // This model method asks for two parameters: What "name" should be given to the model; On what "basis"/"schema" should it make the model

// This name given to the model in quotes is shown in Database in plural and all lowercase form, i.e, The "User" model will be shown as "users" in the database. It is the std. practice of the db.
