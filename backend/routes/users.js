import express from "express";
import {
  USER_DELETE,
  USER_GET,
  USER_GET_ALL,
  USER_PUT,
} from "../controllers/userController.js";
import { VerifyToken, VerifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthen", VerifyToken, (req, res, next) => {
  res.send("Hello User, you are logged in");
});
router.get("/checkuser/:id", VerifyUser, (req, res, next) => {
  res.send("Hello User, you are logged in and you can delete your acc");
});
router.put("/:id", USER_PUT);
router.delete("/:id", USER_DELETE);    
router.get("/:id", USER_GET);
router.get("/", USER_GET_ALL);

export default router;
