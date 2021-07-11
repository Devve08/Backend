import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader == null) {
    res.status(401);
    next();
  } else {
    // const bearer = authHeader.split(" ")[1];
    req.token = authHeader;
    // validate the token
    // search how to validate token with "jsonwebtoken"

    console.log("worked");
    next();
  }
};

export default authenticateToken;
