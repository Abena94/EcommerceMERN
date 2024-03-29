import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      totalAmount: {
        type: Number,
        required: true,
      },
      items: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          payablePrice: {
            type: Number,
            required: true,
          },
          purchasedQty: {
            type: Number,
            required: true,
          },
        },
      ],
      orderStatus: [
        {
          type: {
            type: String,
            enum: ["ordered", "packed", "shipped", "delivered"],
            default: "ordered",
          },
          date: {
            type: Date,
          },
          isCompleted: {
            type: Boolean,
            default: false,
          },
        },
      ],
    },
    { timestamps: true }
  );
  
  const Order = mongoose.model("Order", orderSchema);
export default Order;