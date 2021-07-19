import expressAsyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import { jwtCreate } from "../middleware/jwt.js";
import bcrypt from "bcrypt";
import { hashPassword } from "./bcrypt.js";

export const getUser = expressAsyncHandler(async (req, res) => {
  const { username, password } = req.body;

  User.find({ username: username }, async (e, doc) => {
    if (doc.length === 0 || e) {
      return res.status(400).json(e);
    } else if (await bcrypt.compare(password, doc[0].password)) {
      const token = jwtCreate(username);
      console.log({ doc });
      return res.status(200).json({ doc, token });
    } else {
      return res.json({ message: "wrong password" }).status(401);
    }
  });
});

// export const getUserCart = async (req, res) => {
//   let { username } = req.body;
//   User.findOne({username:username},async (e))
// };

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
  res.send("hello");
});

export const updateUserCart = expressAsyncHandler(async (req, res) => {
  let username = req.body.username;
  let { product, quantity } = req.body.cart[0];
  let productObj = {
    product: product,
    quantity: quantity,
  };
  console.log({ product, quantity, username });
  await User.updateOne(
    { username: username },
    { $set: { cart: productObj } },
    (e, doc) => {
      if (e) {
        console.log({ e });
        res.json(e);
      } else {
        console.log({ doc });
        res.json(doc);
      }
    }
  );
});

export const deleteUser = expressAsyncHandler(async (req, res) => {
  let id = req.params.id;
  const deleteUsers = await User.deleteOne({ _id: id });
  res.send({ deleteUsers });
});
