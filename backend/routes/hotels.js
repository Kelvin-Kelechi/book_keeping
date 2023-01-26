import express from "express";
import { HOTELS_POST,HOTELS_PUT,HOTELS_DELETE,HOTELS_GET_ALL,HOTELS_GET } from "../controllers/hotelsController.js";
import { VerifyAdmin } from "../utils/verifyToken.js";
const router = express();

router.post("/", VerifyAdmin, HOTELS_POST);
router.put("/:id", VerifyAdmin, HOTELS_PUT); 
router.delete("/:id", VerifyAdmin, HOTELS_DELETE);
router.get("/:id", HOTELS_GET);
router.get("/", HOTELS_GET_ALL);
 
export default router;
