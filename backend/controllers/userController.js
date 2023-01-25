import User from "../models/User.js";

 
export const USER_PUT = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    next(error)
  }
};
export const USER_DELETE = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
     next(error);
  }
};
export const USER_GET = async (req, res, next) => {
  try {
    const getUser = await User.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (error) {
     next(error);
  }
};
export const USER_GET_ALL = async (req, res, next) => {
  try {
    const getallUser = await User.find();
    res.status(200).json(getallUser);
  } catch (error) {
    next(error);
  }
};
