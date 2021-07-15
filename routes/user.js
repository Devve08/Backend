import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware.js";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/login", requireAuth, getUser);

userRouter.post("/add", addUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

export default userRouter;
