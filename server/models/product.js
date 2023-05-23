import mongoose from "mongoose";


const productSchema = mongoose.Schema(
  {
    name: { type: String, unique: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    productImage: {
      type: String,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
