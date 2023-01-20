import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => { 
  app.listen(process.env.PORT, () => {
    console.log("connected datebase and listening to port", process.env.PORT);
  });
})
.catch((error)=>{
    console.log(error)
})