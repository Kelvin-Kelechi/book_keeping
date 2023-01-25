import express from "express";
import { USER_DELETE, USER_GET, USER_GET_ALL, USER_PUT } from "../controllers/userController.js";

const router = express();
 
router.put("/:id", USER_PUT);
router.delete("/:id", USER_DELETE);
router.get("/:id", USER_GET);
router.get("/", USER_GET_ALL);

export default router;
