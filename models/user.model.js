import mongoose from "mongoose";
import Cart from "./cart.js";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },
  cart: [Cart],
});

const User = mongoose.model("User", userSchema);

export default User;
