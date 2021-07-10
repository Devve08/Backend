import express from "express";
import { getProducts, addProducts } from "../controllers/product.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.post("/create", addProducts);

export default productRouter;
