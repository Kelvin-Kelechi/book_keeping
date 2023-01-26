import express from "express";
import {
  USER_DELETE,
  USER_GET,
  USER_GET_ALL,
  USER_PUT,
} from "../controllers/userController.js";
import { VerifyAdmin, VerifyToken, VerifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthen", VerifyToken, (req, res, next) => {
//   res.send("Hello User, you are logged in");
// });
// router.get("/checkuser/:id", VerifyUser, (req, res, next) => {
//   res.send("Hello User, you are logged in and you can delete your acc");
// });
// router.get("/checkadmin/:id", VerifyAdmin, (req, res, next) => {
//   res.send("Hello Admin, you are logged in and you can delete all acc");
// });
router.put("/:id",VerifyUser, USER_PUT);
router.delete("/:id", VerifyUser, USER_DELETE);    
router.get("/:id", VerifyUser, USER_GET);
router.get("/", VerifyAdmin, USER_GET_ALL);

export default router;
