import jwt from "jsonwebtoken";
import { CreateError } from "./error.js";

export const VerifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(CreateError(401, "You are not authenticated"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(CreateError(403, "token not valid"));
    req.user = user;
    next();
  });
};
export const VerifyUser = (req, res, next) => {
  VerifyToken(req, res,  () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(CreateError(403, "You are not authorized"));
    }
  }); 
};
export const VerifyAdmin = (req, res, next) => {
  VerifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(CreateError(403, "You are not authorized"));
    }
  }); 
};