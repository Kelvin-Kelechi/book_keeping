import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const ROOM_POST = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

export const ROOM_PUT = async (req, res, next) => {
  try {
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateRoom);
  } catch (error) {
    next(error);
  }
};
export const ROOM_DELETE = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await Room.findByIdAndDelete(req.params.id);
     try {
       await Hotel.findByIdAndUpdate(hotelId, {
         $pull: { rooms: req.params.id },
       });
     } catch (error) {
       next(error);
     }
    res.status(200).json("Room has been deleted");
  } catch (error) {
    next(error);
  }
};
export const ROOM_GET = async (req, res, next) => {
  try {
    const getRoom = await Room.findById(req.params.id);
    res.status(200).json(getRoom);
  } catch (error) {
    next(error);
  }
};
export const ROOM_GET_ALL = async (req, res, next) => {
  try {
    const getallRoom = await Room.find();
    res.status(200).json(getallRoom);
  } catch (error) {
    next(error);
  }
};

