import { Router } from "express";
import { addUser, getUser } from "../controllers/user.js";

const userRouter = Router();

userRouter.get("/",
getUser);

userRouter.post(
  "/add",
  addUser
);

export default userRouter;
