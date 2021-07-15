import Jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if (token) {
    Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err);
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("no token");
  }
};
