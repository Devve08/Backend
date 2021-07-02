import express, { json } from "express";
import cors from "cors";
import { connect, connection } from "mongoose";
import "dotenv/config";

import productRouter from "./routes/product";
import userRouter from "./routes/user";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(json());

// connecting to database

connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection
  .once("open", () => {
    console.log("connected");
  })
  .on("e", (e) => {
    console.log(e);
  });

app.use("/product", productRouter);
app
  .use("/user", userRouter)

  .on("error", (error) => {
    console.log("your error", error);
  });

//listening to port

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
