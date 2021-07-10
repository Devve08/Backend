import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/login", getUser);

userRouter.post("/add", addUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

export default userRouter;
