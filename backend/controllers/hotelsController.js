import Hotel from "../models/Hotel.js";

export const HOTELS_POST = async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const HOTELS_PUT = async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const HOTELS_DELETE = async (req, res) => {
  try {
     await  Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const HOTELS_GET = async (req, res) => {
  try {
    const getHotel = await  Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const HOTELS_GET_ALL = async (req, res) => {
  try {
    const getallHotel = await  Hotel.find();
    res.status(200).json(getallHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};
