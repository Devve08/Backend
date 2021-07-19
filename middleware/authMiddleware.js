import Jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const requireAuth = (req, res, next) => {
  const token = req.body.token;

  if (token) {
    Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err);
      } else {
        console.log(decodedToken);
        res.json(decodedToken);
      }
    });
  } else {
    next();
  }
};

//check current user

export const checkUser = (req, res, next) => {
  const token = req.body.token;

  if (token) {
    Jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      async (err, decodedToken) => {
        if (err) {
          console.log(err);
          res.locals.user = null;
          next();
        } else {
          console.log(decodedToken);
          let user = await User.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      }
    );
  } else {
    res.locals.user = null;
    next();
  }
};
