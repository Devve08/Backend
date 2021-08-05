import express from "express";
import { getProducts, addProducts } from "../controllers/product.js";
import { checkUser } from "../middleware/authMiddleware.js";


const productRouter = express.Router();



productRouter.get("*", checkUser);

productRouter.get("/", getProducts);

productRouter.post("/create" ,addProducts);

export default productRouter;
