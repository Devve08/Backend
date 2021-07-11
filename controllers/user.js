import expressAsyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import { jwtCreate } from "../controllers/jwt.js";
import bcrypt from "bcrypt";

export const getUser = expressAsyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = User.find({ username: username }, async (e, doc) => {
    if (doc.length === 0 || e) {
      return res.status(403).send("no");
    }
    if (await bcrypt.compare(password, doc[0].password)) {
      const token = jwtCreate(username);
      return res.status(200).json({ doc, token });
    } else {
      return res.send("wrong password");
    }
  });
});

export const addUser = expressAsyncHandler(async (req, res) => {
  let { name, username, password, email, address, phone } = req.body;

  // const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  await User.insertMany(
    {
      name: name,
      username: username,
      password: hashedPassword,
      email: email,
      isAdmin: false,
      address: address,
      phone: phone,
    },
    (err, docs) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      } else {
        const token = jwtCreate(username);
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
