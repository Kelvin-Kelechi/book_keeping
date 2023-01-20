import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './routes/auth.js'
const app = express();
dotenv.config();
app.use(express.json());


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

  app.use('/auth',authRoute)

  