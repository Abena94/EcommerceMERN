import express from 'express';
import {getProducts,createProduct, getProductDetailsById, getProductsBySlug, updateProduct, deleteProductById} from '../controllers/product.js'
import {requireSignin,adminMiddleware} from '../common-middelwares/index.js'
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null,path.join(path.dirname(__dirname ),'/uploads'))
    },
    filename: function(req, file, callback) {
      //console.log(file)
      var ext= file.originalname.substr(file.originalname.lastIndexOf('.'))
      callback(null, file.fieldname + '-' + Date.now() + ext)
    }
  })
const upload = multer({ storage: storage }); 




const router=express.Router();
router.get('/product/getall',getProducts);
router.post('/product/create',requireSignin,adminMiddleware,upload.single('productImage'),createProduct);
router.get('/product/getone/:id',getProductDetailsById);
router.get('/product/getonebyslug/:slug',getProductsBySlug);
router.post('/product/updateproduct/:id',requireSignin,adminMiddleware,upload.single('productImage'),updateProduct);
router.delete('/product/deleteproduct/:id',requireSignin,adminMiddleware,deleteProductById)



export default router;
