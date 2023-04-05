import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    profile: {
      type: String, 
    },
    phone: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
