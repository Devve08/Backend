import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const jwtCreate = (value) => {
  const cryptedValue = jwt.sign({ value }, process.env.ACCESS_TOKEN_SECRET);
  return cryptedValue;
};

// export const jwtCheck = (value) => {
//   const cryptedValue = jwt.verify({value},process.env.ACCESS_TOKEN_SECRET);
//   if()
// }
