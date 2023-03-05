import express from "express";
import {
  HOTELS_POST,
  HOTELS_PUT,
  HOTELS_DELETE,
  HOTELS_GET_ALL,
  HOTELS_GET,
  countByCity,
  countByType,
  getHotelsRoom,
} from "../controllers/hotelsController.js";
import { VerifyAdmin } from "../utils/verifyToken.js";
const router = express();

router.post("/", VerifyAdmin, HOTELS_POST);
router.put("/:id", VerifyAdmin, HOTELS_PUT);
router.delete("/:id", VerifyAdmin, HOTELS_DELETE);
router.get("/find/:id", HOTELS_GET);
router.get("/", HOTELS_GET_ALL);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelsRoom);


export default router;
