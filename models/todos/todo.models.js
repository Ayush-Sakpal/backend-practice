import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    complete: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Make sure the name is same as given in quotes while exporting the userSchema.
    },

    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], // Arrays of sub-todos
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
