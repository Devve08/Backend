import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware.js";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
  updateUserCart,
} from "../controllers/user.js";

const userRouter = Router();

// userRouter.get("/cart", requireAuth);

userRouter.post("/login", requireAuth, getUser);

userRouter.post("/add", addUser);

userRouter.put("/", requireAuth, updateUser);

userRouter.put("/cart", requireAuth, updateUserCart);

userRouter.delete("/", deleteUser);

export default userRouter;
