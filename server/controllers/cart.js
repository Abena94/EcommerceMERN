import Cart from "../models/cart.js";
import mongoose from "mongoose";
import { deleteProductById } from "./product.js";

export const addItemToCart = async (req, res) => {
  
const existingCart =await Cart.findOne({ user: req.user._id });
 if (existingCart) {
 const cart=req.body.cartItems;
const item=existingCart.cartItems.find(c=>c.product==cart.product)
if(item){
    Cart.findOneAndUpdate({"user":req.user._id,"cartItems.product" : product},{
        "$set":{
            "cartItems.$":{
                ...req.body.cartItems,
                quantity:item.quantity + req.body.cartItems.quantity
            }
        }
    },{new:true})
    .exec((error,_cart)=>{
        if(error) return res.status(400).json({error});
        if(_cart){
            return res.status(201).json({existingCart:_cart});
        }
    })
}
else{ 
    Cart.findOneAndUpdate({ user: req.user._id }, {
        "$push": {
            "cartItems": req.body.cartItems
        }
    },{new:true})
        .exec((error, _cart) => {
            if (error)
                return res.status(400).json({ error });
            if (_cart) {
                return res.status(201).json({ existingCart: _cart });
            }
        })}




   
  } else{
    
    const cart = new Cart({
      user: req.user._id,
      cartItems: [req.body.cartItems],
    });
    cart.save((error, cart) => {
      if (error) return res.status(400).json({ error });
      if (cart) return res.status(201).json({ cart });
    });
  }

};

export const getCartItems = (req, res) => {
  Cart.findOne({ user: req.user._id })
    .populate("cartItems.product", "_id name price productImage")
    .exec((error, cart) => {
      if (error) return res.status(400).json({ error });
      if (cart) {
        let cartItems = [];
        cart.cartItems.forEach((item, index) => {
          cartItems[index] = {
            _id: item.product._id.toString(),
            name: item.product.name,
            img: item.product.productImage,
            price: item.product.price,
            qty: item.quantity,
          };
        });
        res.status(200).json({ cartItems });
      }
    });
};

export const removeCartItem = (req, res) => {
  const { product } = req.body;
  const cart = Cart.findOneAndUpdate(
    { user: req.user._id },
    {
      "$pull": {
        "cartItems": {
          product: product,
        },
      },
    },
    { new: true }
  ).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      return res.status(201).json({ cart });
    }
  });
};

export const removeCart = async (req, res) => {
  const cart = Cart.findOneAndUpdate(
    { user: req.user._id },
    {
      "$pull": {
        "cartItems": {$exists:true}
      },
    },
    { new: true }
  ).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      return res.status(201).json({ cart });
    }
  });
};
