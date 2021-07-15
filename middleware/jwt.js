import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const jwtCreate = (value) => {
  const accessToken = jwt.sign({ value }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  return accessToken;
};

export const jwtCheck = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token);
  if (!token) {
    res.send("no token");
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "failed" });
      } else {
        req.body.username = decoded.id;
        next();
      }
    });
  }
};
