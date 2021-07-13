import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import cartRouter from "./routes/cart.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(json());

// connecting to database

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .once("open", () => {
    console.log("connected");
  })
  .on("e", (e) => {
    console.log(e);
  });

app.use("/cart", cartRouter).on("error", (error) => {
  console.log("your error", error);
});

app
  .use("/product", productRouter)

  .on("error", (error) => {
    console.log("your error", error);
  });
app
  .use("/user", userRouter)

  .on("error", (error) => {
    console.log("your error", error);
  });

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
//listening to port

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
