import { Router } from "express";
import { requireAuth, cartRequireAuth } from "../middleware/authMiddleware.js";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
  showUsers,
  createUser,
} from "../controllers/user.js";
import { updateUserCart, removeUserCart } from "../controllers/cart.js";

const userRouter = Router();

// userRouter.get("/cart", requireAuth);

userRouter.post("/login", requireAuth, getUser);

<<<<<<< HEAD
// userRouter.get("/users", showUsers);
=======
userRouter.get("/users", showUsers)
>>>>>>> e22c8e73c2429df2a40ca018b7a0b8de3a2f37f1

userRouter.post("/add-user", createUser);

userRouter.post("/add", addUser);

userRouter.put("/:id",requireAuth, updateUser);

userRouter.put("/cart", cartRequireAuth, updateUserCart);

userRouter.put("/cartremove", cartRequireAuth, removeUserCart);

userRouter.delete("/:id", deleteUser);

export default userRouter;
