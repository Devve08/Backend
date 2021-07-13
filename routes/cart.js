import express from "express"
import { getCart, addToCart } from "../controllers/cart.js";


const cartRouter = express.Router();

cartRouter.get("/", getCart);

cartRouter.get("/add/:product", addToCart)

export default cartRouter