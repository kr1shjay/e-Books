import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function decodeToken(token) {
    const verify = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    console.log("verify L ",verify)
    return verify;
}


export function createToken(user_id, username) {
    return jwt.sign({ user_id, username }, process.env.TOKEN_SECRET_KEY);
}