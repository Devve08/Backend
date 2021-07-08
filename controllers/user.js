import expressAsyncHandler from "express-async-handler";
import User from "../models/user.model.js";
// import data from "../data.js";

export const getUser = expressAsyncHandler(async (req, res) => {
  console.log(req.body);

  let user = req.body.username;
  // let pass = req.body.password;
  const getUsers = await User.find({ username: user });
  res.send({ getUsers });
});

export const addUser = expressAsyncHandler(async (req, res) => {
  let user = req.body.username;
  let pass = req.body.password;
  const createUser = await User.insertMany({ username: user, password: pass });
  res.send({ createUser });
});

export const updateUser = expressAsyncHandler(async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  const updateUsers = await User.updateOne({ _id: id }, { $set: body });
  res.send({ updateUsers });
});

export const deleteUser = expressAsyncHandler(async (req, res) => {
  let id = req.params.id;
  const deleteUsers = await User.deleteOne({ _id: id });
  res.send({ deleteUsers });
});
