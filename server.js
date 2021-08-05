import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";
import appRoutes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
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

app.use(appRoutes);
app.on("error", (e) => {
  console.log("your error", e);
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
//listening to port

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
