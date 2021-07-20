import expressAsyncHandler from "express-async-handler";
import express from "express";
import User from "../models/user.model.js";
import { jwtCreate } from "../middleware/jwt.js";
import bcrypt from "bcrypt";
import { hashPassword } from "./bcrypt.js";

export const getUser = expressAsyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = User.find({ username: username }, async (e, doc) => {
    if (doc.length === 0 || e) {
      return res.status(400).json(e);
    } else if (await bcrypt.compare(password, doc[0].password)) {
      const token = jwtCreate(username);
      return res.status(200).json({ doc, token });
    } else {
      return res.json({ message: "wrong password" }).status(401);
    }
  });
});

export const addUser = expressAsyncHandler(async (req, res) => {
  let { name, username, password, email, address, phone } = req.body;

  await User.insertMany(
    {
      name: name,
      username: username,
      password: await hashPassword(password),
      email: email,
      isAdmin: false,
      address: address,
      phone: phone,
    },
    (err, docs) => {
      if (err) {
        let e = err.writeErrors[0].errmsg.split(":")[3].split(" ")[2];
        return res.json({ error: e }).status(400);
      } else {
        const token = jwtCreate(docs[0]._id);
        return res.status(200).json({
          success: true,
          message: "Sign-up successfull",
          data: docs,
          token,
        });
      }
    }
  );
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


// Mhamad routes //

export const showUsers = expressAsyncHandler(async (req, res) => {
    const user = await User.find({})
  res.status(200).json({user})
})

export const createUser = (req, res) => {
    if(!req.body){
      res.status(400).send({
        message : "Cannot add empty fields"
      })
      return;
    } 
      const user =  new User({
        name: req.body.name,
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
        address: req.body.address
      })
    
      user.save(user)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message: err.message
        })
      })
    
}