import express from "express";
import Product from "../models/product.model.js";
import expressAsyncHandler from "express-async-handler";
import { getProducts, addProducts } from "../controllers/product.js";

const productRouter = express.Router();

productRouter.get('/', getProducts)

productRouter.post(
  "/add",
  addProducts
);


export default productRouter;
