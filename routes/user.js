import { Router } from "express";
import User from "../models/user.model.js";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";

const userRouter = Router();

userRouter.get(
  "/add",
  expressAsyncHandler(async (req, res) => {
    const createUser = await User.insertMany(data.users);
    res.send({ createUser });
  })
);

export default userRouter;
