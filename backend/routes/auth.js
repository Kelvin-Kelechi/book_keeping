import express from "express";
import { Login, Register } from "../controllers/authController.js";
 

const router = express();
router.post("/register", Register );
router.post("/login", Login );
export default router;
