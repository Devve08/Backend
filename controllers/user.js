import expressAsyncHandler from "express-async-handler";
import User from "../models/user.model.js";
// import data from "../data.js";

export const getUser = expressAsyncHandler(async (req, res) => {
  let user = req.body.username;
  let pass = req.body.password;
  const getUsers = await User.find(
    { username: user, password: pass },
    (e, doc) => {
      if (doc.length === 0 || e) {
        return res
          .status(403)
          .json({ message: "Username or passowrd are wrong" });
      } else {
        return res.status(200).json(doc);
      }
    }
  );
});

export const addUser = expressAsyncHandler(async (req, res) => {
  let { password, username, name, email, address, phone } = req.body;
  console.log(password, username);
  const createUser = await User.insertMany(
    {
      username: username,
      password: password,
      name: name,
      email: email,
      address: address,
      phone: phone,
    },
    (err, docs) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      } else {
        res.status(200).json({ success: true, message: "Sign-up successfull" });
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
