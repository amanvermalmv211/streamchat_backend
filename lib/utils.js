import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "7d"});

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // time in ms
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "none", // if backend and frontend sites are different other with set "strict"
        secure: true,
        path: "/"
    });

    return token;
}

export default generateToken;