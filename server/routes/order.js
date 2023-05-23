import express from 'express';
import { requireSignin, userMiddleware } from '../common-middelwares/index.js';

import { addOrder, getOrders, getOrder } from '../controllers/order.js';
const router = express.Router();

router.post("/addorder", requireSignin, userMiddleware, addOrder);
router.get("/getorders", requireSignin, userMiddleware, getOrders);
router.get("/getorder/:id", requireSignin, userMiddleware, getOrder);

export default router;