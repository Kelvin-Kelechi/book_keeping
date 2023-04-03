import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { CreateError } from "../utils/error.js";
export const REGISTER = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};
export const LOGIN = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(CreateError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(CreateError(400, "Wrong password or username"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...other } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
    .json({details:{...other}, isAdmin});
  } catch (error) {    
    next(error);
  }
}; 
