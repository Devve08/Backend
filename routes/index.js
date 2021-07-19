import { Router } from "express";
import productRouter from "./product.js";
import userRouter from "./user.js";
import cartRouter from "./cart.js";

const appRoutes = Router();

appRoutes.use("/product", productRouter);
appRoutes.use("/user", userRouter);

export default appRoutes;
