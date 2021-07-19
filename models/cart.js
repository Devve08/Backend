import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  product: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

const Cart = cartSchema;

export default Cart;
