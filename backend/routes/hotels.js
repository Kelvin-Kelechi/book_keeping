import express from "express";
import { HOTELS_GET } from "../controllers/hotelsController.js";
const router = express();

router.post("/", HOTELS_GET);
 
export default router;
