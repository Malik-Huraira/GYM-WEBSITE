import jwt from "jsonwebtoken";

const JWT_SECRET = 'Nhsbdahbdjsabhj';
const generateJWTToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "1d",
  });
};



export default generateJWTToken;