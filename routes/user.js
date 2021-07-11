import { Router } from "express";
import authenticateToken from "../controllers/auth.js";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/login", authenticateToken, getUser);

userRouter.post("/add", addUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

export default userRouter;
