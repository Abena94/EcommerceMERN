import Order from '../models/order.js';
import Cart from '../models/cart.js';

export const addOrder = (req, res) => {
  Cart.deleteOne({ user: req.user._id }).exec((error, result) => {
    if (error) return res.status(400).json({ error });
    if (result) {
      req.body.user = req.user._id;
    
      req.body.orderStatus = [
        {
          type: "ordered",
          date: new Date(),
          isCompleted: true,
        },
        {
          type: "packed",
          isCompleted: false,
        },
        {
          type: "shipped",
          isCompleted: false,
        },
        {
          type: "delivered",
          isCompleted: false,
        },
      ];
      const order = new Order(req.body);
     
      order.save((error, order) => {
        if (error) return res.status(400).json({ error });
        if (order) {
          res.status(201).json({ order });
        }
      });
    }
   
  });
 
  
};

export const getOrders = (req, res) => {
  Order.find({ user: req.user._id })
    .select("_id orderStatus items totalAmount")
    .populate("items.productId", "_id name productImage")
    .exec((error, orders) => {
      if (error) return res.status(400).json({ error });
      if (orders) {
        res.status(200).json({ orders });
      }
    });
};

export const getOrder = (req, res) => {
    const {id}=req.params;
  Order.findOne({ _id: id })
    .populate("items.productId", "_id name productImage")
    .lean()
    .exec((error, order) => {
      if (error) {return res.status(400).json({ error })};
      if (order) {
        res.status(200).json({order});
    }})
}
