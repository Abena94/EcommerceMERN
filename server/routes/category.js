import express from "express";
import { adminMiddleware,requireSignin } from "../common-middelwares/index.js";

import { createCategory,deleteCategory,getCategories, getCategory, updateCategory } from "../controllers/category.js";
const router = express.Router();

router.post("/category/create",requireSignin,adminMiddleware, createCategory);
router.get("/category/getcategories", getCategories);
router.get("/category/getcategory/:id",getCategory);
router.patch("/category/updatecategory/:id",requireSignin,adminMiddleware,updateCategory);
router.delete("/category/deletecategory/:id",requireSignin,adminMiddleware,deleteCategory);

export default router;
