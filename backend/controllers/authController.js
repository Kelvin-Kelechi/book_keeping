import User from "../models/User.js";
import bycrypt from 'bcryptjs'
import { CreateError } from "../utils/error.js";
export const Register = async (req, res, next) => {
  try {
    const salt = bycrypt.genSaltSync(10);
    const hash = bycrypt.hashSync(req.body.password, salt);

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
export const Login = async (req, res, next) => {
  try {
      const user = await User.findOne({username: req.body.username})
      if(!user) return next(CreateError(404, "User not found"))

      const isPasswordCorrect = await bycrypt.compare(req.body.password, user.password)
      if(!isPasswordCorrect) return next(CreateError(400, "wrong password or username"))
      
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
