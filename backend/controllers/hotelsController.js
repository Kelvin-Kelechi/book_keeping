import Hotel from "../models/Hotel.js";

export const HOTELS_POST = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error)
  }
};

export const HOTELS_PUT = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
     next(error);
  }
};
export const HOTELS_DELETE = async (req, res, next) => {
  try {
     await  Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been deleted");
  } catch (error) {
    next(error);
  }
};
export const HOTELS_GET = async (req, res, next) => {
  try {
    const getHotel = await  Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    next(error);
  }
};
export const HOTELS_GET_ALL = async (req, res, next) => {
  try {
    const getallHotel = await  Hotel.find();
    res.status(200).json(getallHotel);
  } catch (error) {
    next(error)
  }
};
