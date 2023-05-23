import express from 'express';
import { adminMiddleware, requireSignin } from '../common-middelwares/index.js';
import {
 
  signin,
  signout,
  signup,
  signupAdmin,
  getUsers
  
} from "../controllers/user.js";
import {validationSingUpRequest,validationSingInRequest} from '../validators/user.js'

const router = express.Router();
router.post("/signin",validationSingInRequest,signin);
router.post("/signup" ,validationSingUpRequest, signup);
router.post("/signupAdmin",signupAdmin);
router.post("/signout", signout);
router.get("/users",requireSignin,adminMiddleware,getUsers)
export default router;
