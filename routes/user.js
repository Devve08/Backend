import { Router } from "express";
import { requireAuth, cartRequireAuth } from "../middleware/authMiddleware.js";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { updateUserCart, removeUserCart } from "../controllers/cart.js";

const userRouter = Router();

// userRouter.get("/cart", requireAuth);

userRouter.post("/login", requireAuth, getUser);

userRouter.post("/add", addUser);

userRouter.put("/", requireAuth, updateUser);

userRouter.put("/cart", cartRequireAuth, updateUserCart);

userRouter.delete("/cartremove", cartRequireAuth, removeUserCart);

userRouter.delete("/", deleteUser);

export default userRouter;
