import { Router } from "express";
import { requireAuth, cartRequireAuth } from "../middleware/authMiddleware.js";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
  addUserCart,
} from "../controllers/user.js";

const userRouter = Router();

// userRouter.get("/cart", requireAuth);

userRouter.post("/login", requireAuth, getUser);

userRouter.post("/add", addUser);

userRouter.put("/", requireAuth, updateUser);

userRouter.put("/cart", cartRequireAuth, addUserCart);

userRouter.delete("/", deleteUser);

export default userRouter;
