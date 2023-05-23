import express from 'express';
import {addItemToCart,getCartItems,removeCartItem,removeCart} from '../controllers/cart.js'

import { adminMiddleware, requireSignin, userMiddleware } from '../common-middelwares/index.js';
const router = express.Router();

router.post(
  '/user/cart/addtocart',
  requireSignin,
  userMiddleware,
  addItemToCart
);

router.get("/user/getcartitems", requireSignin, userMiddleware, getCartItems);
router.post(
  "/user/cart/removeItem",
  requireSignin,
  userMiddleware,
  removeCartItem
);

router.post(
  "/user/cart/removeCart",
  requireSignin,
  userMiddleware,
  removeCart
);

export default router;