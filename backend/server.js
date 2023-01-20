import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'

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
  app.use('/hotels',hotelsRoute)
  app.use('/users',usersRoute)
  app.use('/rooms',roomsRoute)




  
  
  