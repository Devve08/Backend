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

userRouter.put("/update/:id", updateUser);

userRouter.delete("/delete/:id", deleteUser);

export default userRouter;
