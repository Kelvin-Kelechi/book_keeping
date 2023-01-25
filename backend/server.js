import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected datebase and listening to port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/auth", authRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);
app.use("/users", usersRoute);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});
