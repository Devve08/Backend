import expressAsyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import data from "../data.js"

export const addUser = expressAsyncHandler(async (req, res) => {
    const createUser = await User.insertMany(data.users);
    res.send({ createUser });
  })


export const getUser = expressAsyncHandler(async (req, res) =>{
    const getUsers = await User.find({});
    res.send({getUsers});
})  