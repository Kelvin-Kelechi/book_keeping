import express from "express";
import {
  ROOM_DELETE,
  ROOM_GET,
  ROOM_GET_ALL,
  ROOM_POST,
  ROOM_PUT,
  UPDATE_ROOM_AVAILABILITY,
} from "../controllers/roomController.js";
import { VerifyAdmin } from "../utils/verifyToken.js";

const router = express();

router.post("/:hotelId", VerifyAdmin, ROOM_POST);
router.put("/:id", VerifyAdmin, ROOM_PUT);
router.put("/availability/:id", UPDATE_ROOM_AVAILABILITY);
router.delete("/:id/:hotelId", VerifyAdmin, ROOM_DELETE);
router.get("/:id", ROOM_GET);
router.get("/", ROOM_GET_ALL);
export default router;
