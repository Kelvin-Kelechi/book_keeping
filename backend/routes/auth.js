import express from "express";
import { LOGIN, REGISTER } from "../controllers/authController.js";
 

const router = express();
router.post("/register", REGISTER );
router.post("/login",  LOGIN );
export default router;
