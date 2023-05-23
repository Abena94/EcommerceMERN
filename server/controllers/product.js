import Product from '../models/product.js';
import Category from '../models/category.js';
import mongoose from 'mongoose';
import slugify from 'slugify';

import 'mongoose-double';

export const createProduct = async (req, res) => {
 const { name, price, description, category } = req.body;
    const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    description,
    productImage: '/uploads/' + req.file.filename,
    category:mongoose.Types.ObjectId(category),
    
  });
  await product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product, file: req.file });
    }
  });
};

export const getProductsBySlug =async  (req, res) => {
  const { slug } = req.params;
  const product=await Product.findOne({ slug: slug });
  if(!product){
    return res.status(404).json({ message : 'product inavailable'});
  }
  else{
    res.status(200).json({ product });
  

}}

export const getProductDetailsById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({_id:id});
    if (!product) {
      res.status(404).json({ message: "product doesn't exist" });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  
};

// new update
export const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id).then((data) =>{
        if(!data){res.status(404).send({
            message: `Cannot find Product `
          });
        }else{
            res.status(200).json({ message: "deleted succesfully" });
        }
    } )

   
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProducts = async (req, res) =>{
    try {
        const listProducts = await Product.find().populate('category','name id',Category);
        res.status(200).send(listProducts)
    } catch (error) {
        res.status(400).send({ msg: `Can not get products!! ${error}`})
    }
}
export const updateProduct = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  //const { id } = req.params;
  const  {id}  = req.params;
  
    const { name,category,description,price} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

    //const updatedProduct = { name,Category,description,price,productImage, _id: id };

    const product=await Product.findByIdAndUpdate(id, {
      name: name,
      slug: slugify(name),
      price,
      description,
      productImage:'/public/uploads/' + req.file.filename,
      category:mongoose.Types.ObjectId(category),
      
    }, { new: true });

    res.status(200).json({product,file:req.file});
};
