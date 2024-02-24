import mongoose from 'mongoose';
import validator from 'validator';

const { Schema, model } = mongoose;
const { isEmail } = validator;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      validate: [isEmail, 'Enter a valide email'],
    },
    password: {
      type: String,
      required: true,
    },
    pickupAddress: {
      address: {
        type: String,
        required: true,
      },
      lng: { type: Number, required: true },
      lat: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

export const User = model('user', userSchema);
